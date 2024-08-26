/* eslint-disable jsx-a11y/img-redundant-alt */
import { React, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { getHostVans } from '../../api';
import '../../css/index.css'

const activeStyle = {
	fontWeight: 'bold',
	textDecoration: 'underline',
	color: '#161616',
};


const HostVanDetail = () => {

const [van, setVan] = useState();
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);


const params = useParams();
const id = params.id


useEffect(() => {
	async function loadHostVan(id) {
		try {
			setLoading(true)
			const data = await getHostVans(id)
			setVan(data.vans[0])
		} catch(err) {
			setError(err)
		}
		setLoading(false)
	}
	loadHostVan(id)
}, [id]);

if (error) {
	return <h1>{error.message}</h1>
}

if (loading) {
	return <h1>Loading...</h1>;
}

  return (
		<section>
			<Link to='..' relative='path' className='back-button'>
				&larr; <span>Back to all vans</span>
			</Link>
			<div className='host-van-detail-layout-container'>
				<div className='host-van-detail'>
					<img src={van.imageUrl} alt={`Photo of ${van.name}`} />
					<div className='host-van-detail-info-text'>
						<i className={`van-type van-type-${van.type}`}>{van.type}</i>
						<h3>{van.name}</h3>
						<h4>${van.price}/day</h4>
					</div>
				</div>
				<nav className='host-van-detail-nav'>
					<NavLink
						to='.'
						end
						style={({ isActive }) => (isActive ? activeStyle : null)}
					>
						Details
					</NavLink>
					<NavLink
						to='pricing'
						style={({ isActive }) => (isActive ? activeStyle : null)}
					>
						Pricing
					</NavLink>
					<NavLink
						to='photos'
						style={({ isActive }) => (isActive ? activeStyle : null)}
					>
						Photos
					</NavLink>
				</nav>
				<Outlet context={[van, setVan]} />
			</div>
		</section>
	);
}

export default HostVanDetail