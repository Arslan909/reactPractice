import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function MenuOpt({rowData, setSetRefreshTable}) {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    console.log(rowData);
    navigate("/customerForm", { state: rowData })
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    try { 
      let headers = {
        'Content-Type': 'application/json',
        'x-sh-auth': token
      };
  
      const response = await axios.delete(`http://146.190.164.174:4000/api/customer/delete_customer/${rowData.user._id}`, { headers: headers });
  
      if (response.status >= 200 && response.status < 300) {
        console.log("Customer deleted successfully");
        setSetRefreshTable(prev=> !prev)
      } else {
        console.log("Failed to delete customer.");
      }
    } catch (error) {
      console.error('Customer delete failed:', error);
    }
  
    setAnchorEl(null);
  };
  



  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Health Status</MenuItem>
      </Menu>
    </div>
  );
}


MenuOpt.propTypes = {
  rowData: PropTypes.object,
  setSetRefreshTable:PropTypes.func
};