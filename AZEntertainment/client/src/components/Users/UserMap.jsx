import React from "react";
import UserTabs from './UserTabs'

const UserMap = ({ array, userInfo, setUserInfo, setUserList, userList }) => {

    return (
        <>
            <div className="tab-container">
                {array.map((item, index) => {
                    return (
                        <div key={index}>
                            <UserTabs
                                userId={item._id}
                                firstName={item.firstName}
                                lastName={item.lastName}
                                userName={item.userName}
                                userImage={item.userImage}
                                userInfo={userInfo}
                                setUserInfo={setUserInfo}
                                userList={userList}
                                setUserList={setUserList}
                                eventPurchased={item.events.eventPurchased}
                                dateOfEvent={item.events.dateOfEvent}
                                eventArray={item.events}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default UserMap 