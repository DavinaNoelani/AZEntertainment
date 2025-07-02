import React, { useState } from "react";
import Tandem from '../Imgs/tandem.jpg'
import Skydiving1 from '../Imgs/skydiving1.jpg'
import Skydiving2 from '../Imgs/skydiving2.jpg'
import Bungeejumping from '../Imgs/bungeejumping.jpg'
import Bungeejumping1 from '../Imgs/bungeejumping1.jpg'
import Bungeejumping2 from '../Imgs/bungeejumping2.jpg'
import Parasailing from '../Imgs/parasailing.jpg'
import Parasailing2 from './images/parasailing2.jpg'
import Parasailing3 from './images/parasailing3.jpg'
import YoloPayment from "./YoloPayment";
import Basejumping from './images/basejumping.jpg'
import Basejumping1 from './images/basejumping1.jpg'
import Basejumping2 from './images/basejumping2.png'
import Ziplining from './images/ziplining.jpg'
import Ziplining2 from './images/ziplining2.jpg'
import Ziplining3 from './images/ziplining3.png'

const YoloTabs = ({
    id,
    userList,
    setUserList,
    activityName,
    operationHours,
    operationDays,
    description,
    price,
    phoneNumber,
    website,
    street,
    city,
    state,
    zipcode,
    comment,
    activityImage,
    setYoloList
}) => {


    const [activity, setActivity] = useState(true)
    const [yoloSrc, setYoloSrc] = useState('')
    const [yoloFullView, setYoloFullView] = useState(false)
    const [prices, setPrices] = useState(false)
    const [about, setAbout] = useState(false)
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    const [color3, setColor3] = useState('')
    const [purchaseModal, setPurchaseModal] = useState(false)

   
    const openAct = () => {
        setActivity(true)
        setPrices(false)
        setAbout(false)
        setColor1('oneLink')
        setColor2('')
        setColor3('')
    }

    const openPrices = () => {
        setActivity(false)
        setPrices(true)
        setAbout(false)
        setColor2('twoLink')
        setColor1('')
        setColor3('')
    }

    const openAbout = () => {
        setActivity(false)
        setPrices(false)
        setAbout(true)
        setColor2('')
        setColor3('threeLink')
        setColor1('')
    }

    const yoloLargeImage = (e) => {
        setYoloSrc(e.target.src)
        setYoloFullView(true)
    }


    return (
        <>

            <button id={color1} className='tablink' onClick={openAct}>Activity</button>
            <button id={color2} className='tablink' onClick={openPrices}>Prices</button>
            <button id={color3} className='tablink' onClick={openAbout}>About</button>

            {activity && (
                <div id="Home" className="tabcontent ">
                    <div className="heading">
                        {activityName}
                    </div>

                    <p>
                        {description}
                    </p>

                    <div className="thumbnailContainer zoom-container">
                        {activityImage.map((item, index) => {
                            let imageSrc;
                            switch (item) {
                                case "bungeejumping":
                                    imageSrc = Bungeejumping;
                                    break;
                                case "bungeejumping1":
                                    imageSrc = Bungeejumping1;
                                    break;
                                case "bungeejumping2":
                                    imageSrc = Bungeejumping2;
                                    break;
                                case "skydiving1":
                                    imageSrc = Skydiving1;
                                    break;
                                case "skydiving2":
                                    imageSrc = Skydiving2;
                                    break;
                                case "tandem":
                                    imageSrc = Tandem;
                                    break;
                                case "parasailing":
                                    imageSrc = Parasailing
                                    break;
                                case "parasailing2":
                                    imageSrc = Parasailing2
                                    break;
                                case "parasailing3":
                                    imageSrc = Parasailing3
                                    break;
                                case "basejumping":
                                    imageSrc = Basejumping
                                    break;
                                case "basejumping1":
                                    imageSrc = Basejumping1
                                    break;
                                case "basejumping2":
                                    imageSrc = Basejumping2
                                    break;
                                case "ziplining":
                                    imageSrc = Ziplining
                                    break;

                                case "ziplining2":
                                    imageSrc = Ziplining2
                                    break;

                                case "ziplining3":
                                    imageSrc = Ziplining3
                                    break;

                                default:
                                    imageSrc = Bungeejumping

                            }
                            return (
                                <div className="zoom-container" key={index}>
                                    <img onClick={yoloLargeImage} className="thumbnail" src={imageSrc} alt="activity pics" />
                                    <div className="zoomOverlay">Click Image To Enlarge</div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            )}

            {yoloFullView && (
                <div className="thumbnailModal">
                    <span className="closeMod" onClick={() => setYoloFullView(false)}>&times;</span>
                    <img className="thumbnail-content" alt="full view activity" src={yoloSrc} />
                </div>
            )}

            {prices && (
                <div id="Prices" className="tabcontent ">
                    <div className="heading">
                        Ticket Price: ${price}
                    </div>
                    <p>

                    </p>
                    <button onClick={() => {
                        setPurchaseModal(true)
                    }} className="attend-btn">Buy</button>
                </div>
            )}

            {about && (
                <div id="AboutYolo" className="tabcontent ">
                    <div className="heading">Event Info</div>

                    <p>
                        <b>Days:</b> <span> {operationDays}</span><br />
                        <b>Hours:</b> <span> {operationHours}</span>

                        <br />
                        Address:<br />
                        <span style={{ fontSize: '2.5vh' }}>  {street}</span><br />
                        {city} {state} {zipcode}
                        <br />
                        PhoneNumber: {phoneNumber}<br />
                        Website:{website}
                    </p>

                </div>
            )}
            {purchaseModal && (
                <div id="buyDiv">
                    <YoloPayment

                        operationHours={operationHours}
                        activityName={activityName}
                        userList={userList}
                        setUserList={setUserList}
                        setPurchaseModal={setPurchaseModal}
                    />
                </div>)}

        </>
    )

}

export default YoloTabs
