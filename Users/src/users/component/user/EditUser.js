import * as React from "react";
import { useState } from "react";
import { userSlice } from "../user/userSlice";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const users = useSelector((state) => state.users);

  const params = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const editUsers = users.filter((user) => user.id == params.id);
  // console.log(params.id);
  // console.log(editUsers);

  const { name, phone, address, email } = editUsers[0];

  const [values, setValues] = useState({
    name,
    phone,
    address,
    email,
  });

  const handleEditUser = () => {
    setValues({
      name: "",
      phone: "",
      address: "",
      email: "",
    });

    dispatch(
      userSlice.actions.editUser({
        id: params.id,
        name: values.name,
        phone: values.phone,
        address: values.address,
        email: values.email,
      })
    );

    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h3"
        sx={{ mt: 10, mb: 10 }}
        align="center"
        gutterBottom
      >
        Sửa học viên
      </Typography>
      <Paper sx={{ p: 5 }}>
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item lg={12} sm={12}>
              <TextField
                required
                id="name-user"
                name="name-user"
                label=" Name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                value={values.name}
                onChange={(e) => setValues({...values, name: e.target.value})}
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
                value={values.phone}
                onChange={(e) => setValues({...values, phone: e.target.value})}
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
                value={values.address}
                onChange={(e) => setValues({...values, address: e.target.value})}
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
                sx={{ mb: 10 }}
                value={values.email}
                onChange={(e) => setValues({...values, email: e.target.value})}
              />
            </Grid>
            <Button
              variant="contained"
              sx={{ m: "auto", width: 240, height: 40 }}
              onClick={handleEditUser}
            >
              Edit
            </Button>
          </Grid>
        </React.Fragment>
      </Paper>
    </Container>
  );
}

export default EditUser;
