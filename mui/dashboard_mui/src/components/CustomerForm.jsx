import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function CustomerForm() {
    const navigate = useNavigate()

    const location = useLocation();
    const rowData = location.state;

    const [customerData, setCustomerData] = React.useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        industry_type: "",
        customer_type: ""
    })

    React.useEffect(() => {
        if (rowData) {
          setCustomerData({
            first_name: rowData.first_name || "",
            last_name: rowData.last_name || "",
            email: rowData.user.email || "",
            password: rowData.password || "",
            industry_type: rowData.industry_type || "",
            customer_type: rowData.customer_type || ""
          });
        }
      }, [rowData]);

    const handleSubmit = async () => {
        try {

            const headers = {
                'Content-Type': 'application/json'
            }
            const response = await axios.post('http://146.190.164.174:4000/api/customer/signup_customer',
                {
                    first_name: customerData.first_name,
                    last_name: customerData.last_name,
                    email: customerData.email,
                    password: customerData.password,
                    industry_type: customerData.industry_type,
                    customer_type: customerData.customer_type
                },
                { headers: headers }
            )

            if (response.ok) {
                setCustomerData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    industry_type: "",
                    customer_type: ""
                })
            }
            navigate('/customer')
        } catch (error) {
            console.error('adding cutomer failed:', error);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    return (
        <div className="container-fluid" style={{ marginTop: "100px" }}>
            <div className="row">
                <div className="row mb-3 ">

                    <h1>Add Customer</h1>
                </div>

                <div className="row mb-3 ">
                    <div className="col-6">
                        <Box>
                            <TextField
                                color="success"
                                fullWidth
                                label="First Name*"
                                id="fullWidth"
                                name='first_name'
                                value={customerData.first_name}
                                onChange={handleInputChange}
                            />
                        </Box>
                    </div>
                    <div className="col-6">
                        <Box>
                            <TextField
                                color="success"
                                label="Last Name*"
                                fullWidth
                                id="fullWidth"
                                name='last_name'
                                value={customerData.last_name}
                                onChange={handleInputChange}
                            />
                        </Box>
                    </div>

                </div>
                <div className="row mb-3 ">
                    <div className="col-6">
                        <Box>
                            <TextField
                                color="success"
                                fullWidth
                                label="Email*"
                                id="fullWidth"
                                name='email'
                                value={customerData.email}
                                onChange={handleInputChange}
                            />
                        </Box>
                    </div>
                    <div className="col-6">
                        <Box>
                            <TextField
                                color="success"
                                fullWidth
                                label="Password*"
                                id="fullWidth"
                                type='password'
                                name='password'
                                value={customerData.password}
                                onChange={handleInputChange}
                            />
                        </Box>
                    </div>

                </div>
                <div className="row mb-3 ">
                    <div className="col-6">
                        <Box>
                            <TextField
                                color="success"
                                fullWidth
                                label="Customer Type*"
                                id="fullWidth"
                                name='industry_type'
                                value={customerData.industry_type}
                                onChange={handleInputChange}
                            />
                        </Box>
                    </div>
                    <div className="col-6">
                        <Box>
                            <TextField
                                color="success"
                                fullWidth
                                label="Business Type*"
                                id="fullWidth"
                                name='customer_type'
                                value={customerData.customer_type}
                                onChange={handleInputChange}
                            />
                        </Box>
                    </div>

                </div>
                <div className="row text-end">
                    <div className="col">
                        <Button variant="outlined" onClick={() => { navigate('/customer') }} size="small">x cancel</Button>

                        <Button variant="outlined" size="small" onClick={handleSubmit} sx={{ marginLeft: "8px" }}>save</Button>

                    </div>

                </div>



            </div>
        </div>
    )
}
