import Login from "./Components/Login/login";
import Signup from "./Components/Signup/signup";
import Navbar from "./Components/Navbar/navbar";
import Cards from "./Components/Cards/cards";
import Data from "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewBooks from "./Components/Admin/ViewBooks/ViewBooks";
import AddBooks from "./Components/Admin/AddBooks/AddBooks";
import { useState } from "react";
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAdmin={isAdmin} />

        <Routes>
          <Route path="addbooks" element={<AddBooks />} />
          <Route path="home" element={<Cards details={Data} />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="viewbooks" element={<ViewBooks details={Data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
