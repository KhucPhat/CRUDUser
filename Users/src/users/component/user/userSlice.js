import { createSlice } from "@reduxjs/toolkit";

const initValue = [
    {
        id : 1,
        name: "Khúc Phát",
        phone: "0963581901",
        address: "Hưng Yên",
        email: "anhphat2j@gmail.com",
    },
    {
        id : 2,
        name: "Duy Mạnh",
        phone: "096899968",
        address: "Hà Nội",
        email: "duymanh@gmail.com",
    },
    {
        id: 3,
        name: "Văn Hậu",
        phone: "0367787999",
        address: "Thái Bình",
        email: "vanhaugmail.com",
    },
    {   
        id: 4,
        name: "Văn Quyết",
        phone: "0997570976",
        address: "Hải Dương",
        email: "vanquyet@gmail.com",
    },
    {
        id: 5,
        name: "Quang Hải",
        phone: "0965685898",
        address: "Hà Nội",
        email: "quanghai@gmail.com",
    },
    {
        id: 6,
        name: "Tiến Dũng",
        phone: "036789678",
        address: "Yên Bái",
        email: "tiendung@gmail.com",
    },
]; 

export const userSlice = createSlice({
    name : 'user',
    initialState : initValue,
    reducers : {
        addUser : (state, action) => {
            state.push(action.payload);
        },
        editUser: (state, action) => {
           const { id, name,phone, address, email} = action.payload;
           const editUser = state.find( user => user.id == id);
        //    console.log(editUser);

           if (editUser) { 
                editUser.name = name;
                editUser.phone = phone;
                editUser.address = address;
                editUser.email = email;
           }
        },
        deleteUser: (state, action) => {
            const deletteUserId = action.payload;
            console.log(deletteUserId);
            return state.filter(user => user.id !== deletteUserId);
        },
        searchUsers: (state, action) => {
            state.search = action.payload;
            state.filter(user => {
                return (
                    user.name.includes(state)
                )
            })
        },
    }
})

 