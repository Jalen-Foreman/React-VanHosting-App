import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../css/index.css'


const activeStyle = {
		fontWeight: 'bold',
		textDecoration: 'underline',
		color: '#161616',
	};

const HostLayout = () => {

  return (
		<>
			<nav className='host-nav'>
				<NavLink
					to='.'
					style={({ isActive }) => (isActive ? activeStyle : null)}
					end
				>
					Dashboard
				</NavLink>
				<NavLink
					to='income'
					style={({ isActive }) => (isActive ? activeStyle : null)}
				>
					Income
				</NavLink>
				<NavLink
					to='vans'
					style={({ isActive }) => (isActive ? activeStyle : null)}
				>
					Vans
				</NavLink>
				<NavLink
					to='reviews'
					style={({ isActive }) => (isActive ? activeStyle : null)}
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}

export default HostLayout