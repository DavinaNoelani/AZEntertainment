import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import small from '../Imgs/smallTop2.png'
import cancelIcon from '../Imgs/csncel.png'
import themeIcon from '../Imgs/theme-dark.png'
import menuIcon from '../Imgs/menu.png'
import SearchBar from "./SearchBar";
import lightIcon from "../Imgs/theme-light.png"
import Home from '../Home/Home'


const Nav = ({
    eventList,
    setEventList,
    setMatchesList,
    matchesList,
    setMatches,
    matches,
    setTheme,
    userList,
    setUserList,
    yoloList,
    setYoloList,
    showUserInfo,
    setShowInfo,
    showAdmin,
    setShowAdmin
}) => {

    const [showMainMenu, setShowMainMenu] = useState(false);
    const [mobileView, setMobileView] = useState(false)
    const [themeMenu, setThemeMenu] = useState(false)

    const navigate = useNavigate()



    const toggleMainMenu = () => {
        setShowMainMenu(!showMainMenu)
        setMobileView(!mobileView)
    }

    const toggleThemeMenu = () => {
        setThemeMenu(!themeMenu)
    }



    return (
        <>
            <div className="main-document-header-container">

                <header className="top-navigation">
                    <div className="nav-container">

                        <div className="top-navigation-wrap">
                            <a data-bs-toggle='tooltip' title="Home" onClick={() => navigate(<Home />)} className="logo-top" href="/" aria-label="AZ homepage">
                                <img className="topLogo" src={small} alt="small logo" />
                            </a>


                        </div>

                        {!showMainMenu && (
                            <button type="button" className="button action has-icon main-menu-toggle" aria-haspopup="menu" aria-label="Open main menu" aria-expanded="false" onClick={toggleMainMenu} >
                                <span className="buttonWrap">
                                    <img className="icon icon-search" alt="menu icon" src={menuIcon} />
                                </span>
                            </button>
                        )}

                        {showMainMenu && (
                            <button type="button" className="button action has-icon main-menu-toggle" aria-haspopup="menu" aria-label="Close main menu" aria-expanded="true" onClick={toggleMainMenu} >
                                <span className="buttonWrap">
                                    <img className="icon icon-search" alt="cancel icon" src={cancelIcon} />
                                </span>

                            </button>
                        )}

                        <div className="nav-top top-navigation-main">

                            <nav className="main-nav">

                                <ul className="main-menu">
                                    <li className="top-level-entry-container">
                                        <Link to='/yolo' className='nav-links'>Extreme Adventures</Link>
                                    </li>
                                    {showAdmin &&
                                        <li className="top-level-entry-container">
                                            <Link to='/admin' className='nav-links'>Admin</Link>
                                        </li>
                                    }
                                    {/* <li className="top-level-entry-container">
                                        <Link to='/' className='nav-links'>Contact</Link>
                                    </li> */}

                                </ul>
                            </nav>

                            <SearchBar
                                eventList={eventList}
                                setEventList={setEventList}
                                matches={matches}
                                setMatches={setMatches}
                                matchesList={matchesList}
                                setMatchesList={setMatchesList}
                                yoloList={yoloList}
                                setYoloList={setYoloList}
                            />

                            <button data-bs-toggle='tooltip' title="Theme" onClick={toggleThemeMenu} type="button" className="button action has-icon them-switcher-menu small" aria-haspopup="menu" aria-expanded="true">
                                <span className="buttonWrap">
                                    <img
                                        className="icon icon-them-dark"
                                        alt="theme icon"
                                        src={themeIcon} />
                                    Theme
                                </span>
                            </button>


                            {themeMenu && (
                                <div className="theme-switcher-menu">

                                    <ul className="submenu themes-menu inline-submenu-lg" aria-labelledby="themes-menu-button">

                                        <li className=" ">
                                            <button onClick={() => setTheme('light')}
                                                type="button" className="button primary has-icon">
                                                <span className="buttonWrap">
                                                    <span className="icon icon-theme-light">
                                                        <img
                                                            className="icon icon-theme-light"
                                                            alt="light icon"
                                                            src={lightIcon}
                                                        />
                                                    </span>
                                                    Light
                                                </span>

                                            </button>
                                        </li>

                                        <li className=" ">
                                            <button
                                                onClick={() => setTheme('dark')} type="button" className="button primary has-icon">
                                                <span className="buttonWrap">
                                                    <span className="icon icon-theme-dark">
                                                        <img
                                                            className="icon icon-theme-dark"
                                                            alt="dark icon"
                                                            src={themeIcon}
                                                        />
                                                    </span>
                                                    Dark
                                                </span>

                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            <ul className="auth-container">
                                <li>
                                    <SignIn
                                        userList={userList}
                                        setUserList={setUserList}
                                        showUserInfo={showUserInfo}
                                        setShowInfo={setShowInfo}
                                        setShowAdmin={setShowAdmin}
                                    />
                                </li>
                            </ul>


                        </div>
                    </div>
                </header>
            </div>

            {mobileView && (
                <div className="mobile-nav show-nav">

                    <div className="mobile-theme">
                        <button onClick={toggleThemeMenu} type="button" className="button action has-icon them-switcher-menu small" aria-haspopup="menu" aria-expanded="true">
                            <span className="buttonWrap">
                                <img
                                    className="icon icon-them-dark"
                                    alt="theme icon"
                                    src={themeIcon} />
                                Theme
                            </span>
                        </button>
                        {themeMenu && (
                            <div className="theme-switcher-menu">

                                <ul className="submenu themes-menu inline-submenu-lg" aria-labelledby="themes-menu-button">

                                    <li className=" ">
                                        <button onClick={() => setTheme('light')}
                                            type="button" className="button primary has-icon">
                                            <span className="buttonWrap">
                                                <span className="icon icon-theme-light">
                                                    <img
                                                        className="icon icon-theme-light"
                                                        alt="light icon"
                                                        src={lightIcon}
                                                    />
                                                </span>
                                                Light
                                            </span>

                                        </button>
                                    </li>

                                    <li className=" ">
                                        <button
                                            onClick={() => setTheme('dark')} type="button" className="button primary has-icon">
                                            <span className="buttonWrap">
                                                <span className="icon icon-theme-dark">
                                                    <img
                                                        className="icon icon-theme-dark"
                                                        alt="dark icon"
                                                        src={themeIcon}
                                                    />
                                                </span>
                                                Dark
                                            </span>

                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        <ul className="mobile-auth-container">
                            <li>
                                <SignIn
                                    userList={userList}
                                    setUserList={setUserList}
                                />
                            </li>
                        </ul>
                    </div>

                    <SearchBar
                        eventList={eventList}
                        setEventList={setEventList}
                        matches={matches}
                        setMatches={setMatches}
                        matchesList={matchesList}
                        setMatchesList={setMatchesList}
                    />
                    <div className="nav-top">
                        <nav className="main-nav">

                            <ul className="mobile-main-menu">
                                <li className="mobile">
                                    <Link to='/yolo' className='nav-links'>Extreme Adventures</Link>
                                </li>
                                <li className="mobile">
                                    <Link to='/admin' className='nav-links'>Admin</Link>
                                </li>
                                {/* <li className="mobile">
                                    <Link to='/' className='nav-links'>Contact</Link>
                                </li> */}

                            </ul>

                        </nav>


                    </div>
                </div>
            )}

        </>
    )
}
export default Nav
