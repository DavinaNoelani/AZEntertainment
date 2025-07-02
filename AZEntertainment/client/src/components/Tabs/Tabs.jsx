import React, { useEffect, useState } from "react";
import concert from '../Imgs/concert.jpg'
import concert2 from '../Imgs/concert2.jpg'
import concert3 from '../Imgs/concert3.jpg'
import alsoCure from '../Imgs/also-cure.jpeg'
import cureDates from '../Imgs/cure-dates.jpg'
import chocolate from '../Imgs/chocolate.png'
import fire from '../Imgs/fire.webp'
import joust from '../Imgs/joust.jpg'
import downtownMarket from '../Imgs/downtownMarket.jpg'
import farmersMarket from '../Imgs/farmersMarket.jpg'
import kabob from '../Imgs/kabob.PNG'
import market from '../Imgs/market.webp'
import mudRun from '../Imgs/mud-run.jpg'
import mudGirls from '../Imgs/mudGirls.jpg'
import offspring from '../Imgs/offspring.jpg'
import OffspringAlbumn from '../Imgs/OffspringAlbumn.jpg'
import newdude from '../Imgs/newdude.jpg'
import GNR from '../Imgs/GNR.jpg'
import GNRMexico from '../Imgs/GNRMexico.webp'
import GNRLondon from '../Imgs/GNRLondon.jpg'
import mud from '../Imgs/mud.webp'
import muddypeople from '../Imgs/muddypeople.jpeg'
import moremudagain from '../Imgs/moremudagain.jpg'
import oldTimeFarmersMarket from '../Imgs/oldTimeFarmersMarket.jpg'
import mommasMarket from '../Imgs/mommasMarket.jpg'
import lilwayne from '../Imgs/lilwayne.jpg'
import lilwayne2 from '../Imgs/lilwayne2.jpg'
import lilwayne3ish from '../Imgs/lilwayne3ish.jpg'
import sunflowers from '../Imgs/sunflowers.png'
import morganw from '../Imgs/morganw.jpg'
import morganwallen from '../Imgs/morganwallen.jpg'
import CAS from '../Imgs/CAS.jpg'
import CAS2 from '../Imgs/CAS2.webp'
import CAS3 from '../Imgs/CAS3.jpg'
import fair from '../Imgs/fair.jpg'
import fair3 from '../Imgs/fair3.jpg'
import fair2 from '../Imgs/fair2.jpg'
import ribs from '../Imgs/ribs.jpg'
import ribs2 from '../Imgs/ribs2.jpg'
import taco from '../Imgs/taco.PNG'
import Payment from "../Users/Payment";
import { handleShares } from "./ShareFunction";
import axios from "axios";


