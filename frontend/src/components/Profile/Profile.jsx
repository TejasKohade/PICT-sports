import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import Tophome from '../TopHome/Tophome'
import userimg from "./userimg.png"
import "./profile.css"

function Profile() {
    const { user } = useContext(AuthContext);
  return (
    <div>
        <Tophome/>
        <div className='container'>
        {/* <div className="headingdev">
            <h4>Developers</h4>
        </div> */}
        <div className="devrow profilecard">
            <div className="devcol">
                <div className="devimg">
                    <img src={userimg} alt="" />
                </div>
                <div className="devname mt-3">
                    <p>
                    {user.name}
                    </p>
                    <p>{user.email}</p>
                    <p>{user.rollno}</p>
                </div>
            </div>
            {/* <div className="devcol">
                <div className="devimg">
                    <img src={prathamesh} alt="" />
                </div>
                <div className="devname">
                    <p>
                    Prathamesh Khose
                    </p>
                    <p>BE (SE E&TC STUDENT)</p>
                </div>
            </div> */}
        </div>
    </div>
    </div>
  )
}

export default Profile