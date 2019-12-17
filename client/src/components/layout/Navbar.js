import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { PropTypes } from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to="/dashboard">
					<i className="fas fa-user" /> <span className="hide-sm">Dashboard</span>
				</Link>
			</li>
			<li>
				<a onClick={logout} href="#!">
					<i className="fas fa-sign-out-alt" /> <span className="hide-sm">LOG OUT</span>
				</a>
			</li>
		</ul>
	);
	const guestLinks = (
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
	);
	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">
					<i className="fas fa-laptop" /> Developers Wall
				</Link>
			</h1>
			{!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
