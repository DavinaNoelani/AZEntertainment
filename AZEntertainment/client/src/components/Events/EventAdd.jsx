import React, { useState, useEffect } from "react"
import axios from 'axios'


const EventAdd = () => {

    const [category, setCategory] = useState('')
    const [audience, setAudience] = useState('')
    const [eventName, setEventName] = useState('')
    const [eventStartDate, setEventStartDate] = useState('')
    const [eventEndDate, setEventEndDate] = useState('')
    const [eventImage, setEventImage] = useState([])
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [venue, setVenue] = useState('')
    const [venueDescription, setVenueDescription] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [website, setWebsite] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [reoccurring, setReoccurring] = useState('')
    const [savedEvent, setSavedEvent] = useState([])
    const [time, setTime] = useState('')



    const handleUser = (e) => {
        e.preventDefault()
        const event = {
            category: category,
            audience: audience,
            eventName: eventName,
            eventStartDate: eventStartDate,
            eventEndDate: eventEndDate,
            time: time,
            description: description,
            price: price,
            venue: venue,
            venueDescription: venueDescription,
            phoneNumber: phoneNumber,
            website: website,
            address: {
                street: street,
                city: city,
                state: state,
                zipcode: zipcode
            },
            reoccurring: reoccurring,
            eventImage: eventImage


        }
        axios.post('http://localhost:5000/api/event/new-event', event)
            .then(({ data }) => {
                setSavedEvent([data])
            })
            .catch((err) => console.log(err))

        setCategory("")
        setAudience("")
        setEventName("")
        setEventStartDate("")
        setEventEndDate("")
        setDescription("")
        setVenue("")
        setVenueDescription("")
        setPhoneNumber('')
        setWebsite('')
        setStreet("")
        setCity("")
        setState("")
        setZipcode("")
        setReoccurring("")
        setEventImage("")

    }

    return (
        <>
            <div className="eventDiv half">
                <form id="eventForm" action="/api/event/new-event" method="post" className='form-container form-card form-margin'>
                    <h2 className='card-header'>Event:</h2>
                    <label htmlFor="category" className="inputLabels">Category</label>
                    <input onChange={(e) => setCategory(e.target.value)} id="category" name="category" value={category} type="text" className="form-input form-border" />

                    <label htmlFor="audience" className="inputLabels">Target Audience</label>
                    <input onChange={(e) => setAudience(e.target.value)} id="audience" value={audience} type="text" name="audience" className="form-input form-border" />

                    <label htmlFor="eventName" className="inputLabels">Event Name</label>
                    <input onChange={(e) => setEventName(e.target.value)} id="eventName" value={eventName} type="text" name="eventName" className="form-input form-border" />

                    <label htmlFor="eventStartDate" className="inputLabels">Event Start Date</label>
                    <input onChange={(e) => setEventStartDate(e.target.value)} id="eventStartDate" value={eventStartDate} type="date" name="eventStartDate" className="form-input form-border" />

                    <label htmlFor="eventEndDate" className="inputLabels">Event End Date</label>
                    <input onChange={(e) => setEventEndDate(e.target.value)} id="eventEndDate" value={eventEndDate} type="date" name="eventEndDate" className="form-input form-border" />

                    <label htmlFor="eventStartTime" className="inputLabels">Event Start Time</label>
                    <input onChange={(e) => setTime(e.target.value)} id="eventStartTime" value={time} type="text" name="eventStartTime" className="form-input form-border" />

                    <label htmlFor="description" className="inputLabels">Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} id="description" value={description} type="text" name="description" className="form-input form-border" />

                    <label htmlFor="price" className="inputLabels">Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} id="price" value={price} type="text" name="price" className="form-input form-border" />

                    <label htmlFor="venue" className="inputLabels">Venue</label>
                    <input onChange={(e) => setVenue(e.target.value)} id="venue" value={venue} type="text" name="venue" className="form-input form-border" />

                    <label htmlFor="venueDescription" className="inputLabels">Venue Description</label>
                    <input onChange={(e) => setVenueDescription(e.target.value)} id="venueDescription" value={venueDescription} type="text" name="venueDescription" className="form-input form-border" />

                    <label htmlFor="phoneNumber" className="inputLabels">Phone Number</label>
                    <input onChange={(e) => setPhoneNumber(e.target.value)} id="phoneNumber" value={phoneNumber} type="number" name="phoneNumber" className="form-input form-border" />

                    <label htmlFor="website" className="inputLabels">Website</label>
                    <input onChange={(e) => setWebsite(e.target.value)} id="website" value={website} type="text" name="website" className="form-input form-border" />

                    <label htmlFor="street" className="inputLabels">Street</label>
                    <input onChange={(e) => setStreet(e.target.value)} id="street" value={street} type="text" name="state" className="form-input form-border" />

                    <label htmlFor="city" className="inputLabels">City</label>
                    <input onChange={(e) => setCity(e.target.value)} id="city" value={city} type="text" name="city" className="form-input form-border" />

                    <label htmlFor="state" className="inputLabels">State</label>
                    <input onChange={(e) => setState(e.target.value)} id="state" value={state} type="text" name="street" className="form-input form-border" />

                    <label htmlFor="zipcode" className="inputLabels">Zipcode</label>
                    <input onChange={(e) => setZipcode(e.target.value)} id="zipcode" value={zipcode} type="text" name="zipcode" className="form-input form-border" />

                    <button onClick={handleUser} className='submitBtn w3-button w3-black btn'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default EventAdd
