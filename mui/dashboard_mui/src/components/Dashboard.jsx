import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import GroupIcon from '@mui/icons-material/Group';
import DomainIcon from '@mui/icons-material/Domain';
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled';


export default function Dashboard() {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Hi,welcome back </h1>
      <div className="row">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 3,
              width: 320,
              height: 228,
            },
          }}
        >
          <Paper style={{ backgroundColor: "#eafcd4", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="d-flex justify-content-center align-items-center flex-column " style={{ height: "70%" }}>
              <GroupIcon />
              <h4 style={{ marginTop: "20px", fontSize: '2rem', fontWeight: "bold" }}>636</h4>
              <p>Total Users</p>
            </div>

          </Paper>
          <Paper style={{ backgroundColor: "#d0f3ff", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "70%" }}>
              <DomainIcon />
              <h4 style={{ marginTop: "20px", fontSize: '2rem', fontWeight: "bold" }}>94</h4>
              <p>Domains</p>
            </div>
          </Paper>

          <Paper style={{ backgroundColor: "#fee9da", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="d-flex justify-content-center align-items-center flex-column " style={{ height: "70%" }}>
              <DomainDisabledIcon />
              <h4 style={{ marginTop: "20px", fontSize: '2rem', fontWeight: "bold" }}>94</h4>
              <p>Unverified Domains</p>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  )
}
