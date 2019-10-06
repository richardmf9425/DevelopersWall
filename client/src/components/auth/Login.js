import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [ formInfo, setFormInfo ] = useState({
		email: '',
		password: ''
	});
	const { email, password } = formInfo;
	const onChange = (e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
	const onSubmit = async (e) => {
		e.preventDefault();

		console.log('good');
	};
	return (
		<Fragment>
			<div className="signup">
				<h1 className="large text-primary">Log In</h1>
				<p className="lead">
					<i className="fas fa-user" /> Log Into Your Account
				</p>
				<form className="form" onSubmit={(e) => onSubmit(e)}>
					<div className="form-group">
						<input
							type="email"
							placeholder="Email Address"
							name="email"
							value={email}
							onChange={(e) => onChange(e)}
							required
						/>
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

					<input type="submit" className="btn btn-primary" value="Log In" />
				</form>
				<p className="my-1">
					Don't have an account? <Link to="/signup">Create Account </Link>
				</p>
			</div>
		</Fragment>
	);
};

export default Login;
