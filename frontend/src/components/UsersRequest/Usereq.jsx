import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
function Usereq() {
  const [requests, setRequests] = useState([])
  const { user } = useContext(AuthContext);

  useEffect(()=>{
      const fetchRequests = async()=>{
          
          const request = await axios.get("/api/sports/"+ user._id);
          setRequests(
            request.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
              })
          )
      };
      fetchRequests();
  },[user._id])
  const handleDelete = async(id)=>{
      try{
          await axios.delete("/api/sports/"+id);
          window.alert("Request Deleted Successfully");
          window.location.reload();
      }
      catch(err){
          console.log(err);
      }
  }
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            {/* <th scope="col">Student Name</th> */}
            <th scope="col">Sports Name</th>
            <th scope="col">Tools</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
         {requests && requests.map((i,x)=>(
            <tr>
            <th scope="row">{x+1}</th>
            {/* <td>{i.username}</td> */}
            <td>{i.sportsname}</td>
            <td>{i.itemname}</td>
            <td >
            {i.status === "Approved" ? <p style={{color: "green"}}>{i.status}</p> : <p>{i.status}</p>}
            </td>
            <td>
                {(i.status !== "Received" && i.status !== "Approved" )&& <button className="deletebtn" onClick={()=>handleDelete(i._id)}>Delete</button>}
                {/* {(i.status !== "Approved" )&& <button className="deletebtn" onClick={()=>handleDelete(i._id)}>Delete</button>} */}
            </td>
          </tr>
         )) }
        </tbody>
      </table>
    </div>
  );
}

export default Usereq;
