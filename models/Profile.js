const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	company: {
		type: String
	},
	occupation: {
		type: String
	},
	website: {
		type: String
	},
	location: {
		type: String
	},
	level: {
		type: String,
		required: true
	},
	skills: {
		type: [ String ],
		required: true
	},
	background: {
		type: String
	},
	githubusername: {
		type: String
	},

	experience: [
		{
			title: {
				type: String,
				required: true
			},
			company: {
				type: String,
				required: true
			},
			location: {
				type: String
			},
			from: {
				type: Date,
				required: true
			},
			to: {
				type: Date
			},
			current: {
				type: Boolean,
				default: false
			},
			description: {
				type: String
			}
		}
	],

	education: [
		{
			school: {
				type: String,
				required: true
			},
			degree: {
				type: String,
				required: true
			},
			major: {
				type: String,
				required: true
			},
			from: {
				type: Date,
				required: true
			},
			to: {
				type: Date
			},
			current: {
				type: Boolean,
				default: false
			},
			description: {
				type: String
			}
		}
	],
	links: {
		twitter: {
			type: String
		},
		linkedin: {
			type: String
		},
		portfolio: {
			type: String
		}
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
