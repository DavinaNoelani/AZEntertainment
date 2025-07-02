import React, { useState, useEffect } from "react"
import axios from 'axios'


const YoloAdd = () => {

    const [activityName, setActivityName] = useState('')
    const [operationHours, setOperationHours] = useState('')
    const [operationDays, setOperationDays] = useState('')
    const [activityImage, setActivityImage] = useState([])
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [website, setWebsite] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [savedYolo, setSavedYolo] = useState([])


    const handleUser = (e) => {
        e.preventDefault()
        const yolo = {

            activityName: activityName,
            operationHours: operationHours,
            operationDays: operationDays,
            description: description,
            price: price,
            phoneNumber: phoneNumber,
            website: website,
            address: {
                street: street,
                city: city,
                state: state,
                zipcode: zipcode
            },




        }
        axios.post('http://localhost:5000/api/yolo/new-yolo', yolo)
            .then(({ data }) => {
                setSavedYolo([data])

                setActivityName("")
                setOperationHours("")
                setOperationDays("")
                setDescription("")
                setPrice("")
                setPhoneNumber("")
                setWebsite("")
                setStreet("")
                setCity("")
                setZipcode("")
                setActivityImage("")

            })
            .catch((err) => console.log(err))

    }

    return (
        <>
            <div className="eventDiv half">
                <form id="yoloForm" action="/api/yolo/new-yolo" method="post" className='form-container form-card form-margin'>
                <h2 className='card-header'>Extreme Event:</h2>
                    <label htmlFor="activityName" className="inputLabels">Activity Name</label>
                    <input onChange={(e) => setActivityName(e.target.value)} id="activityName" value={activityName} type="text" name="activityName" className="form-input form-border"/>
                    <br />
                    <label htmlFor="operationHours" className="inputLabels">Operation Hours</label>
                    <input onChange={(e) => setOperationHours(e.target.value)} id="operationHours" value={operationHours} type="text" name="operationHours" className="form-input form-border" />
                    <br />
                    <label htmlFor="operationDays" className="inputLabels">Days of Operation</label>
                    <input onChange={(e) => setOperationDays(e.target.value)} id="operationDays" value={operationDays} type="text" name="operationDays" className="form-input form-border" />
                    <br />
                    <label htmlFor="description" className="inputLabels">Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} id="yolo-description" value={description} type="text" name="description" cols={20} rows={10} className="form-input form-border"></textarea>
                    <br />
                    <label htmlFor="price" className="inputLabels">Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} id="yolo-price" value={price} type="Number" name="price" className="form-input form-border" />
                    <br />
                    <label htmlFor="phoneNumber" className="inputLabels">Phone Number</label>
                    <input onChange={(e) => setPhoneNumber(e.target.value)} id="yolo-phoneNumber" value={phoneNumber} type="Number" name="phoneNumber" className="form-input form-border"/>
                    <br />
                    <label htmlFor="website" className="inputLabels">Website</label>
                    <input onChange={(e) => setWebsite(e.target.value)} id="yolo-website" value={website} type="text" name="website" className="form-input form-border"/>
                    <br />
                    <label htmlFor="street" className="inputLabels">Street</label>
                    <input onChange={(e) => setStreet(e.target.value)} id="yolo-street" value={street} type="text" name="state" className="form-input form-border"/>
                    <br />
                    <label htmlFor="city" className="inputLabels">City</label>
                    <input onChange={(e) => setCity(e.target.value)} id="yolo-city" value={city} type="text" name="city" className="form-input form-border"/>
                    <br />
                    <label htmlFor="state" className="inputLabels">State</label>
                    <input onChange={(e) => setState(e.target.value)} id="yolo-state" value={state} type="text" name="street" className="form-input form-border"/>
                    <br />
                    <label htmlFor="zipcode" className="inputLabels">Zipcode</label>
                    <input onChange={(e) => setZipcode(e.target.value)} id="yolo-zipcode" value={zipcode} type="text" name="zipcode" className="form-input form-border"/>
                    <br />

                    <button onClick={handleUser} className='submitBtn w3-button w3-black btn'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default YoloAdd
