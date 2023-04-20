import React, { Suspense , lazy , useEffect , useState} from 'react';
import { auth } from './Firebase';
import {onAuthStateChanged } from "firebase/auth";
import Navbar from './Components/Navbar';
import Loader from './Components/Loader';
import './App.css';
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  bestGamesURL,
  actionGamesURL,
  shooterGamesURL,
  adventureGamesURL,
  rolePlayingGamesURL,
  strategyGamesURL,
  puzzleGamesURL,
  racingGamesURL,
  sportsGamesURL
} from './Components/Api';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
const Home = lazy(() => import('./Components/Home'));
const Detailpage = lazy(() => import('./Components/Detailpage'));
const Loginpage = lazy(() => import('./Components/Loginpage'));

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log('user singned in');
      } else {
        console.log('user singned out');
      }
    })
  }, [])
  
  
    return (
      <>
        <div className='wrapper position-relative' style={{"backgroundColor":"#181D31" , "minHeight": "100vh"}}>
          <Router>
            <Suspense fallback={<Loader/>}>
              <Routes>
                <Route exact path='/login' element={<Loginpage/>}/>
                <Route 
                  element={
                    <>
                      <Navbar currentUser={user} setUser={setUser}/> 
                      <Outlet/>
                    </>
                  }
                >
                  <Route exact path='/' element={<Home key="home" URL = {(p)=> popularGamesURL(p)} title="Popular Games"/>}/>
                  <Route exact path='/newreleased' element={<Home key="newreleased" URL = {(p)=> newGamesURL(p)} title="New Released Games"/>}/>
                  <Route exact path='/upcoming' element={<Home key="upcoming" URL = {(p)=> upcomingGamesURL(p)} title="Upcoming Games"/>}/>
                  <Route exact path='/bestgames' element={<Home key="bestgames" URL = {(p)=> bestGamesURL(p)} title="Best Of All Times"/>}/>
                  <Route exact path='/genre/actionGames' element={<Home key="actionGames" URL = {(p)=> actionGamesURL(p)} title="Action Games"/>}/>
                  <Route exact path='/genre/shooterGames' element={<Home key="shooterGames" URL = {(p)=> shooterGamesURL(p)} title="Shooting Games"/>}/>
                  <Route exact path='/genre/adventureGames' element={<Home key="adventureGames" URL = {(p)=> adventureGamesURL(p)} title="Adventure Games"/>}/>
                  <Route exact path='/genre/rolePlayingGames' element={<Home key="rolePlayingGames" URL = {(p)=> rolePlayingGamesURL(p)} title="RPG Games"/>}/>
                  <Route exact path='/genre/strategyGames' element={<Home key="strategyGames" URL = {(p)=> strategyGamesURL(p)} title="Strategy Games"/>}/>
                  <Route exact path='/genre/puzzleGames' element={<Home key="puzzleGames" URL = {(p)=> puzzleGamesURL(p)} title="Puzzel Games"/>}/>
                  <Route exact path='/genre/racingGames' element={<Home key="racingGames" URL = {(p)=> racingGamesURL(p)} title="Racing Games"/>}/>
                  <Route exact path='/genre/sportsGames' element={<Home key="sportsGames" URL = {(p)=> sportsGamesURL(p)} title="Sports Games"/>}/>
                  <Route exact path='/games/:id' element={<Detailpage/>}/>
                </Route>
              </Routes>
            </Suspense>
          </Router>
        </div>
    </>
    )
  }

