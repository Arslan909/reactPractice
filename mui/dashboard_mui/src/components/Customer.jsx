import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import MenuOpt from './MenuOpt';

const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 170 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'accountStatus',
    label: 'Account Status',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'subscriptionStatus',
    label: 'Subscription Status',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'domain',
    label: 'Domain',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'createdAt',
    label: 'Created At',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'updatedAt',
    label: 'Updated At',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

// const rows = [
//   // Row 1
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     accountStatus: 'Active',
//     subscriptionStatus: 'Subscribed',
//     domain: 'example.com',
//     createdAt: '2022-01-01',
//     updatedAt: '2022-03-15',
//     action: 'Edit',
//   },
//   // Row 2
//   {
//     firstName: 'Jane',
//     lastName: 'Smith',
//     email: 'jane.smith@example.com',
//     accountStatus: 'Inactive',
//     subscriptionStatus: 'Expired',
//     domain: 'example.org',
//     createdAt: '2021-12-10',
//     updatedAt: '2022-02-28',
//     action: 'Delete',
//   },
//   // Row 3
//   {
//     firstName: 'Alice',
//     lastName: 'Johnson',
//     email: 'alice.johnson@example.com',
//     accountStatus: 'Active',
//     subscriptionStatus: 'Subscribed',
//     domain: 'example.net',
//     createdAt: '2022-02-20',
//     updatedAt: '2022-03-20',
//     action: 'View',
//   },
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     accountStatus: 'Active',
//     subscriptionStatus: 'Subscribed',
//     domain: 'example.com',
//     createdAt: '2022-01-01',
//     updatedAt: '2022-03-15',
//     action: 'Edit',
//   },
//   {
//     firstName: 'Jane',
//     lastName: 'Smith',
//     email: 'jane.smith@example.com',
//     accountStatus: 'Inactive',
//     subscriptionStatus: 'Expired',
//     domain: 'example.org',
//     createdAt: '2021-12-10',
//     updatedAt: '2022-02-28',
//     action: 'Delete',
//   },
//   {
//     firstName: 'Alice',
//     lastName: 'Johnson',
//     email: 'alice.johnson@example.com',
//     accountStatus: 'Active',
//     subscriptionStatus: 'Subscribed',
//     domain: 'example.net',
//     createdAt: '2022-02-20',
//     updatedAt: '2022-03-20',
//     action: 'View',
//   },
//   // Additional rows...
//   {
//     firstName: 'Michael',
//     lastName: 'Brown',
//     email: 'michael.brown@example.com',
//     accountStatus: 'Active',
//     subscriptionStatus: 'Subscribed',
//     domain: 'example.org',
//     createdAt: '2022-01-05',
//     updatedAt: '2022-03-18',
//     action: 'Edit',
//   },
//   {
//     firstName: 'Emily',
//     lastName: 'Davis',
//     email: 'emily.davis@example.com',
//     accountStatus: 'Inactive',
//     subscriptionStatus: 'Expired',
//     domain: 'example.net',
//     createdAt: '2022-02-10',
//     updatedAt: '2022-03-25',
//     action: 'Delete',
//   },
//   {
//     firstName: 'Daniel',
//     lastName: 'Wilson',
//     email: 'daniel.wilson@example.com',
//     accountStatus: 'Active',
//     subscriptionStatus: 'Subscribed',
//     domain: 'example.com',
//     createdAt: '2021-12-20',
//     updatedAt: '2022-03-22',
//     action: 'View',
//   },
//   {
//     firstName: 'Olivia',
//     lastName: 'Martinez',
//     email: 'olivia.martinez@example.com',
//     accountStatus: 'Active',
//     subscriptionStatus: 'Subscribed',
//     domain: 'example.org',
//     createdAt: '2021-11-15',
//     updatedAt: '2022-03-18',
//     action: 'Edit',
//   },
//   {
//     firstName: 'James',
//     lastName: 'Taylor',
//     email: 'james.taylor@example.com',
//     accountStatus: 'Inactive',
//     subscriptionStatus: 'Expired',
//     domain: 'example.net',
//     createdAt: '2022-02-05',
//     updatedAt: '2022-03-20',
//     action: 'Delete',
//   },
//   {
//     firstName: 'Sophia',
//     lastName: 'Anderson',
//     email: 'sophia.anderson@example.com',
//     accountStatus: 'Active',
//     subscriptionStatus: 'Subscribed',
//     domain: 'example.com',
//     createdAt: '2021-12-25',
//     updatedAt: '2022-03-25',
//     action: 'View',
//   },
//   {
//     firstName: 'Alexander',
//     lastName: 'Thomas',
//     email: 'alexander.thomas@example.com',
//     accountStatus: 'Active',
//     subscriptionStatus: 'Subscribed',
//     domain: 'example.net',
//     createdAt: '2022-01-10',
//     updatedAt: '2022-03-18',
//     action: 'Edit',
//   }
// ]


