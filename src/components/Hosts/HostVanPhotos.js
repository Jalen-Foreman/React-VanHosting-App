/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {

const [van, setVan] = useOutletContext()

  return <img src={van.imageUrl} alt={`Photo of ${van.name}`} />;
}

export default HostVanPhotos