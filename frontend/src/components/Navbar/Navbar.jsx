import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

function Navbar() {
  const { user, dispatch } = useContext(AuthContext);


  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            PICT SPORTS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link active" href="/aboutus">
                About Us
              </a>
             {user.isAdmin===true && <a className="nav-link active" href="/admin">
                Admin
              </a>}
              <a className="nav-link active" href="/request">
                Request
              </a>
              <a className="nav-link active" href="/profile">
                Profile
              </a>
              <a className="nav-link active" href="/login" onClick={logout}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
