import React from "react"
import d from '../images/Group 164.png'
import './Device.css'

const Device: React.FC = () => {
    return(
        <div className="cont">
            <div className="device">
                <img src={d} alt="" />
            </div>
            <div className="mas">
                <h1>Available on all devices</h1>
            </div>
        </div>
    );
}

export default Device;