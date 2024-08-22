import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {

const [van, setVan] = useOutletContext()

  return <h4>${van.price}/day</h4>;
}

export default HostVanPricing