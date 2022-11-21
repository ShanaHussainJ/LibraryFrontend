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
import { PrivateRoute } from "./PrivateRoute";

  
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
      <BrowserRouter>
        <Navbar isAdmin={isAdmin} isLoggedIn={isLoggedIn} setIsLoggedIn={() => setIsLoggedIn(false)} />
        <Routes>
          <Route path="addbooks" element={<PrivateRoute><AddBooks /></PrivateRoute>} />
          <Route path="home" element={<PrivateRoute><Cards /></PrivateRoute>} />
          <Route index element={<Login setIsLoggedIn={() => setIsLoggedIn(true)} />} />
          <Route path="signup" element={<PrivateRoute><Signup /></PrivateRoute>} />
          <Route path="viewbooks" element={<PrivateRoute> <ViewBooks /> </PrivateRoute>} />
          <Route path="editbook/:bookId" element={<PrivateRoute><EditBooks /></PrivateRoute>} />
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
