const express = require('express');
const router = express.Router();
const auth = require('../../middleware/authentication');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');

//route GET api/profile/me
//desc  GET Get user profile
//access private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user._id }).populate('user', [ 'name', 'avatar' ]);

		if (!profile) return res.status(400).json({ msg: "We don't have a profile with this user info" });

		res.json(profile);
	} catch (e) {
		console.error(e.message);
		res.status(500).send('Server Error');
	}
});

//route POST api/profile
//desc  Create or update user profile
//access private

router.post(
	'/',
	[
		auth,
		[
			check('level', 'Level is a required field').not().isEmpty(),
			check('skills', 'Please enter some skills').not().isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

		const {
			company,
			occupation,
			website,
			location,
			level,
			skills,
			background,
			githubusername,
			twitter,
			linkedin,
			portfolio
		} = req.body;

		//build profile

		const profileFields = {};
		profileFields.user = req.user.id;
		if (company) profileFields.company = company;
		if (occupation) profileFields.occupation = occupation;
		if (website) profileFields.website = website;
		if (location) profileFields.location = location;
		if (level) profileFields.level = level;
		if (githubusername) profileFields.githubusername = githubusername;
		if (skills) {
			profileFields.skills = skills.split(',').map((skill) => skill.trim());
		}
		profileFields.links = {};
		if (twitter) profileFields.links.twitter = twitter;
		if (linkedin) profileFields.links.linkedin = linkedin;
		if (portfolio) profileFields.links.portfolio = portfolio;

		try {
			let profile = await Profile.findOne({ user: req.user.id });
			//Update
			if (profile) {
				profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });

				return res.json(profile);
			}
			//Create
			profile = new Profile(profileFields);
			await profile.save();
			res.json(profile);
		} catch (e) {
			console.error(e.message);
			res.status(500).send('server error');
		}
	}
);

//route GET api/profile
//desc  get all profiles
//access public

router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('user', [ 'name', 'avatar' ]);
		res.json(profiles);
	} catch (e) {
		console.error(e.message);
		res.status(500).send('Server Error');
	}
});

//route GET api/profile/user/:user_id
//desc  get profile by user id
//access public

router.get('/user/:user_id', async (req, res) => {
	try {
		const { user_id } = req.params;
		const profile = await Profile.findOne({ user: user_id }).populate('user', [ 'name', 'avatar' ]);
		if (!profile) return res.status(400).json({ msg: ' Profile does not exist' });
		res.json(profile);
	} catch (e) {
		console.error(e.message);
		if (e.kind === 'ObjectId') return res.status(400).json({ msg: ' Profile does not exist' });
		res.status(500).send('Server Error');
	}
});

module.exports = router;
