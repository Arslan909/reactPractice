import React from 'react'
import axios from 'axios'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
// import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function AccountDetail() {

	const [formData, setFormData] = React.useState({
		firstName: '',
		lastName: '',
		email: '',
		contactNumber: '',
		profileImage: '',
		status: true
	})

	React.useEffect(() => {

		const fetchCustomerData = async () => {
			try {
				const token = localStorage.getItem('token');
				const id = localStorage.getItem('userId');

				const headers = {
					'Content-Type': 'application/json',
					'x-sh-auth': token
				};

				const response = await axios.get(`http://146.190.164.174:4000/api/admin/detail_admin/?id=${id}`, {
					headers: headers
				});
				console.log(response.data.admin)
				setFormData({
					firstName: response.data.admin.first_name,
					lastName: response.data.admin.last_name,
					email: response.data.admin.user_id.email,
					contactNumber: response.data.admin.contact_number,
					profileImage: response.data.admin.profile_image,
				});


			} catch (error) {
				console.error('getting admin detail failed:', error)
			}
		}

		fetchCustomerData()


	}, [])

	const [editMode, setEditMode] = React.useState(false)

	const handleEditClick = () => {
		setEditMode(true)
	}


	const handleSave = async () => {
		try {
			const token = localStorage.getItem('token');
			const id = localStorage.getItem('userId');

			const headers = {
				'Content-Type': 'application/json',
				'x-sh-auth': token
			};

			const response = await axios.put(`http://146.190.164.174:4000/api/admin/edit_admin/?id=${id}`, {
				first_name: formData.firstName,
				last_name: formData.lastName,
				contact_number: formData.contactNumber,
				profile_image: formData.profileImage,
				status: true
			}, {
				headers: headers
			});

			console.log(response); // Log the response if needed

			setEditMode(false); // Disable edit mode after successfully saving
		} catch (error) {
			console.error('Editing admin detail failed:', error);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	return (
		<div className="container-fluid" style={{ marginTop: "100px" }}>
			<div className="row d-flex">
				<Box sx={{ m: 1, width: '100%' }}>
					<TextField
						id="outlined-basic"
						label="First Name"
						variant="outlined"
						fullWidth
						name="firstName"
						value={formData.firstName}
						onChange={handleInputChange}
						disabled={!editMode}
					/>
				</Box>
				<Box sx={{ m: 1, width: '100%' }}>
					<TextField
						id="outlined-basic"
						label="Last Name"
						variant="outlined"
						fullWidth
						name="lastName"
						value={formData.lastName}
						onChange={handleInputChange}
						disabled={!editMode}
					/>
				</Box>
				<Box sx={{ m: 1, width: '100%' }}>
					<TextField
						id="outlined-basic"
						label="Email"
						variant="outlined"
						fullWidth
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						disabled={true}
					/>
				</Box>
				<Box sx={{ m: 1, width: '100%' }}>
					<TextField
						id="outlined-basic"
						label="Contact Number"
						variant="outlined"
						fullWidth
						name="contactNumber"
						value={formData.contactNumber}
						onChange={handleInputChange}
						disabled={!editMode}
					/>
				</Box>
				<Box sx={{ m: 1, width: '100%' }}>
					<TextField
						id="outlined-basic"
						label="profile image"
						variant="outlined"
						fullWidth
						name="profileImage"
						value={formData.profileImage}
						onChange={handleInputChange}
						disabled={!editMode}
					/>
				</Box>

				<div className="row text-end">
					<div className="col">
						{editMode ?
							(<Button variant="outlined" size="small" onClick={handleSave} >save</Button>)
							:
							(<Button variant="outlined" size="small" onClick={handleEditClick}>Edit</Button>)
						}

					</div>

				</div>
			</div>
		</div>
	)
}
