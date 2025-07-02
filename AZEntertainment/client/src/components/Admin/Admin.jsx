import React, { useEffect, useState } from "react";
import axios from "axios";
import './admin.css';
import AdminSideBar from "./AdminSideBar";
import EventAdd from "../Events/EventAdd";
import YoloAdd from '../Yolo/YoloAdd';
import azmap from '../Imgs/map.jpg';

const Admin = ({ theme, eventList, setEventList, allUsers }) => {
    const [sharesTotal, setSharesTotal] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/event')
            .then(({ data }) => {
                setEventList(data)
                if (data.length > 0) {
                    const likes = data.map((item) => item.likes)
                    setSharesTotal(likes.reduce((a, b) => a + b))
                }
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <AdminSideBar />
            <div id="admin-main" className={theme}>

                <header className="admin-container">
                    <h1 className="heading">Admin Dashboard</h1>
                </header>

                <div className="dashboard-row-padding dash-margin">
                    <div className="quarter-sections">
                        <div className="dash-container
                            dash-padding messages">
                            <div className="left">
                                <i className="fa fa-eye xxxlarge"></i>
                            </div>
                            <div className="right">
                                <h3>52</h3>
                            </div>
                            <div className="clear"></div>
                            <h4>Messages</h4>
                        </div>
                    </div>

                    <div className="quarter-sections">
                        <div className="dash-container dash-padding views">
                            <div className="left">
                                <i className="fa fa-eye xxxlarge"></i>
                            </div>
                            <div className="right">
                                <h3>99</h3>
                            </div>
                            <div className="clear"></div>
                            <h4>Views</h4>
                        </div>
                    </div>

                    <div className="quarter-sections">
                        <div className="dash-container dash-padding shares">
                            <div className="left">
                                <i className="fa fa-eye xxxlarge"></i>
                            </div>
                            <div className="right">
                                <h3>{sharesTotal}</h3>
                            </div>
                            <div className="clear"></div>
                            <h4>Shares</h4>
                        </div>
                    </div>
                    <div className="quarter-sections">
                        <div className="dash-container dash-padding users">
                            <div className="left">
                                <i className="fa fa-eye xxxlarge"></i>
                            </div>
                            <div className="right">
                                <h3>{allUsers.length}</h3>
                            </div>
                            <div className="clear"></div>
                            <h4>Users</h4>
                        </div>
                    </div>
                </div>

                {/* Panel section */}
                <div className="dash-panel">
                    <div className="panel-padding">
                        <div className="panel-third">
                            <h5 className="panel-headers">Regions</h5>
                            <img src={azmap} alt="Arizona Regional Map" className="regionImg img" />
                        </div>
                        <div className="panel-twothird">
                            <h5 className="panel-headers">
                                Feeds
                            </h5>
                            <table className="panel-table">
                                <tbody>
                                    <tr>
                                        <td>&#129321; New record, over 90 views.</td>
                                        <td><i>10 mins</i></td>
                                    </tr>

                                    <tr>
                                        <td>&#9940; Database error.</td>
                                        <td><i>15 mins</i></td>
                                    </tr>
                                    <tr>
                                        <td>&#127919; New record, over 40 users.</td>
                                        <td><i>17 mins</i></td>
                                    </tr>
                                    <tr>
                                        <td>&#128172; New comments.</td>
                                        <td><i>25 mins</i></td>
                                    </tr>
                                    <tr>
                                        <td>&#128076; Check transactions.</td>
                                        <td><i>28 mins</i></td>
                                    </tr>
                                    <tr>
                                        <td>&#127384;  CPU overload.</td>
                                        <td><i>35 mins</i></td>
                                    </tr>
                                    <tr>
                                        <td> &#128158;New shares.</td>
                                        <td><i>39 mins</i></td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>



                {/* STATES SECTION  */}

                <div className="stats-container">

                    <h5 className="panel-headers">General Stats</h5>
                    <p>New Visitors</p>
                    <div className="tagsBackground">
                        <div className="stats-container statTags tagsCenter statsPadding tagBlue" >25%</div>
                    </div>

                    <p>New Users</p>
                    <div className="tagsBackground">
                        <div className="stats-container statTags tagsCenter statsPadding tagOrange" >50%</div>
                    </div>

                    <p>Bounce Rate</p>
                    <div className="tagsBackground">
                        <div className="stats-container statTags tagsCenter statsPadding tagRed">75%</div>
                    </div>
                </div>


                <div className="addEvent-container">
                    <EventAdd />
                    <YoloAdd />
                </div>


            </div>

        </>
    )

}

export default Admin