import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = (props) => {
	const [ formData, setFormData ] = useState({
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

	const [ displayLinks, toggleDisplayLinks ] = useState(false);

	const { location, occupation, level, skills, background, githubusername, twitter, linkedin, portfolio } = formData;
	return (
		<Fragment>
			<h1 className="large text-primary">Create Your Profile</h1>
			<p className="lead">
				<i className="fas fa-user" /> Let's get some information to make your profile stand out
			</p>
			<small>* = required field</small>
			<form className="form">
				<div className="form-group">
					<select name="level">
						<option value="0">* Select Professional Level / Occupation</option>
						<option value="Developer">Developer</option>
						<option value="Software Engineer">Software Engineer</option>
						<option value="Junior Developer">Junior Developer</option>
						<option value="Senior Developer">Senior Developer</option>
						<option value="Manager">Manager</option>
						<option value="Student or Learning">Student</option>
						<option value="Front End Engineer">Front End Engineer</option>
						<option value="Back End Engineer">Back End Engineer</option>
						<option value="Web Developer">Web Developer</option>
						<option value="Mobile Developer">Mobile Developer</option>
						<option value="Other">Other</option>
					</select>
					<small className="form-text">Give us an idea of where you are at in your career</small>
				</div>

				<div className="form-group">
					<input type="text" placeholder="Location" name="location" />
					<small className="form-text">City & state suggested (eg. Boston, MA)</small>
				</div>
				<div className="form-group">
					<input type="text" placeholder="* Skills" name="skills" />
					<small className="form-text">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
				</div>
				<div className="form-group">
					<input type="text" placeholder="Github Username" name="githubusername" />
					<small className="form-text">
						If you want your latest repos and a Github link, include your username
					</small>
				</div>
				<div className="form-group">
					<textarea placeholder="What makes you unique?!!" name="bio" />
					<small className="form-text">Tell us a little about yourself</small>
				</div>

				<div className="my-2">
					<button type="button" className="btn btn-light">
						Add Links
					</button>
					<span>Optional</span>
				</div>
				<div className="form-group social-input">
					<i className="fas fa-link fa-2x" />
					<input type="text" placeholder="Portfolio URL" name="portfolio-link" />
				</div>

				<div className="form-group social-input">
					<i className="fab fa-twitter fa-2x" />
					<input type="text" placeholder="Twitter URL" name="twitter" />
				</div>

				<div className="form-group social-input">
					<i className="fab fa-linkedin fa-2x" />
					<input type="text" placeholder="Linkedin URL" name="linkedin" />
				</div>

				<input type="submit" className="btn btn-primary my-1" />
				<a className="btn btn-light my-1" href="dashboard.html">
					Go Back
				</a>
			</form>
		</Fragment>
	);
};

CreateProfile.propTypes = {};

export default CreateProfile;
