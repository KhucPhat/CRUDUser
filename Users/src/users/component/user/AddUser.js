import * as React from 'react';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {userSlice} from "../user/userSlice";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';

function AddUser() {

  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const handleAddUser = () => {
    dispatch(userSlice.actions.addUser( {
      id: id,
      name: name,
      phone: phone,
      address : address,
      email : email,
    }));
    
    //chuyển trang
    navigate("/");
  }

  return (
    <Container maxWidth="md">
          <Typography variant="h3" sx={{mt: 10, mb: 10}} align='center' gutterBottom>
           Thêm học viên
          </Typography>
      <Paper sx={{p : 5}}>
        <React.Fragment>
          <Grid container spacing={3}>
          <Grid item lg={12} sm={12}>
              <TextField
                required
                id="number-user"
                name="number-user"
                label=" STT"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Grid>
            <Grid item lg={12} sm={12}>
              <TextField
                required
                id="name-user"
                name="name-user"
                label=" Name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item lg={12} sm={12}>
              <TextField
                required
                id="phone-user"
                name="phone"
                label="Phone"
                fullWidth
                autoComplete="family-phone"
                variant="standard"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address"
                name="address"
                label="Address"
                fullWidth
                autoComplete="shipping"
                variant="standard"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="shipping email"
                variant="standard"
                sx={{mb: 10}}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Button 
              variant='contained'
              sx={{ m: 'auto' , width: 240, height: 40,}}
              onClick={handleAddUser}
            >
              Add
              </Button>
          </Grid>
        </React.Fragment>
      </Paper>
    </Container>
  );
}

export default AddUser;
