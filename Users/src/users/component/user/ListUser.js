import { useState, useEffect } from "react";
import {Route, Routes, Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { userSlice } from "../user/userSlice";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/system";
import Pagination from '@mui/material/Pagination';
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ListUser() {
  const itemsPerPage = 2;

  const users = useSelector((state) => state.users);
  // console.log("Users: ", users);

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  // Pagintion
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    setCurrentItems(users.slice(itemOffset, endOffset));
    console.log("Curent Iem : ",currentItems && currentItems);

    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handle0PageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const handleSearchText = (e) => {
    setText(e.target.value);
    dispatch(userSlice.actions.searchUsers(e.target.value));
  };

  const handleDeleteUser = (id) => {
    dispatch(userSlice.actions.deleteUser(id));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Typography variant="h4" align="center" sx={{mb: 10}}>
        Danh sách học viên
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell  sx={{ width : 120 }}>STT</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={user.id}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
                <TableCell align="center">{user.address}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">
                  <Link to='/add-user'>
                    <AddToPhotosIcon color="success" />
                  </Link>
                  <Link to={`/edit-user/${user.id}`}>
                    <EditIcon color="primary" sx={{ ml : 2 , mr: 1}}/>
                  </Link>
                  <IconButton onClick={() => handleDeleteUser(user.id)}>
                    <DeleteIcon color="error" /> 
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={pageCount} sx={{ float: 'right', mt: 5}}/>
    </Container>
  );
}

export default ListUser;
