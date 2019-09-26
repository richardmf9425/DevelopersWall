const express = require('express');
const router = express.Router();
const auth = require('../../middleware/authentication');

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

module.exports = router;
