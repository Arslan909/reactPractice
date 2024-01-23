import React from 'react';

export default function SubmissionForm() {

	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		password: '',
		rePassword: '',
		age: ''
	})
	const [formError, setFormError] = React.useState({
		name: '',
		email: '',
		password: '',
		rePassword: '',
		age: ''
	})

	function handleSubmit(event) {
		event.preventDefault()

		let errors = {}
		Object.keys(formData).forEach(key => {
			if (formData[key].trim() === '') {
				errors[key] = `${key} is required`
			}
		})

		if(formData.password !==  formData.rePassword){
			errors.rePassword = 'Passwords do not match';
		}

		setFormError(errors)

		if (Object.keys(errors).length > 0) {
			return
		}

		//else
		console.log(formData)

		setFormData({
			name: '',
			email: '',
			password: '',
			rePassword: '',
			age: ''

		})
		setFormError({
			name: '',
			email: '',
			password: '',
			rePassword: '',
			age: ''

		})

	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};




	return (
		<div>
			<form onSubmit={handleSubmit}>

				<input
					type="text"
					name="name"
					placeholder='Enter name'
					value={formData.name}
					onChange={handleChange}
				/>
				<br></br>
				<div>{formError.name}</div>

				<input
					type="email"
					name="email"
					placeholder='Enter email'
					value={formData.email}
					onChange={handleChange}
				/>
				<br></br>
				<div>{formError.email}</div>

				<input
					type="password"
					name="password"
					placeholder='Create password'
					value={formData.password}
					onChange={handleChange}
				/>
				<br></br>
				<div>{formError.password}</div>

				<input
					type="password"
					name="rePassword"
					placeholder='Re-enter password'
					value={formData.rePassword}
					onChange={handleChange}
				/>
				<br></br>
				<div>{formError.rePassword}</div>

				<input
					type="number"
					name="age"
					placeholder='Enter age'
					value={formData.age}
					onChange={handleChange}
				/>
				<br></br>
				<div>{formError.age}</div>

				<button type="submit">Submit</button>

			</form>
		</div>
	);
}
