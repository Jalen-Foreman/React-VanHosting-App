/* eslint-disable jsx-a11y/img-redundant-alt */
import { React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import '../../css/index.css'

const HostVans = () => {

    const [listVans, setlistVans] = useState([])

    useEffect(() => {
        fetch('/api/host/vans')
        .then(res => res.json())
        .then(data => setlistVans(data.vans)
        )
    },[])


    

    const vansList = listVans.map((van) => (
			<Link
				to={`${van.id}`}
				key={van.id}
				className='host-van-link-wrapper'>
				<div className='host-van-single' key={van.id}>
					<img src={van.imageUrl} alt={`Photo of ${van.name}`} />
					<div className='host-van-info'>
						<h3>{van.name}</h3>
						<p>${van.price}/day</p>
					</div>
				</div>
			</Link>
		));


    
  return (
		<section>
			<h1 className='host-vans-title'>Your Listed Vans</h1>
			<di className='host-vans-list'>
				{listVans.length > 0 ? (
					<section>{vansList}</section>
				) : (
					<h2>Loading...</h2>
				)}
			</di>
		</section>
	);
}

export default HostVans