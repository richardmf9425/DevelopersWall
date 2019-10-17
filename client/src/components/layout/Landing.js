import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<Fragment>
			<section className="landing">
				<div className="dark-overlay">
					<div className="landing-inner">
						<h1 className="x-large">Developers Wall</h1>
						<p className="lead">Don't search for jobs. Let them search for you</p>
						<div className="buttons">
							<Link to="/signup" className="btn btn-primary uppercase">
								Sign Up
							</Link>
							<Link to="/login" className="btn btn-light uppercase">
								Log In
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="about-section">
				<div className="about-inner-top">
					<h1 className="about-header">About</h1>
					<div className="about-content">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt libero aliquid corporis
							modi odit, veniam officiis ducimus illo error, ad cupiditate dicta enim possimus, quaerat
							accusantium quo provident quis commodi architecto explicabo sed eveniet. Culpa ea voluptatem
							eveniet amet possimus?
						</p>
					</div>
				</div>
				<div className="about-inner-down" />
			</section>
			<section className="mission-section">
				<div className="mission-inner-top">
					<h1 className="mission-header">Mission</h1>
					<div className="mission-content">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt libero aliquid corporis
							modi odit, veniam officiis ducimus illo error, ad cupiditate dicta enim possimus, quaerat
							accusantium quo provident quis commodi architecto explicabo sed eveniet. Culpa ea voluptatem
							eveniet amet possimus?
						</p>
					</div>
				</div>
				<div className="mission-inner-down" />
			</section>
			<section className="contact-section">
				<div className="contact-inner-top">
					<h1 className="contact-header">Contact</h1>
					<div className="contact-content">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt libero aliquid corporis
							modi odit, veniam officiis ducimus illo error, ad cupiditate dicta enim possimus, quaerat
							accusantium quo provident quis commodi architecto explicabo sed eveniet. Culpa ea voluptatem
							eveniet amet possimus test
						</p>
					</div>
				</div>
				<div className="contact-inner-down" />
			</section>
		</Fragment>
	);
};

export default Landing;
