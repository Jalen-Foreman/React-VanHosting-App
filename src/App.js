import React from 'react';
import About from './components/About';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Vans from './components/Vans';
import Nav from './components/Nav';
import './server';
import VanDetail from './components/VanDetail';
import { Layout } from './components/Layout';
import Income from './components/Hosts/Income';
import Reviews from './components/Hosts/Reviews';
import Dashboard from './components/Hosts/Dashboard';
import HostLayout from './components/Hosts/HostLayout';
import HostVans from './components/Hosts/HostVans';
import HostVanDetail from './components/Hosts/HostVanDetail';
import HostVanPricing from './components/Hosts/HostVanPricing';
import HostVanPhotos from './components/Hosts/HostVanPhotos';
import HostVanInfo from './components/Hosts/HostVanInfo';
import NotFound from './components/NotFound';
import Login from './components/Login';
import AuthRequired from './components/AuthRequired';

const App = () => {
	

	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='vans' element={<Vans />} />
					<Route path='vans/:id' element={<VanDetail />} />
					<Route path='*' element={<NotFound />} />
					<Route path='login' element={<Login />} />

					<Route element={<AuthRequired />}>
						<Route path='host' element={<HostLayout />}>
							<Route index element={<Dashboard />} />
							<Route path='income' element={<Income />} />
							<Route path='reviews' element={<Reviews />} />
							<Route path='vans' element={<HostVans />} />
							<Route path='vans/:id' element={<HostVanDetail />}>
								<Route index element={<HostVanInfo />} />
								<Route path='pricing' element={<HostVanPricing />} />
								<Route path='photos' element={<HostVanPhotos />} />
							</Route>
						</Route>
					</Route>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
