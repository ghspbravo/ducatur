import React, { Component } from 'react';
import Section from './components/Section'
import Main from './components/Main'
import Navbar from './components/Navbar';

class App extends Component {
	render() {
		return (
			<main>
				<Navbar items={['Ducator', 'Ducator', 'Ducator', 'Ducator', 'Ducator', 'Ducator']} />
				<Section style={{background: 'linear-gradient(0.95deg, #1A105E -1597.6%, #392682 1697.6%), #FFFFFF', height: '100vh'}}>
					<Main />
				</Section>
			</main>
		);
	}
}

export default App;
