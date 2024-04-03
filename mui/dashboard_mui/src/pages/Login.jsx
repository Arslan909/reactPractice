import '../App.css'
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const Login = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState('');
	const navigate = useNavigate();

	const handleLogin = async () => {
		try {
			setLoading(true);
			const response = await axios.post('http://146.190.164.174:4000/api/app_api/login', {
				email: email,
				password: password,
				type: 0
			});
			const userId = response.data.data.user_id._id;
			const token = response.data.token;
			localStorage.setItem('token', token);
			localStorage.setItem('userId', userId);
			setLoading(false);
			navigate('/');
			
		} catch (error) {
			setError('Failed to login. Please check your email and password.');
			setLoading(false);
			console.error('Login failed: ', error);
		}
	};

	const handleCloseSnackbar = () => {
		setError('');
	};

	return (
		<div className="container-fluid">
			<div className="row vh-100">
				<div className="col-sm-7">
					<div className="row">
						<div className="col-sm-5  p-0 justify-content-center d-flex justify-content-center  c-margin">
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
						<div className="col-sm-7  d-flex  justify-content-center   vh-100 p-0">
							<div className="login-container  d-flex flex-column align-items-center justify-content-center"
								style={{
									width: "80%",
									height: "60%",
									marginTop: "20%",
								}}
							>
								<div className='login-heading' style={{ width: "100%", marginRight: "auto" }}>
									<h4 style={{ fontWeight: "800" }}>Sign in to your Mailcub Account</h4>
									<p style={{ fontWeight: "500" }}>Do not have an account yet? <strong ><Link to={"/signup"} style={{ color: "#01a95a", fontWeight: "800" }}>Sign up</Link></strong></p>
								</div>
								<Box sx={{ m: 1, width: '100%' }}>
									<TextField
										id="outlined-basic"
										label="email"
										variant="outlined"
										fullWidth
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Box>
								<Box sx={{ m: 1, width: '100%' }}>
									<TextField
										id="outlined-basic"
										label="password"
										variant="outlined"
										fullWidth
										type='password'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</Box>

								<p style={{ color: "#01a95a", marginLeft: "auto", fontWeight: "800" }}>Forgot your password?</p>
								
								<Stack spacing={2} direction="row" sx={{ width: '100%' }}>
									<Button
										variant="contained"
										fullWidth
										onClick={handleLogin}
										style={{ backgroundColor: "#01a95a" }}
										disabled={loading}
									>
										{loading ? <CircularProgress size={24} color="inherit" /> : "Sign In"}
									</Button>
								</Stack>
								
								<Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
									<MuiAlert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
										{error}
									</MuiAlert>
								</Snackbar>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-5 p-0">
					<img src="login-side.jpg" alt="login-side-img" className='login-img' />
				</div>
			</div>
		</div>
	);
}
