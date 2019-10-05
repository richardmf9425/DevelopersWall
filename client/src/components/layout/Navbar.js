import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">
					<i className="fas fa-laptop" /> Developers Wall
				</Link>
			</h1>
			<ul>
				<li>
					<Link to="/profiles">Developers</Link>
				</li>
				<li>
					<Link to="/signup">Sign Up</Link>
				</li>
				<li>
					<Link to="/login">Log In</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
