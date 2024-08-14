import React from 'react'
import "../css/Home.css"
import logo from '../images/logog.png'
import { Link } from 'react-router-dom'

const Home = () => {
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
			<main>
				<h1>You got the travel plans, we got the travel vans.</h1>
				<p>
					Add adventure to your life by joining the #vanlife movement. Rent the
					perfect van to make your perfect road trip.
				</p>
        <Link to="">Find your van</Link>
			</main>
			<footer>
				<h2>Ⓒ 2022 #VANLIFE</h2>
			</footer>
		</div>
	);
}

export default Home