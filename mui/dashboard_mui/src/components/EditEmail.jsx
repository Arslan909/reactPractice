import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';

export default function EditEmail() {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSaveEmail = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'x-sh-auth': token,
      };

      const requestBody = {
        email: email,
      };

      const response = await axios.put(
        'http://146.190.164.174:4000/api/app_api/change_email',
        requestBody,
        { headers: headers }
      );

      setLoading(false);
      setMessage('Email updated successfully');
      setOpenSnackbar(true);
      console.log(response.data); 

    } catch (error) {
      setLoading(false);
      setMessage('Failed to update email');
      setOpenSnackbar(true);
      console.error('Error updating email:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      <div className="row d-flex">
        <h2>Change email</h2>
        <Box sx={{ m: 1, width: '100%' }}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
        </Box>

        <div className="row text-end">
          <div className="col">
            <Button variant="outlined" size="small" onClick={handleSaveEmail}>Save</Button>
            {loading && <CircularProgress size={24} />}
          </div>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={message}
      />
    </div>
  );
}
