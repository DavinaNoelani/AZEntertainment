import React from "react";
import '../Home/home.css'
import PinkCar from '../Imgs/pinkCar.jpg';
import Foodie from '../Imgs/foodStuff.jpg';
import snowDay from '../Imgs/snowDay.jpg'
import EventMap from "../Events/EventMap";
import SideBar from "../SideBar/SideBar";
import UserMap from "../Users/UserMap";


const Home = ({
    setEventList,
    yoloList,
    setYoloList,
    eventList,
    matches,
    setMatches,
    setMatchesList,
    matchesList,
    theme,
    userList,
    setUserList,
    showUserInfo
}) => {





    return (
        <>
            <SideBar
                theme={theme}
                userList={userList}
                setUserList={setUserList}
                eventList={eventList}
                setMatchesList={setMatchesList}
                setMatches={setMatches}
                yoloList={yoloList}
                setYoloList={setYoloList}
                showUserInfo={showUserInfo}
            />

            <div className={theme}>

                <div className="row row-padding">
                    <div className="container two-thirds">
                        {matches && (
                            <EventMap
                                array={matchesList}
                                userList={userList}
                                setUserList={setUserList}
                                setEventList={setEventList}

                            />
                        )}

                        {!matches && <EventMap
                            array={eventList}
                            userList={userList}
                            setUserList={setUserList}
                            setEventList={setEventList}
                        />}


                    </div>

                    <div className="container third">

                        {showUserInfo &&
                            <div className="ad-center padding-large ad-padding">
                                <UserMap
                                    array={userList}
                                    userList={userList}
                                    setUserList={setUserList}
                                />
                            </div>
                        }

                        <p className="ad-center padding-large ad-padding">
                            <img src={PinkCar}
                                className='image'
                                alt="Pink car"
                            />
                            Barret Jackson Auction.
                            Come for the fun, sun, and revved up energy!
                            Bring your best wheels and show the greater Phoenix area what you have in store.
                        </p>


                        <p className="ad-center padding-large ad-padding">
                            <img src={Foodie}
                                className='image'
                                alt="food festival"
                            />
                            Are you a foodie? Looking for new masterpieces to feed the family?
                            Whatever you're hoping to learn or taste. We've got it here at Foodie Culture.
                            The event of the year!
                        </p>

                        <p className="ad-center padding-large ad-padding">
                            <img src={snowDay}
                                className='image'
                                alt="snow bowl"
                            />
                            Come visit to snow where you least expected - Arizona SnowBowl!! Yep, in Arionza you'll get a little piece of every season.
                        </p>





                    </div>
                </div>




            </div>


        </>
    )
}
export default Home
