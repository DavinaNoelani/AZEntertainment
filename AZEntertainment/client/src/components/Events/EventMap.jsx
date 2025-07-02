import React from 'react'
import Tabs from '../Tabs/Tabs'


const EventMap = ({ array, userList, setUserList, setEventList }) => {

    return (
        <>
            <div className="tab-container">
                {array.map((item, index) => {
                    return (
                        <div key={index}>
                            <Tabs
                                id={item._id}
                                category={item.category}
                                audience={item.audience}
                                eventName={item.eventName}
                                eventStartDate={item.eventStartDate}
                                eventEndDate={item.eventEndDate}
                                description={item.description}
                                price={item.price}
                                venue={item.venue}
                                venueDescription={item.venueDescription}
                                phoneNumber={item.phoneNumber}
                                website={item.website}
                                street={item.address.street}
                                city={item.address.city}
                                state={item.address.state}
                                zipcode={item.address.zipcode}
                                eventImage={item.eventImage}
                                likes={item.likes}
                                userList={userList}
                                setUserList={setUserList}
                                setEventList={setEventList}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default EventMap
