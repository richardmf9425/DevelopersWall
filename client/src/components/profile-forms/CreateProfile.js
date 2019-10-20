import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = (props) => {
	const [ formData, setFormData ] = useState({
		company: '',

		location: '',
		occupation: '',
		level: '',
		skills: '',
		background: '',
		githubusername: '',
		twitter: '',
		linkedin: '',
		portfolio: ''
	});

	const {
		company,

		location,
		occupation,
		level,
		skills,
		background,
		githubusername,
		twitter,
		linkedin,
		portfolio
	} = formData;
	return <div />;
};

CreateProfile.propTypes = {};

export default CreateProfile;
