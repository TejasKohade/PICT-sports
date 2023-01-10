import React, { useRef } from "react";
import "./register.css";
import axios from "axios";

function Register() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const rollno = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      rollno: rollno.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    if (password.current.value.length < 6) {
      document.getElementById("errordiv").innerHTML =
        "Password Should be Minimum of 6 Characters";
    } else {
      try {
        await axios.post("/api/auth/register", data);
        window.location.replace("/login");
      } catch (err) {
        console.log(err);
        document.getElementById("errordiv").innerHTML =
          "Something wents wrong.";
      }
    }
  };

  return (
    <div>
      <div className="container loginform">
        <div className="forms">
          <form action="" className="formlogin" onSubmit={handleSubmit}>
            {/* <img src={logo} alt="" /> */}
            <h1 style={{ color: "black", borderBottom: "1px solid black", width: "300px", textAlign: "center", paddingBottom: "5px" }}>PICT-Sports</h1>
            <h2 style={{ color: "black", marginTop: "5px" }}>Register</h2>
            <div id="errordiv" style={{ color: "red" }}></div>

            <input
              type="text"
              placeholder="Name"
              className="inputregister"
              ref={name}
            />
            <input
              type="email"
              placeholder="Email"
              className="inputregister"
              ref={email}
            />
            <input
              type="number"
              placeholder="Roll Number"
              className="inputregister"
              ref={rollno}
            />
            <input
              type="password"
              placeholder="Password"
              className="inputregister"
              ref={password}
            />
            {/* <div>
            <label htmlFor="">Do you have a mess</label>
            <input type="checkbox" onChange={()=>setIsChecked(true)} style={{"backgroundColor":"green","margin":"5px"}} className="checkboxinput"/>
            </div> */}
            <button type="submit" style={{ color: "black" }}>Register</button>
            <p style={{ color: "black" }}>
              Already have an account ? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
