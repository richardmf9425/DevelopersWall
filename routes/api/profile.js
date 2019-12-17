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

//route DELETE api/profile
//desc  delete user and profile
//access private

router.delete('/', auth, async (req, res) => {
	try {
		//remove posts
		//remove profile
		await Profile.findOneAndRemove({ user: req.user.id });
		// remove user
		await User.findOneAndRemove({ _id: req.user.id });
		res.json({ msg: 'User has been removed successfully' });
	} catch (e) {
		console.error(e.message);
		res.status(500).send('Server Error');
	}
});

//route PUT api/profile/experience
//desc  add experience
//access private
router.put(
	'/experience',
	[
		auth,
		[
			check('title', 'job title is required').not().isEmpty(),
			check('company', 'job company is required').not().isEmpty(),
			check('from', 'start date is required').not().isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

		const { title, company, location, from, to, current, description } = req.body;

		const newExperience = {
			title,
			company,
			location,
			from,
			to,
			current,
			description
		};
		try {
			const profile = await Profile.findOne({ user: req.user.id });
			profile.experience.unshift(newExperience);
			await profile.save();

			res.json(profile);
		} catch (e) {
			console.error(e.message);
			res.status(500).send('Server Error');
		}
	}
);

//route DELETE api/profile/experience/:exp_id
//desc  delete job experience from profile
//access private
router.delete('/experience/:exp_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });

		//Get remove index
		const expAfterDeletion = profile.experience.filter((item) => item.id !== req.params.exp_id);
		profile.experience = expAfterDeletion;
		await profile.save();
		res.json(profile);
	} catch (e) {
		console.error(e.message);
		res.status(500).send('Server Error');
	}
});

//route PUT api/profile/education
//desc  add education
//access private
router.put(
	'/education',
	[
		auth,
		[
			check('school', 'School is required').not().isEmpty(),
			check('degree', ' Degree Level is required').not().isEmpty(),
			check('major', 'Major is required').not().isEmpty(),
			check('from', 'start date is required').not().isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

		const { school, degree, major, from, to, current, description } = req.body;

		const newEducation = {
			school,
			degree,
			major,
			from,
			to,
			current,
			description
		};
		try {
			const profile = await Profile.findOne({ user: req.user.id });
			profile.education.unshift(newEducation);
			await profile.save();

			res.json(profile);
		} catch (e) {
			console.error(e.message);
			res.status(500).send('Server Error');
		}
	}
);

//route DELETE api/profile/education/:edu_id
//desc  delete job education from profile
//access private
router.delete('/education/:edu_id', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });

		//Get remove index
		const eduAfterDeletion = profile.education.filter((item) => item.id !== req.params.edu_id);
		profile.education = eduAfterDeletion;
		await profile.save();
		res.json(profile);
	} catch (e) {
		console.error(e.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
