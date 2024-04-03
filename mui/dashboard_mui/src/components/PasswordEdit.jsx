import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';

export default function EditEmail() {
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSavePassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        setMessage('New password and confirm password do not match');
        setOpenSnackbar(true);
        return;
      }

      setLoading(true);
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'x-sh-auth': token,
      };

      const requestBody = {
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      };

      const response = await axios.put(
        'http://146.190.164.174:4000/api/app_api/change_password',
        requestBody,
        { headers: headers }
      );

      setLoading(false);
      setMessage('Password updated successfully');
      setOpenSnackbar(true);
      console.log(response.data); 

    } catch (error) {
      setLoading(false);
      setMessage('Failed to update password');
      setOpenSnackbar(true);
      console.error('Error updating password:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      <div className="row d-flex">
        <h2>Change password</h2>
        <Box sx={{ m: 1, width: '100%' }}>
          <TextField
            id="outlined-basic"
            label="Old Password"
            variant="outlined"
            fullWidth
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
        </Box>
        <Box sx={{ m: 1, width: '100%' }}>
          <TextField
            id="outlined-basic"
            label="New Password"
            variant="outlined"
            fullWidth
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </Box>
        <Box sx={{ m: 1, width: '100%' }}>
          <TextField
            id="outlined-basic"
            label="Confirm New Password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </Box>
        <div className="row text-end">
          <div className="col">
            <Button variant="outlined" size="small" onClick={handleSavePassword}>Update Password</Button>
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
