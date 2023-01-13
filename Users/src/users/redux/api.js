import axios from "axios";

export const loadUserApi = async () => 
    await axios.get("https://gorest.co.in/public/v2/users");