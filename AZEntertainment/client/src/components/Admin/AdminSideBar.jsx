import React, { useState } from "react";
import mudLadies from '../Imgs/mudGirls.jpg'


const AdminSideBar = () => {
    const [sideModal, setSideModal] = useState(false)

    const closeSide = () => {
        setSideModal(false)
    }

    return (
        <>
            <div className="sideOverlay" onClick={closeSide}></div>

            <div className="sidebar sideCollapse sideAnimate-left">
                <br />
                <div className="sideContainer">
                    <div className="sideCol">
                        <img src={mudLadies} className="imgCircle imgMargins adminImg" alt="Mud"/>
                    </div><br />
                    <div className="sideCol-2 sideCol sideSection">
                        <span>Welcome, <strong>Admin User</strong></span><br />
                           <p>Feeds</p>
                           <p>Views</p>
                           <p>Traffic</p>
                           <p>Events</p>
                           <p>Tickets</p>
                           <p>News</p>
                           <p>History</p>
                    </div>
                </div>        
            </div>
        </>
    )
}
export default AdminSideBar
