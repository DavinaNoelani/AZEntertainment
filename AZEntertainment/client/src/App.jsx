import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from '../src/components/Home/Home';
import Nav from './components/Nav/Nav';
import axios from 'axios'
import Admin from './components/Admin/Admin';
import Yolo from './components/Yolo/Yolo';
import UserPage from './components/Users/UserPage';
import Footer from './components/Footer/Footer';
import { handleShares } from './components/Tabs/ShareFunction';


function App() {

    const [eventList, setEventList] = useState([])
    const [register] = useState(false)
    const [yoloList, setYoloList] = useState([])
    const [matches, setMatches] = useState(false)
    const [matchesList, setMatchesList] = useState([])
    const [theme, setTheme] = useState('dark')
    const [userList, setUserList] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [showUserInfo, setShowInfo] = useState(false)
    const [showAdmin, setShowAdmin] = useState(false)


    useEffect(() => {
        axios.get('http://localhost:5000/api/event')
            .then(({ data }) => {
                setEventList(data)
                setMatchesList(data)
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:5000/api/yolo')
            .then(({ data }) => {
                setYoloList(data)
                setMatchesList(data)
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:5000/api/user')
            .then(({ data }) => {
                setAllUsers(data)
            })
            .catch(err => console.log(err))

    }, [register])

    // console.log(eventList, "eventList")
    // console.log(yoloList, "yoloList")


    return (
        <>
            <Router>

                <Nav
                    theme={theme}
                    setTheme={setTheme}
                    eventList={eventList}
                    setEventList={setEventList}
                    matches={matches}
                    setMatches={setMatches}
                    matchesList={matchesList}
                    setMatchesList={setMatchesList}
                    userList={userList}
                    setUserList={setUserList}
                    yoloList={yoloList}
                    setYoloList={setYoloList}
                    showUserInfo={showUserInfo}
                    setShowInfo={setShowInfo}
                    showAdmin={showAdmin}
                    setShowAdmin={setShowAdmin}
                />

                <Routes>
                    <Route path='/' element={
                        <Home
                            theme={theme}
                            setTheme={setTheme}
                            eventList={eventList}
                            setEventList={setEventList}
                            matches={matches}
                            setMatches={setMatches}
                            matchesList={matchesList}
                            setMatchesList={setMatchesList}
                            userList={userList}
                            setUserList={setUserList}
                            yoloList={yoloList}
                            setYoloList={setYoloList}
                            showUserInfo={showUserInfo}
                            setShowInfo={setShowInfo}
                        />
                    }>
                    </Route>

                    <Route path='/admin'
                        element={<Admin
                            theme={theme}
                            eventList={eventList}
                            setEventList={setEventList}
                            allUsers={allUsers}

                        />}>
                    </Route>



                    <Route path='/yolo'
                        element={<Yolo
                            yoloList={yoloList}
                            setYoloList={setYoloList}
                            theme={theme}
                            setUserList={setUserList}
                            userList={userList}
                            matches={matches}
                            setMatches={setMatches}
                            matchesList={matchesList}
                            setMatchesList={setMatchesList}
                            setTheme={setTheme}
                            eventList={eventList}
                            setEventList={setEventList}
                        />}>
                    </Route>

                    <Route path='/UserPage'
                        element={<UserPage
                            userList={userList}
                            setUserList={setUserList}
                            matches={matches}
                            setMatches={setMatches}
                            matchesList={matchesList}
                            setMatchesList={setMatchesList}
                            theme={theme}
                        />}>
                    </Route>

                </Routes>
            </Router>

            <Footer />


        </>
    );
}
export default App;
