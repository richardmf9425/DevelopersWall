import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = (props) => {
	const [ formData, setFormData ] = useState({
		location: '',
		level: '',
		skills: '',
		description: '',
		githubusername: '',
		twitter: '',
		linkedin: '',
		portfolio: ''
	});

	const [ displayLinks, toggleDisplayLinks ] = useState(false);

	const { location, level, skills, description, githubusername, twitter, linkedin, portfolio } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
	return (
		<Fragment>
			<h1 className="large text-primary">Create Your Profile</h1>
			<p className="lead">
				<i className="fas fa-user" /> Let's get your profile setup
			</p>
			<small>
				<span className="red-required">*</span> = required field
			</small>
			<form className="form">
				<div className="form-group">
					<label htmlFor="level">
						<span className="red-required">*</span>
					</label>
					<select id="level" name="level" value={level} onChange={(e) => onChange(e)}>
						<option value="0">Select Professional Level / Occupation</option>
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
					<input
						type="text"
						placeholder="Location"
						name="location"
						value={location}
						onChange={(e) => onChange(e)}
					/>
					<small className="form-text">City & state suggested (eg. Boston, MA)</small>
				</div>
				<div className="form-group">
					<label htmlFor="skills">
						<span className="red-required">*</span>
					</label>
					<input
						id="skills"
						type="text"
						placeholder="Skills"
						name="skills"
						value={skills}
						onChange={(e) => onChange(e)}
					/>
					<small className="form-text">
						Please use comma separated values (eg. HTML,CSS,JavaScript,React) and list them in descending
						order with the first one being your strongest/preferred.
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Github Username"
						name="githubusername"
						value={githubusername}
						onChange={(e) => onChange(e)}
					/>
					<small className="form-text">
						If you want your latest repos and a Github link, include your username
					</small>
				</div>
				<div className="form-group">
					<textarea
						placeholder="What makes you unique?!!"
						name="description"
						value={description}
						onChange={(e) => onChange(e)}
					/>
					<small className="form-text">Tell us a little about yourself</small>
				</div>

				<div className="my-2">
					<button onClick={() => toggleDisplayLinks(!displayLinks)} type="button" className="btn btn-light">
						Add Links
					</button>
					<span>Optional</span>
				</div>

				{displayLinks && (
					<Fragment>
						<div className="form-group social-input">
							<i className="fas fa-link fa-2x" />
							<input
								type="text"
								placeholder="Portfolio URL"
								name="portfolio-link"
								value={portfolio}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className="form-group social-input">
							<i className="fab fa-twitter fa-2x" />
							<input
								type="text"
								placeholder="Twitter URL"
								name="twitter"
								value={twitter}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className="form-group social-input">
							<i className="fab fa-linkedin fa-2x" />
							<input
								type="text"
								placeholder="Linkedin URL"
								name="linkedin"
								value={linkedin}
								onChange={(e) => onChange(e)}
							/>
						</div>
					</Fragment>
				)}

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
