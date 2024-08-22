import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Nav.css'

const activeStyle = {
	fontWeight: 'bold',
	textDecoration: 'underline',
	color: 'red',
};

const Nav = () => {
  return (
		<header>
			<NavLink className='site-logo' to='/'>
				#VanLife
			</NavLink>
			<nav>
				<NavLink
					to='about'
					style={({ isActive }) => (isActive ? activeStyle : null)}>
					About
				</NavLink>
				<NavLink
					to='vans'
					style={({ isActive }) => (isActive ? activeStyle : null)}>
					Vans
				</NavLink>
				<NavLink
					to='host'
					style={({ isActive }) => (isActive ? activeStyle : null)}>
					Host
				</NavLink>
			</nav>
		</header>
	);
}

export default Nav