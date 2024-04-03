import '../App.css'
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Signup = () => {
	const navigate = useNavigate()
	const [formData, setFormData] = React.useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		password: ''
	})

	const handleSignup = async () => {
		try {
			const response = await axios.post('http://146.190.164.174:4000/api/admin/signup_admin', {
				first_name: formData.firstName,
				last_name: formData.lastName,
				email: formData.email,
				password: formData.password,
				status: true
			});
			console.log(response);
			navigate('/login');
		} catch (error) {
			console.error('Signup failed:', error);
		}
	}



	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}))
	}


	return (
		<div className="container-fluid">
			<div className="row vh-100">

				<div className="col-sm-7">

					<div className="row">

						<div className="col-sm-5 p-0 justify-content-center d-flex justify-content-center  c2-margin">
							<img
								src="logo.png"
								alt="logo"
								className='login-img'
								style={{
									height: "30px",
									width: "90%",
								}}
							/>
						</div>

						<div className="col-sm-7 d-flex  justify-content-center  vh-100 p-0">


							<div className="login-container  d-flex flex-column align-items-center justify-content-center"
								style={{
									width: "80%",
									height: "50%",
									marginTop: "40%",

								}}
							>
								<div
									className='login-heading'
									style={{
										width: "100%",
									}}
								>
									<h4 style={{ fontWeight: "800" }} >Get started with a forever free plan</h4>
									<p style={{ fontWeight: "500" }} >Sign up in seconds. No credit card required</p>

								</div>

								<Box
									sx={{
										m: 1,
										width: '100%'
									}}

								>
									<TextField
										id="outlined-basic"
										label="First Name"
										variant="outlined"
										fullWidth
										name="firstName"
										value={formData.firstName}
										onChange={handleInputChange}
									/>
								</Box>
								<Box
									sx={{
										m: 1,
										width: '100%'
									}}

								>
									<TextField
										id="outlined-basic"
										label="Last name"
										variant="outlined"
										fullWidth
										name="lastName"
										value={formData.lastName}
										onChange={handleInputChange}
									/>
								</Box>
								<Box
									sx={{
										m: 1,
										width: '100%'
									}}

								>
									<TextField
										id="outlined-basic"
										label="Email"
										variant="outlined"
										fullWidth
										name="email"
										value={formData.email}
										onChange={handleInputChange}
									/>
								</Box>
								<Box
									sx={{
										m: 1,
										width: '100%'
									}}

								>
									<TextField
										id="outlined-basic"
										label="Phone"
										variant="outlined"
										fullWidth
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
									/>
								</Box>

								<Box
									sx={{
										m: 1,
										width: '100%'
									}}
								>
									<TextField
										id="outlined-basic"
										label="password"
										variant="outlined"
										fullWidth
										type="password"
										name="password"
										value={formData.password}
										onChange={handleInputChange}
									/>
								</Box>
								
								<div
									className="password-instruct"
									style={{
										width: "100%",
										fontSize: "12px",
										fontWeight: "700",
										marginBottom: "5px",
										color: "gray"
									}}
								>
									<div className="row">
										<div className="col"><li>one lower case character</li></div>
										<div className="col"><li>one number</li></div>
									</div>
									<div className="row">
										<div className="col"><li>one upper case Character</li></div>
										<div className="col"><li>8 character minimum</li></div>
									</div>

								</div>

								<p style={{
									width: "100%",
									fontSize: "0.80rem",
									fontWeight: "700",
									color: "gray"
								}}
								>By clicking you agree to Term Of Use, Privacy Policy and Anti-spam Policy</p>

								{/* button */}
								<Stack spacing={2} direction="row"
									sx={{
										width: '100%',
									}}
								>
									<Button
										variant="contained"
										fullWidth
										onClick={handleSignup}
										style={{
											backgroundColor: "#01a95a"
										}}
									>Sign Up</Button>
								</Stack>
							</div>

						</div>
					</div>
				</div>

				<div className="col-sm-5 p-0 singup-img">
					{/* <img src="signup-side.jpeg" alt="login-side-img" className='login-img' /> */}
				</div>
			</div>
		</div>

	)
}
