import React from "react"
import d from '../images/g.png'
import './Device.css'

const Device: React.FC = () => {
    return(
        <div className="cont">
            <img src={d} alt="" />
            <div className="mas">
                <h1>Available on all devices</h1>
            </div>
        </div>
    );
}

export default Device;