const Tabs = ({
    street,
    city,
    state,
    zipcode,
    eventName,
    venue,
    venueDescription,
    audience,
    eventStartDate,
    eventEndDate,
    description,
    price,
    category,
    phoneNumber,
    eventImage,
    id,
    userInfo,
    userList,
    setUserList,
    likes,
    setEventList
}) => {
    const [event, setEvent] = useState(true)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [color3, setColor3] = useState('')
    const [color4, setColor4] = useState('')
    const [startDate, setStartDate] = useState(eventStartDate)
    const [converted, setConverted] = useState('')
    const [fullView, setFullView] = useState(false)
    const [src, setSrc] = useState('')
    const [purchase, setPurchase] = useState(false)
    const [shares, setShares] = useState(false)

    const openEvent = (e) => {
        setEvent(true)
        setTwo(false)
        setThree(false)
        setFour(false)
        setColor1(e.target.value)
        setColor2('')
        setColor3('')
        setColor4('')
    }

    const openTwo = (e) => {
        setEvent(false)
        setTwo(true)
        setThree(false)
        setFour(false)
        setColor2(e.target.value)
        setColor1('')
        setColor3('')
        setColor4('')
    }

    const openThree = (e) => {
        setEvent(false)
        setTwo(false)
        setThree(true)
        setFour(false)
        setColor3(e.target.value)
        setColor2('')
        setColor1('')
        setColor4('')
    }

    const openAbout = (e) => {
        setEvent(false)
        setTwo(false)
        setThree(false)
        setFour(true)
        setColor4(e.target.value)
        setColor2('')
        setColor3('')
        setColor1('')
        let newDate = new Date(startDate)
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        options.timeZone = 'UTC'
        setConverted(newDate.toLocaleDateString("en-US", options))
    }

    const largeImage = (e) => {
        setSrc(e.target.src)
        setFullView(true)
    }

    return (
        <>

            <button value='oneLink' id={color1} className='tablink' onClick={openEvent}>Event</button>
            <button value='twoLink' id={color2} className='tablink' onClick={openTwo}>Venue</button>
            <button value='threeLink' id={color3} className='tablink' onClick={openThree}>Tickets</button>
            <button value='fourLink' id={color4} className='tablink' onClick={openAbout}>About</button>

            {event && (
                <div id="Home" className="tabcontent ">
                    <div className="heading">
                        {eventName}
                        <button className="shareBtn" onClick={() => handleShares({ setEventList, id, likes })}>
                            &#128158; Share
                        </button>
                    </div>

                    <p>
                        {description}
                    </p>

                    <div className="thumbnailContainer zoom-container">
                        {eventImage.map((item, index) => {
                            switch (item) {
                                case "concert":
                                    eventImage = concert;
                                    break;
                                case "concert2":
                                    eventImage = concert2;
                                    break;
                                case "concert3":
                                    eventImage = concert3;
                                    break;
                                case "alsoCure":
                                    eventImage = alsoCure;
                                    break;
                                case "cureDates":
                                    eventImage = cureDates;
                                    break;
                                case "chocolate":
                                    eventImage = chocolate;
                                    break;
                                case "fire":
                                    eventImage = fire;
                                    break;
                                case "joust":
                                    eventImage = joust;
                                    break;
                                case "farmersMarket":
                                    eventImage = farmersMarket;
                                    break;
                                case "downtownMarket":
                                    eventImage = downtownMarket;
                                    break;
                                case "kabob":
                                    eventImage = kabob;
                                    break;
                                case "market":
                                    eventImage = market;
                                    break;
                                case "mudRun":
                                    eventImage = mudRun;
                                    break;
                                case "mudGirls":
                                    eventImage = mudGirls;
                                    break;
                                case "offspring":
                                    eventImage = offspring;
                                    break;
                                case "OffspringAlbumn":
                                    eventImage = OffspringAlbumn;
                                    break;
                                case "newdude":
                                    eventImage = newdude;
                                    break;
                                case "taco":
                                    eventImage = taco;
                                    break;
                                case "GNR":
                                    eventImage = GNR;
                                    break;
                                case "GNRMexico":
                                    eventImage = GNRMexico;
                                    break;
                                case "GNRLondon":
                                    eventImage = GNRLondon;
                                    break;
                                case "moremudagain":
                                    eventImage = moremudagain;
                                    break;
                                case "mud":
                                    eventImage = mud;
                                    break;
                                case "muddypeople":
                                    eventImage = muddypeople;
                                    break;
                                case "oldTimeFarmersMarket":
                                    eventImage = oldTimeFarmersMarket
                                    break;
                                case "mommasMarket":
                                    eventImage = mommasMarket
                                    break;
                                case "sunflowers":
                                    eventImage = sunflowers
                                    break;
                                case "lilwayne":
                                    eventImage = lilwayne
                                    break;
                                case "lilwayne2":
                                    eventImage = lilwayne2
                                    break;
                                case "lilwayne3ish":
                                    eventImage = lilwayne3ish
                                    break;
                                case "morganw":
                                    eventImage = morganw
                                    break;
                                case "morganwallen":
                                    eventImage = morganwallen
                                    break;
                                case "CAS":
                                    eventImage = CAS
                                    break;
                                case "CAS2":
                                    eventImage = CAS2
                                    break;
                                case "CAS3":
                                    eventImage = CAS3
                                    break;
                                case "fair":
                                    eventImage = fair
                                    break;
                                case "fair3":
                                    eventImage = fair3
                                    break;
                                case "fair2":
                                    eventImage = fair2
                                    break;
                                case "ribs":
                                    eventImage = ribs
                                    break;
                                case "ribs2":
                                    eventImage = ribs2
                                    break;

                                default:
                                    eventImage = concert
                            }
                            return (
                                <div className="zoom-container" key={index}>
                                    <img data-bs-toggle='tooltip' title="Click to Enlarge" onClick={largeImage} className="thumbnail" src={eventImage} alt="concert" />
                                    <div className="zoomOverlay">Click Image To Enlarge</div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            )}

            {fullView && (
                <div className="thumbnailModal">
                    <span className="closeMod" onClick={() => setFullView(false)}>&times;</span>
                    <img className="thumbnail-content" src={src} />
                </div>
            )}

            {two && (
                <div id="News" className="tabcontent ">
                    <div className="heading">
                        {venue}
                    </div>
                    <p className="venue-descript">
                        {venueDescription}
                    </p>
                </div>
            )}



            {three && (
                <div id="Contact" className="tabcontent ">
                    <div className="heading">Ticket Price: ${price}</div>
                    <p>
                        Make sure to get tickets before it's too late! ENJOY!
                    </p>
                    <button onClick={() => {
                        setPurchase(true)
                    }} className="attend-btn">Buy</button>
                </div>
            )}


            {four && (
                <div id="About" className="tabcontent ">
                    <div className="heading">Event Info</div>
                    <p>
                        <b>Start Date:</b>
                        <br />
                        <span>{converted}</span>
                        <br />
                        {/* Address: */}
                        <span style={{ fontSize: '2.5vh' }}></span><br />
                        {street}, {city} {state} {zipcode}
                        <br />
                        Phone Number: {phoneNumber}
                    </p>

                </div>
            )}

            {purchase && (
                <div id="buyDiv">
                    <Payment
                        id={id}
                        eventStartDate={eventStartDate}
                        eventName={eventName}
                        userInfo={userInfo}
                        userList={userList}
                        setUserList={setUserList}
                        setPurchase={setPurchase}
                    />
                </div>
            )}
        </>
    )

}

export default Tabs
