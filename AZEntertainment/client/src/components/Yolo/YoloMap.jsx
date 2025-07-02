import React from 'react'
import YoloTabs from './YoloTabs'



const YoloMap = ({ array, userList, setUserList, setYoloList }) => {

    return (
        <>
            <div className="tab-container">
                {array.map((item, index) => {
                    return (
                        <div key={index}>
                            <YoloTabs
                                id={item._id}
                                activityName={item.activityName}
                                operationHours={item.operationHours}
                                operationDays={item.operationDays}
                                description={item.description}
                                price={item.price}
                                phoneNumber={item.phoneNumber}
                                website={item.website}
                                street={item.address.street}
                                city={item.address.city}
                                state={item.address.state}
                                zipcode={item.address.zipcode}
                                comment={item.comment.message}
                                activityImage={item.activityImage}
                                userList={userList}
                                setUserList={setUserList}
                                setYoloList={setYoloList}
                            />
                        </div>
                    )
                })}
            </div>
        </>

    )
}
export default YoloMap
