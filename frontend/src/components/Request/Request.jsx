import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Tophome from "../TopHome/Tophome";
import Usereq from "../UsersRequest/Usereq";
import "./request.css";

function Request() {
  const { user } = useContext(AuthContext);
  const [sportsname, setSportsname] = useState("");
  const [itemname, setItemname] = useState("");


  const handleSubmit = async()=>{
      const data={
          sportsname,
          itemname,
          userid: user._id,
          username: user.name,
          email: user.email
      }
      try{
          await axios.post("/api/sports/",data);
          // window.alert("Tools Requested Successfully");
          window.location.replace("/requests")
      }
      catch(err){
          console.log(err);
          window.alert("Something wents wrong");
      }
  }
  return (
    <div>
      <Tophome />
      <form action="/" onSubmit={handleSubmit}>
        <div className="createrequest container">
          <div className="createrequestform">
            <div className="sportsname">
              <h4>Sports Name</h4>
              <select
                name=""
                id=""
                value={sportsname}
              onChange={(e) => setSportsname(e.target.value)}
              >
                <option value="" disabled>
                  Select Sport
                </option>
                <option value="Cricket">Cricket</option>
                <option value="Basketball">Basketball</option>
                <option value="Vollyball">Vollyball</option>
                <option value="Badminton">Badminton</option>
                <option value="Table Tennis">Table Tennis</option>
                <option value="Chess">Chess</option>
              </select>
            </div>
            <div className="sportsname">
              <h4>Tools Name</h4>
              <input type="text" placeholder="Tool Name" onChange={(e)=>setItemname(e.target.value)} />
            </div>
          </div>
          <button className="submitbtn" type="submit">Submit</button>
        </div>
      </form>
      <Usereq/>
    </div>
  );
}

export default Request;
