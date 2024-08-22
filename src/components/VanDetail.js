import {React, useEffect, useState} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';
import '../css/index.css'

const VanDetail = () => {

  const [van, setVan] = useState(null);
  const params = useParams()

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
    .then(res => res.json())
    .then(data => setVan(data.vans))
  }, [params.id])

  let location = useLocation()
 
  
  
  let search = location.state?.search || ""
  let type = location.state?.type || ""

  console.log(location.state.search);
  
  

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