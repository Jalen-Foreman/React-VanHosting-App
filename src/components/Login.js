import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../css/index.css'

const Login = () => {

const [loginFormData, setLoginFormData] = useState({email:'', password:''})
const location = useLocation()


function handleSubmit(e) {
    e.preventDefault()
    console.log(loginFormData);
}

function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData(prev => ({
        ...prev,
        [name]: value
    }))
}

const loginError = location.state?.message || ""


  return (
		<div className='login-container'>
			{loginError ? <h1 className='login-first'>{loginError}</h1> : null}
			<h1>Sign in to your account </h1>
			<form onSubmit={handleSubmit} className='login-form'>
				<input
					name='email'
					onChange={handleChange}
					type='email'
					placeholder='Email address'
					value={loginFormData.email}
				/>
				<input
					name='password'
					onChange={handleChange}
					type='password'
					placeholder='Password'
					value={loginFormData.password}
				/>
				<button>Log in</button>
			</form>
		</div>
	);
}

export default Login