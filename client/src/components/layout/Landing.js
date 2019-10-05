import React from 'react';

const Landing = () => {
	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1 className="x-large">Developers Wall</h1>
					<p className="lead">Don't search for jobs. Let them search for you</p>
					<div className="buttons">
						<a href="register.html" className="btn btn-primary">
							Sign Up
						</a>
						<a href="login.html" className="btn btn-light">
							Log In
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
