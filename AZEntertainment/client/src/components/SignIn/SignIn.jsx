import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios"
import UserAdd from "./UserAdd";

const SignIn = ({ userList, setUserList, setShowInfo, setShowAdmin }) => {

    const [checkUserName, setCheckUserName] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [showSignInForm, setShowSignInForm] = useState(false)
    const [showSignOut, setShowSignOut] = useState(false)
    const [showSignIn, setShowSignIn] = useState(true)
    const [showError, setShowError] = useState(false)
    const [showSignedIn, setShowSignedIn] = useState(false)
    const [register, setRegister] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)
    const navigate = useNavigate()



    const handleRegister = () => {
        setRegister(true)
        setSignUpModal(true)
        setLoginModal(false)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        setShowSignInForm(true)
        setShowSignOut(true)
        setShowSignIn(false)
        setLoginModal(true)
    }

    const handleVerify = (e) => {
        e.preventDefault()
        const userToVerify = {
            userName: checkUserName,
            password: checkPassword
        }
        axios.post('http://localhost:5000/api/user/verify-user', userToVerify)
            .then(({ data }) => {
                console.log(data.role, 'role')

                if (data.userName === checkUserName) {
                    setLoginModal(false)
                    setShowSignedIn(true)
                    setShowError(false)
                    setUserList([data])

                } else {
                    setShowError(true)
                }
                if (data.userName.toLowerCase() === 'admin123') {
                    setShowAdmin(true)
                }

            })
            .catch((err) =>
                console.log(err, "UserName and Password did not match"),
                setShowError(true)
            )
        setShowInfo(true)
    }

    const handleSignOut = () => {
        setShowSignOut(false)
        setShowSignIn(true)
        setShowSignedIn(false)
        navigate('/')
    }

    const closeModals = () => {
        setLoginModal(false)
        setSignUpModal(false)
    }


    return (
        <>
            {showSignIn && (
                <button id="signIn" className="signin-link" onClick={handleSignIn}>Login</button>
            )}

            {showSignOut && (
                <button id="signOut" className="btn" onClick={handleSignOut}>Log Out</button>
            )}

            {loginModal && (
                <>
                    <div className="userContainer">
                        <span
                            onClick={closeModals}
                            className='closeBtnUser'
                        >
                            &times;
                        </span>

                        <form id="searchUsers" className="modal-content" action="/api/book/search-book" method="post">
                            <div className="row">
                                <h2 className="userHeading">
                                    Login with Social Media or Manually
                                </h2>
                                <div className="vl">
                                    <span className="vl-innertext">or</span>
                                </div>

                                <div className="col">
                                    <div className="hide-md-lg">
                                        <p>Or sign in manually:</p>
                                    </div>
                                    <input className='modal-inputs' type="text" name="userName" value={checkUserName} onChange={(e) => setCheckUserName(e.target.value)} placeholder='Username' />
                                    <input className='modal-inputs' type="password" name="password" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} placeholder='Password' />
                                    <button className="loginBtns btn" onClick={handleVerify}>Verify</button>
                                </div>

                                <div className="col">
                                    <Link to='/' className="fb btn">
                                        Login with Facebook
                                    </Link>

                                    <Link to='/' className="twitter btn">
                                        Login with Twitter
                                    </Link>

                                    <Link to='/' className="google btn">
                                        Login with Google
                                    </Link>
                                </div>

                            </div>

                        </form>
                        <div className="bottom-container">
                            <div className="row">
                                <div className="col">
                                    <Link to='/' style={{ color: "white" }} onClick={handleRegister} className="btn">Sign up</Link>
                                </div>
                                <div className="col">
                                    <Link to='/' style={{ color: "white" }} className="btn">Forgot password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {showError && (
                <p>Invalid LogIn Information</p>
            )}

            {signUpModal && (
                <div className="userModals">

                    <span
                        onClick={closeModals}
                        className='closeBtn'
                    >
                        &times;
                    </span>

                    <UserAdd
                        register={register}
                        setRegister={setRegister}
                        userList={userList}
                        setUserList={setUserList}
                        setLoginModal={setLoginModal}
                        setSignUpModal={setSignUpModal}
                    />

                </div>
            )}
        </>
    )
}
export default SignIn
