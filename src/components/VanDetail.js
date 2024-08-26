import {React, useEffect, useState} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';
import { getVans } from '../api';
import '../css/index.css'

const VanDetail = () => {

  const [van, setVan] = useState(null);
  const [error, setError] = useState(null)	
  const [loading, setLoading] = useState(false);

  const params = useParams()
  const id = params.id

  useEffect(() => {
	async function loadVans(id) {
		try {
			setLoading(true)
			const data = await getVans(id)
			setVan(data)
		} catch(err) {
			setError(err)
		}
		setLoading(false)
	}
	loadVans(id)
  }, [id])

  let location = useLocation()
 
  
  
  let search = location.state?.search || ""
  let type = location.state?.type || ""

  console.log(location.state.search);
  
	if (error) {
		return <h1>{error.message}</h1>
	}

	if (loading) {
		return <h1>Loading...</h1>;
	}


  return (
		<div className='van-detail-container'>
			<Link
				to={`..?${search}`}
				relative='path'
				className='back-button'>
				&larr; <span>{`Back to ${type} vans`}</span>
			</Link>
			{van ? (
				<div className='van-detail'>
					<img src={van.imageUrl} alt='van' />
					<i className={`van-type ${van.type} selected`}>{van.type}</i>
					<h2>{van.name}</h2>
					<p className='van-price'>
						<span>${van.price}</span>/day
					</p>
					<p>{van.description}</p>
					<button className='link-button'>Rent this van</button>
				</div>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
}

export default VanDetail