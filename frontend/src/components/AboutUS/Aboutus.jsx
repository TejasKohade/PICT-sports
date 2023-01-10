import React from 'react'
import prathamesh from "./prathamesh.jpg"
import tejas from "./tejas.jpeg"
import './aboutus.css'

function Aboutus() {
  return (
    <div className='container'>
        <div className="headingdev">
            <p>Developers</p>
        </div>
        <div className="devrow">
            <div className="devcol">
                <div className="devimg">
                    <img src={prathamesh} alt="" />
                </div>
                <div className="devname">
                    <p>
                    Prathamesh Khose
                    </p>
                    <p>BE (SE E&TC STUDENT)</p>
                </div>
            </div>
            <div className="devcol">
                <div className="devimg">
                    <img src={tejas} alt="" />
                </div>
                <div className="devname">
                    <p>
                    Tejas Kohade
                    </p>
                    <p>BE (SE E&TC STUDENT)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus