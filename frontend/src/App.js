import "./App.css";
import Aboutus from "./components/AboutUS/Aboutus";
import Footer from "./components/Footer/Footer";
import MiddleHome from "./components/MiddleHome/MiddleHome";
import Navbar from "./components/Navbar/Navbar";
import Tophome from "./components/TopHome/Tophome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import Aboutuspage from "./components/AboutUS/Aboutuspage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Profile from "./components/Profile/Profile";
import Request from "./components/Request/Request";
import Admin from "./components/Admin/Admin";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      {user ? (
        <>
        <Navbar />
        <Router>
          <Routes>
            {/* <Route exact path="/profile" element={<Profile />} /> */}
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/aboutus" element={<Aboutuspage />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/request" element={<Request />} />
          </Routes>
        </Router>
        <Footer />
        </>
      ) : (
        <Router>
          <Routes>
            {/* <Route exact path="/profile" element={<Profile />} /> */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/logout" element={<Login />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
