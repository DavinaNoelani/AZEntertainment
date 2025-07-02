import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Payment = ({ userList, setUserList, eventName, eventStartDate, setPurchase }) => {

    const [userAddress, setUserAddress] = useState("")
    const [userCity, setUserCity] = useState("")
    const [userState, setUserState] = useState("")
    const [userZipcode, setUserZipcode] = useState("")
    const [expiration, setExpiration] = useState("")
    const [creditCard, setCreditCard] = useState("")
    const [creditCardType, setCreditCardType] = useState("")
    const [cvv, setCvv] = useState("")
    const [paymentInfo, setPaymentInfo] = useState([])
    const cardOptions = ["Click For Options","Visa","MasterCard", "American Express", "Discover"]
    const navigate = useNavigate();

    const handleOptionChange = (e)=>{
        console.log("selected value", e.target.value)
        setCreditCardType(e.target.value)
    }

    const handlePurchase = () => {
        const newEvent = {
            eventPurchased: eventName,
            dateOfEvent: eventStartDate,
        }
        const userId = userList[0]._id
        const events = userList[0].events
        const payment = {
            events: [...events, newEvent
            ],
            paymentInfo: {
                userAddress: userAddress,
                userCity: userCity,
                userstate: userState,
                userZipcode: userZipcode,
                creditCardType:creditCardType,
                creditCard: creditCard,
                expiration: expiration,
                cvv: cvv,
            }
        }
        axios.put(`http://localhost:5000/api/user/update-record/${userId}`, payment)

            .then(({ data }) => {
                axios.get(`http://localhost:5000/api/user/one-user/${userId}`)
                    .then(({ data }) => {
                        setUserList([data])
                    })
                    .catch(err => console.log(err))
            })
            .catch((err) => console.log(err))
        setPurchase(false)
        console.log(userList, "inside purchase handle")
    }
 
    return (
        <>
            <div className="payment-modal-content">
                <div className="row">
                    <div className="col">
                        <h3>Billing Address</h3>
                        <label htmlFor="adr"> Address</label>
                        <input className='modal-inputs' onChange={(e) => setUserAddress(e.target.value)} value={userAddress} type="text" id="ccadr" name="address" placeholder="542 W. 15th Street" />
                        <label htmlFor="city">City</label>
                        <input className='modal-inputs' onChange={(e) => setUserCity(e.target.value)} value={userCity} type="text" id="cccity" name="city" placeholder="New York" />
                        <label htmlFor="state">State</label>
                        <input className='modal-inputs' onChange={(e) => setUserState(e.target.value)} value={userState} type="text" id="ccstate" name="state" placeholder="NY" />
                        <label htmlFor="zip">Zip</label>
                        <input className='modal-inputs' onChange={(e) => setUserZipcode(e.target.value)} value={userZipcode} type="text" id="cczip" name="zip" placeholder="10001" />

                        <button className="cancelBtn btn" onClick={() => setPurchase(false)} type="submit" value="Continue to checkout">Cancel</button>
                    </div>

                    <div className="col">
                        <h3>Payment</h3>
                        <label htmlFor="fname">Accepted Cards</label>
                        <label htmlFor="cctype">Credit Card Type</label>
                        <select className='modal-inputs' onChange={handleOptionChange}>
                            {cardOptions.map((option, index)=>{
                                return (
                                  
                                    <option key={index}>{option}</option>
                                  
                                )
                            })}
                        </select>
                        <label htmlFor="ccnum">Credit card number</label>
                        <input className='modal-inputs' onChange={(e) => setCreditCard(e.target.value)} value={creditCard} type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                        <label htmlFor="expmonth">Exp Month</label>
                        <input className='modal-inputs' onChange={(e) => setExpiration(e.target.value)} value={expiration} type="text" id="expmonth" name="expmonth" placeholder="September" />
                        <label htmlFor="cvv">CVV</label>
                        <input className='modal-inputs' onChange={(e) => setCvv(e.target.value)} value={cvv} type="text" id="cvv" name="cvv" placeholder="352" />
                        
                        <button className="loginBtns btn" onClick={handlePurchase} type="submit" value="Continue to checkout">Submit</button>
                    </div>

                </div>
            </div>
        </>

    )

}

export default Payment
