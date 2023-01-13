import {Routes, Route} from "react-router-dom";
import ListUser from "./component/user/ListUser";
import AddUser from "./component/user/AddUser";
import EditUser from "./component/user/EditUser";
function Home () {
    return (
        <Routes>
            <Route path="/" element={<ListUser />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
    )
}

export default Home;