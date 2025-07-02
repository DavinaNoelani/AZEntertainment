import React, { useState } from "react";
import Logo2 from '../Imgs/Official Logo3.png'


const YoloSideBar = ({ userList, id, setMatchesList, matchesList, setMatches, yoloList }) => {


    const [noMatches, setNoMatches] = useState(false)
    const [showAll, setShowAll] = useState(false)


    const handleSearch = (e) => {

        console.log(e.toLowerCase(), 'e.search')

        let filterYoloList = yoloList.filter(item =>
            item.activityName.toLowerCase().includes(e.toLowerCase())
            ||
            item.description.toLowerCase().includes(e.toLowerCase())
        )

        console.log(filterYoloList, 'filter Yolo')
        // console.log(yoloList, 'filter Yolo')

        if (filterYoloList.length > 0) {
            setMatchesList(filterYoloList)
            setNoMatches(false)
            setMatches(true)
            setShowAll(true)
        } else {
            setMatchesList(filterYoloList)
            setNoMatches(true)
        }

        console.log(matchesList, 'matchesList')

    }

    const reset = () => {
        setMatchesList(yoloList)
        setNoMatches(false)
        setShowAll(false)
    }




    return (
        <>
            <div className="side-bar hide">

                <div className='logo-container' >
                    <img className='logo' src={Logo2} alt='logo' />
                </div>

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
                                            {/* <h3>{event.dateOfEvent}</h3> */}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

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
export default YoloSideBar
