import React from 'react';
import './yolo.css'
import YoloMap from './YoloMap';
import Jeep from './images/jeep.jpg'
import Jeep2 from './images/jeep2.png'
import Jeep5 from './images/jeep5.png'
import UserMap from '../Users/UserMap';
import YoloSideBar from './YoloSideBar';




const Yolo = ({ 
    yoloList, 
    setYoloList, 
    theme, 
    userList, 
    setUserList, 
    matches, 
    setMatches, 
    setMatchesList,
    matchesList 
}) => {



    return (
        <>
            <YoloSideBar
                theme={theme}
                userList={userList}
                setUserList={setUserList}
                matchesList={matchesList}
                setMatchesList={setMatchesList}
                setMatches={setMatches}
                yoloList={yoloList}
                setYoloList={setYoloList}
            />

            <div className={theme}>

                <div className="row row-padding">
                    <div className="container two-thirds">
                        {matches && (
                            <YoloMap
                                array={matchesList}
                                userList={userList}
                                setUserList={setUserList}
                                setYoloList={setYoloList}
                            />

                        )}

                        {!matches && (
                            <YoloMap
                                array={yoloList}
                                userList={userList}
                                setUserList={setUserList}
                                setYoloList={setYoloList}
                            />
                        )}
                    </div>


                    <div className="container third">

                        <div className="ad-center padding-large ad-padding">
                            <UserMap
                                array={userList}
                                userList={userList}
                                setUserList={setUserList}
                            />
                        </div>

                        <p className="ad-center padding-large ad-padding">
                            <img src={Jeep} className='image' alt='jeep ad' />
                        </p>

                        <p className="ad-center padding-large ad-padding">Lorem</p>

                        <p className="ad-center padding-large ad-padding">
                            <img src={Jeep2} className='image' alt='jeep' />
                        </p>

                        <p className="ad-center padding-large row-padding"> Lorem </p>

                        <p className="ad-center padding-large ad-padding">
                            <img src={Jeep5} className='image' alt='jeep' />
                        </p>
                        <p className="ad-center padding-large row-padding">Lorem </p>

                    </div>

                </div>





                <footer className="footer">
                    {/* <div className="footer-container">
                    <a href="#" id='footer-text'>Back to top</a>
                        <h4>&copy;2023 Az Entertainment</h4>
                    </div> */}

                </footer>

            </div>


        </>
    )
}
export default Yolo
