import React, { useState } from "react";
import '../Home/home.css'
import Logo2 from '../Imgs/Official Logo3.png'


const SideBar = ({ userList, id, eventList, setMatchesList, setMatches, showUserInfo }) => {


    const [noMatches, setNoMatches] = useState(false)
    const [showAll, setShowAll] = useState(false)


    const handleSearch = (e) => {

        console.log(e.toLowerCase(), 'e.search')

        let filterEventList = eventList.filter((item) =>
            item.eventName.toLowerCase().includes(e.toLowerCase()))

        if (filterEventList.length > 0) {
            setMatchesList(filterEventList)
            setNoMatches(false)
            setMatches(true)
            setShowAll(true)
        } else {
            setMatchesList(filterEventList)
            setNoMatches(true)
        }

    }

    const reset = () => {
        setMatchesList(eventList)
        setNoMatches(false)
        setShowAll(false)
    }




    return (
        <>
            <div className="side-bar hide">

                <div className='logo-container' >
                    <img className='logo' src={Logo2} alt='logo' />
                </div>

                {showUserInfo && (
                    <>
                        <h1 className="event-head">Events Purchased</h1>

                        <div className="event-purchased-container">
                            {userList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.events.map((event) => {
                                            return (
                                                <div key={event._id}>
                                                    <p className="event-click" onClick={() => handleSearch(event.eventPurchased)}>
                                                        {event.eventPurchased}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )}

                {noMatches && (
                    <div id="noMatchesSide">
                        <span className="closeNoMatch" onClick={reset}>&times;</span>
                        <p>No Matches Found</p>
                    </div>
                )}

                {showAll && (<button onClick={reset} className="attend-btn btn bottom">
                    Show All Events
                </button>)}

            </div>
        </>
    )
}
export default SideBar
