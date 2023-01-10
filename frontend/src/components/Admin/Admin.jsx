import Tophome from "../TopHome/Tophome";
import React, { useEffect, useState } from "react";
// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Admin() {
  const [requests, setRequests] = useState([]);
  const [newstatus, setStatus] = useState("");
  // const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchRequests = async () => {
      const request = await axios.get("/api/sports/");
      setRequests(
        request.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchRequests();
  }, []);
  const handleUpdate = async (id) => {
    const data = {
      status: newstatus,
    };
    try {
      await axios.put("/api/sports/allotment/" + id, data);
      window.alert("Request Updated Successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Tophome />
      <div className="container mt-5">
        <p style={{textAlign: "center", fontSize: "25px"}}>Requests</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student Name</th>
              <th scope="col">Sports Name</th>
              <th scope="col">Tools</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {requests &&
              requests.map((i, x) => (
                <tr>
                  <th scope="row">{x + 1}</th>
                  <td>{i.username}</td>
                  <td>{i.sportsname}</td>
                  <td>{i.itemname}</td>
                  <td>
                    <select
                      name=""
                      id=""
                      defaultValue={i.status}
                      onChange={(x) => setStatus(x.target.value)}
                    >
                      {i.status === "Pending" && (
                        <>
                          <option value="" disabled>
                            {i.status}
                          </option>
                          <option value="Pending">Pending</option>
                          <option value="Received">Received</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Approved">Approved</option>
                        </>
                      )}
                      {i.status === "Received" && (
                        <>
                          <option value="" disabled>
                            {i.status}
                          </option>
                          <option value="Pending">Pending</option>
                          <option value="Received">Received</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Approved">Approved</option>
                        </>
                      )}
                      {i.status === "Approved" && (
                        <>
                          <option value="" disabled>
                            {i.status}
                          </option>
                          <option value="Pending">Pending</option>
                          <option value="Received">Received</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Approved">Approved</option>
                        </>
                      )}
                      {i.status === "Rejected" && (
                        <>
                          <option value="" disabled>
                            {i.status}
                          </option>
                          <option value="Pending">Pending</option>
                          <option value="Received">Received</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Approved">Approved</option>
                        </>
                      )}
                    </select>
                  </td>
                  <td>
                    <button
                      className="deletebtn"
                      onClick={() => handleUpdate(i._id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
