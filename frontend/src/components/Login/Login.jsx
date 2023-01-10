import React, { useContext, useRef } from "react";
import "./login.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
// import logo from "./logo.png"

function Login() {
  const email = useRef();
  const password = useRef();
  const { dispatch } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", {
        email: email.current.value,
        password: password.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(err);
      document.getElementById("errordiv").innerHTML =
        "Please Enter the correct login credentials";
    }
  };
  return (
    // <div>Login</div>
    <>
      <div className="container loginform">
        <div className="forms">
          <form action="" className="formlogin" onSubmit={handleSubmit}>
            {/* <img src={logo} alt="" /> */}
            <h1 style={{ color: "black", borderBottom: "1px solid black", width: "300px", textAlign: "center" , paddingBottom: "5px"}}>PICT-Sports</h1>
            <h2 style={{ color: "black", marginTop: "5px" }}>Login</h2>
            <div id="errordiv" style={{ color: "red" }}></div>
            <input
              type="email"
              placeholder="Email"
              className="input"
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              ref={password}
            />
            <button type="submit" style={{color: "black"}}>Login</button>
            <p style={{ color: "black" }}>
              Don't have an account ? <a href="/register">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
