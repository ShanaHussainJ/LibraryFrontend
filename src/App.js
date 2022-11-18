import Login from "./Components/Login/login";
import Signup from "./Components/Signup/signup";
import Navbar from "./Components/Navbar/navbar";
import Cards from "./Components/Cards/cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewBooks from "./Components/Admin/ViewBooks/ViewBooks";
import AddBooks from "./Components/Admin/AddBooks/AddBooks";
import { useEffect, useState } from "react";
import EditBooks from "./Components/Admin/EditBooks/EditBooks";
import Returnbooks from "./Components/User/ReturnBooks/Returnbooks";
import NotFound from "./NotFound";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("userRole") === "admin") {
      setIsAdmin(true);
    }else{
      setIsAdmin(false)
    }
    if(localStorage.getItem("isLoggedIn")) setIsLoggedIn(true)
  }, [isAdmin, isLoggedIn]);

  return (
    <div className="App">
      <BrowserRouter>t
        <Navbar isAdmin={isAdmin} isLoggedIn={isLoggedIn} setIsLoggedIn={() => setIsLoggedIn(false)} />
        <Routes>
          <Route path="addbooks" element={<AddBooks />} />
          <Route path="home" element={<Cards />} />
          <Route index element={<Login setIsLoggedIn={() => setIsLoggedIn(true)} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="viewbooks" element={<ViewBooks />} />
          <Route path="editbook/:bookId" element={<EditBooks />} />
          <Route path="*" element={<NotFound/>} />
          <Route
            path="returnbooks"
            element={<Returnbooks/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
