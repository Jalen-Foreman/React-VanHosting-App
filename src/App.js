import React from 'react';
import About from './components/About';
import Home from './components/Home';
import { Route } from 'react-router-dom';

const App = () => {

	return (
		<>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		</>
	);
};

export default App;
