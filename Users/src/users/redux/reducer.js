import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "../component/user/userSlice";

export const rootReducer = combineReducers({
     users : userSlice.reducer,
})
