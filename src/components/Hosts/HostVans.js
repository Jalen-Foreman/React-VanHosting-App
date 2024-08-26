/* eslint-disable jsx-a11y/img-redundant-alt */
import { React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { getHostVans } from '../../api';
import '../../css/index.css'

const HostVans = () => {

    const [vans, setVans] = useState([])
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadHostVans() {
			try {
				setLoading(true)
				const data = await getHostVans();
				setVans(data);
			} catch(err) {
				setError(err)
			}
			setLoading(false)
		}
		loadHostVans()
    },[])


    

    const vansList = vans.map((van) => (
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
    
if (error) {
	return <h1>{error.message}</h1>;
}

if (loading) {
	return <h1>Loading...</h1>;
}
	
  return (
		<section>
			<h1 className='host-vans-title'>Your Listed Vans</h1>
			<div className='host-vans-list'>
				{vans.length > 0 ? (
					<section>{vansList}</section>
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</section>
	);
}

export default HostVans