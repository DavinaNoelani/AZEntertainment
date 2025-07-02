import React, { useState } from "react";
import profilePic from '../Imgs/jane.jpg'


const UserTabs = ({ userImage, firstName, lastName, userName, eventArray }) => {


    const [showEvents, setShowEvents] = useState(false)
    const [hideShowEvent, setHide] = useState(true)
    const [hideEventButton, setHideButton] = useState(false)

    // console.log(eventArray, 'eventArr')


    const showEventClick = () => {
        setShowEvents(true)
        setHide(false)
        setHideButton(true)
    }

    const hideEventClick = () => {
        setHideButton(false)
        setHide(true)
        setShowEvents(false)
    }


    return (
        <>
            <div className="user-container">
                <h2 className="userHeading">Account</h2>
                <img alt='profile picture' className="round-thumbnail" src={userImage} />

                <h3 className="user-font">{firstName} {lastName}</h3>

                <h3 className="user-font">{userName}</h3>

                {hideShowEvent && (
                    <div className="span-font see-events">
                        See Your events
                        <button onClick={showEventClick} className="click-btn">
                            Click here
                        </button>
                    </div>
                )}
            </div>



            {showEvents &&
                <div className='event-modal'>
                    <h1 className="event-head">Your Events</h1>
                    {eventArray.map(item => (
                        <div key={item._id}>
                            <h3>{item.eventPurchased}</h3>
                        </div>
                    ))}
                </div>
            }

            {hideEventButton &&
                <button className="click-btn" onClick={hideEventClick}>
                    Hide events
                </button>
            }
        </>
    )
}

export default UserTabs
