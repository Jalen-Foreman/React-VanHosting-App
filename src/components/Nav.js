import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Avatar from '../images/avatar-icon.png'
import '../css/index.css'

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
				
				<Link to='login' className='login-link'>
					<img
						src={Avatar}
						alt='login'
						className='login-icon'
					/>
				</Link>
				
			</nav>
		</header>
	);
}

export default Nav