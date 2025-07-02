import React, { useState, useEffect } from "react"
import axios from 'axios';


const UserAdd = ({ setUserList,register, setRegister, setLoginModal, setSignUpModal }) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [userImage, setUserImage] = useState([])


  useEffect(() => {
    console.log("component loaded")
  }, [])

  const handleUser = (e) => {
    e.preventDefault()
    const user = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
      userImage: userImage
    }
    axios.post('http://localhost:5000/api/user/new-user', user)
      .then(({ data }) => {
        setSignUpModal(false)
        setLoginModal(true)
        setRegister(false)
        setFirstName("")
        setLastName("")
        setUserName("")
        setPassword("")

      })
      .catch((err) => console.log(err))

  }

  return (
    <>
      <form id="userForm" action="/api/user/new-user" method="post">
          <h2 className="heading signUpHead">
            Sign Up
          </h2>

        <input className="modal-inputs" onChange={(e) => setFirstName(e.target.value)} id="firstName" name="firstName" value={firstName} type="text" placeholder="First Name" />

        <input className="modal-inputs" onChange={(e) => setLastName(e.target.value)} id="lastName" value={lastName} type="text" name="lastName" placeholder="Last Name" />

        <input className="modal-inputs" onChange={(e) => setUserName(e.target.value)} id="userName" value={userName} type="text" name="userName" placeholder="Username" />

        <input className="modal-inputs" onChange={(e) => setPassword(e.target.value)} id="password" value={password} type="password" name="password" placeholder="Password" />

        <label htmlFor="userImage" >Add Image</label>
        <input className="modal-inputs" onChange={(e) => setUserImage(e.target.value)} id="userImage" value={userImage} type="file" name="password" />

        <button className="loginBtns btn" onClick={handleUser}>Submit</button>
      </form>

    </>
  )
}

export default UserAdd