export default function Customer() {
  const navigate = useNavigate()
  const [rows, setRows] = React.useState([])
  const [refreshTable, setSetRefreshTable] = React.useState(false)
  const [customerCount, setCustomerCount] = React.useState(0)

  React.useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchCustomerData = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'x-sh-auth': token
        }

        const response = await axios.post('http://146.190.164.174:4000/api/customer/get_customers', {},
          { headers: headers }
        )
        setRows(response.data.customer)
        setCustomerCount(response.data.count)


      } catch (error) {
        console.error('Signup failed:', error);
      }
    }

    fetchCustomerData()


  }, [refreshTable])
  // console.log(rows);
  // console.log(customerCount);


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);


  const handleChangePage = (event, newPage) => {

    const token = localStorage.getItem('token');

    const fetchCustomerData = async () => {
      try {
        const headers = {
          'Content-Type': 'application/json',
          'x-sh-auth': token
        }

        const response = await axios.post(`http://146.190.164.174:4000/api/customer/get_customers?page=${newPage}&limit=${rowsPerPage}`, {},
          { headers: headers }
        )
        setRows(prevRows => [...prevRows, ...response.data.customer]);
        setCustomerCount(response.data.count)


      } catch (error) {
        console.error('Signup failed:', error);
      }
    }

    fetchCustomerData()

    setPage(newPage);
  };
  
  console.log(rows);


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">

        <div className="row">
          <Stack spacing={2} direction="row" justifyContent="flex-end">
            <Button variant="contained" onClick={() => { navigate("/customerForm") }}> + Add cutomer</Button>
          </Stack>
        </div>

        <div className="row mt-4 mb-4 d-flex align-center-center ">
          <div className="col d-flex justify-content-between flex-wrap">
            <h3>Customers</h3>
            <div>
              <TextField
                id="outlined-size-small"
                placeholder="Search customer"

                size="small"
                sx={{
                  width: '200px',
                }} // Adjust the width as needed

              />
            </div>
          </div>
        </div>

        <div className="row" >
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          <TableCell align="left" style={{ minWidth: columns[0].minWidth }}>{row.first_name}</TableCell>
                          <TableCell align="left" style={{ minWidth: columns[1].minWidth }}>{row.last_name}</TableCell>
                          <TableCell align="left" style={{ minWidth: columns[2].minWidth }}>{row.user.email}</TableCell>
                          <TableCell align="center" style={{ minWidth: columns[3].minWidth }}>{row.account_status}</TableCell>
                          <TableCell align="center" style={{ minWidth: columns[4].minWidth }}>{row.subscription_status}</TableCell>
                          <TableCell align="center" style={{ minWidth: columns[5].minWidth }}>{row.total_domains}</TableCell>
                          <TableCell align="center" style={{ minWidth: columns[6].minWidth }}>{row.createdAt}</TableCell>
                          <TableCell align="center" style={{ minWidth: columns[7].minWidth }}>{row.updatedAt}</TableCell>
                          <TableCell align="center" style={{ minWidth: columns[8].minWidth }}>
                            <MenuOpt rowData={row} setSetRefreshTable={setSetRefreshTable} />
                          </TableCell>

                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[15, 25, 100]}
              component="div"
              count={customerCount}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(event, newPage) => handleChangePage(event, newPage)}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>

        </div>
      </div>
    </div>
  )
}
