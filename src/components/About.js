import React from 'react';
import '../css/About.css';
import logo from '../images/logog.png';
import VanLife from '../images/image 55.jpg'
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className='container'>
			<nav>
				<ul>
					<li>
						<a href='#'>
							<img className='logo' src={logo} alt='logo' />
						</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Vans</a>
					</li>
				</ul>
			</nav>
			<img className='VanLife' src={VanLife} alt='vanLife' />
			<main>
				<h1>Don't squeeze in a sedan when you could relax in a van.</h1>
				<p>
					Our mission is to enliven your road trip with the perfect travel van
					rental. Our vans are recertified before each trip to ensure your
					travel plans can go off without a hitch. (Hitch costs extra 😉) Our
					team is full of vanlife enthusiasts who know firsthand the magic of
					touring the world on 4 wheels.
				</p>
				<div>
					<h2>
						Your destination is waiting.
						Your van is ready.
					</h2>
					<Link to="">Explore our vans</Link>
				</div>
			</main>
			<footer>
				<h2>Ⓒ 2022 #VANLIFE</h2>
			</footer>
		</div>
	);
};

export default About;
