import Login from "./Components/Login/login";
import Signup from "./Components/Signup/signup";
import Navbar from "./Components/Navbar/navbar";
import Cards from "./Components/Cards/cards";
import Data from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewBooks from "./Components/Admin/ViewBooks/ViewBooks";
import AddBooks from "./Components/Admin/AddBooks/AddBooks";
import { useEffect, useState } from "react";
import EditBooks from "./Components/Admin/EditBooks/EditBooks";
import Returnbooks from "./Components/User/ReturnBooks/Returnbooks";
import Returndata from "./Components/User/ReturnBooks/Returndata";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("userRole")==="admin"){
      setIsAdmin(true)
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAdmin={isAdmin} />
        <Routes>
          <Route path="addbooks" element={<AddBooks />} />
          <Route path="home" element={<Cards details={Data} />} />
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="viewbooks" element={<ViewBooks />} />
          <Route path="editbook/:bookId" element={<EditBooks/>} />
          <Route
            path="returnbooks"
            element={<Returnbooks bookdata={Returndata} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
