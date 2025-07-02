import React from "react";
import SideBar from "../SideBar/SideBar";
import UserMap from "./UserMap";
import PinkCar from '../Imgs/pinkCar.jpg'



const UserPage = ({ setUserList,userList, theme }) => {

    return (
        <>
            <UserMap
                array={userList}
                setUserList={setUserList}
            />

        </>
    )
}

export default UserPage