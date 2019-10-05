import React from 'react';

const Navbar = () => {
	return (
		<nav className="navbar bg-dark">
			<h1>
				<a href="index.html">
					<i className="fas fa-code" /> Developers Wall
				</a>
			</h1>
			<ul>
				<li>
					<a href="profiles.html">Developers</a>
				</li>
				<li>
					<a href="register.html">Sign Up</a>
				</li>
				<li>
					<a href="login.html">Login</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
