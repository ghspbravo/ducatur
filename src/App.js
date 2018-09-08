import React, { Component } from 'react';
import Main from './components/Main'
import Navbar from './components/Navbar';
import City from './components/City';
import Integrations from './components/Integrations';
import Product from './components/Product';
import Doctrine from './components/Doctrine';
import SideNavigation from './components/SideNavigation';

class App extends Component {
	render() {
		return (
			<main style={{ background: 'linear-gradient(4.4deg, #100640 -1378.52%, #12032B 1464.65%), #FFFFFF' }}>
				<Navbar items={['Ducator', 'Ducator', 'Ducator', 'Ducator', 'Ducator', 'Ducator']} />
				<SideNavigation index={0}/>
				<Main />
				<City />
				<Integrations />
				<Product />
				<Doctrine />
			</main>
		);
	}
}

export default App;
