import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer';
import '../css/index.css'

export const Layout = () => {
  return (
		<div className='site-wrapper'>
			<Nav />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
