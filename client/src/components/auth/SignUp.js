import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
	const [ formInfo, setFormInfo ] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirm: ''
	});
	const { name, email, password, passwordConfirm } = formInfo;
	const onChange = (e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== passwordConfirm) {
			console.log('password do not match');
		} else {
			console.log('good');
		}
	};
	return (
		<Fragment>
			<div className="signup">
				<h1 className="large text-primary">Sign Up</h1>
				<p className="lead">
					<i className="fas fa-user" /> Create Your Account
				</p>
				<form className="form" onSubmit={(e) => onSubmit(e)}>
					<div className="form-group">
						<input
							type="text"
							placeholder="Name"
							name="name"
							value={name}
							onChange={(e) => onChange(e)}
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							placeholder="Email Address"
							name="email"
							value={email}
							onChange={(e) => onChange(e)}
							required
						/>
						<small className="form-text">This website uses Gravatars</small>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Password"
							name="password"
							minLength="6"
							value={password}
							onChange={(e) => onChange(e)}
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Confirm Password"
							name="passwordConfirm"
							minLength="6"
							value={passwordConfirm}
							onChange={(e) => onChange(e)}
							required
						/>
					</div>
					<input type="submit" className="btn btn-primary" value="Sign Up" />
				</form>
				<p className="my-1">
					Already have an account? <Link to="/login">Sign In</Link>
				</p>
			</div>
		</Fragment>
	);
};

export default SignUp;
