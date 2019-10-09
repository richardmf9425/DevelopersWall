import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';

import './App.css';
import Footer from './components/layout/Footer';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Route exact path="/" component={Landing} />
					<section className="container">
						<Alert />
						<Switch>
							<Route exact path="/signup" component={SignUp} />
							<Route exact path="/login" component={Login} />
						</Switch>
					</section>
					<Footer />
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
