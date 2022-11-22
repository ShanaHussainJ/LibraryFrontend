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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

function App() {
  const [isAdmin, setIsAdmin] = useState(JSON.parse(localStorage.getItem("userRole")==="admin"));
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")));

  useEffect(() => {
    if (localStorage.getItem("userRole") === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    if (localStorage.getItem("isLoggedIn")) setIsLoggedIn(true);
  }, [isAdmin, isLoggedIn]);
console.log(isLoggedIn)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAdmin={isAdmin} isLoggedIn={isLoggedIn} setIsLoggedIn={() => setIsLoggedIn(false)}/>
        <Routes>
  
          <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
            <Route path="/home" element={<Cards />} />
          </Route>

          <Route element={<AdminRoute isAdmin={isAdmin} />}>
            <Route path="addbooks" element={<AddBooks />} />
          </Route>

          <Route element={<AdminRoute isAdmin={isAdmin} />}>
            <Route path="viewbooks" element={<ViewBooks />} />
          </Route>

          <Route element={<AdminRoute isAdmin={isAdmin} />}>
            <Route path="editbook/:bookId" element={<EditBooks />} />
          </Route>
          
          <Route
            index
            element={<Login setIsLoggedIn={() => setIsLoggedIn(true)} />}
          />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          <Route path="returnbooks" element={<Returnbooks />} />
          
          {/* <Route
            path="editbook/:bookId"
            element={
                <EditBooks />
            }
          /> */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
