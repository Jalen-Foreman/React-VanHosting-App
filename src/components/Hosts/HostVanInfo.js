import React from 'react'
import { Outlet, NavLink, useOutletContext } from 'react-router-dom'



const HostVanInfo = () => {

    const [van, setVan] = useOutletContext()
    console.log(van);
    

  return (
		<div>
			<p>Name: {van.name}</p>
			<p>Category: {van.type}</p>
			<p>Description: {van.description}</p>
			<p>Visibility: Public</p>
		</div>
	);
}

export default HostVanInfo