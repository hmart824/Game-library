import React, { createContext } from 'react';
import { useState } from 'react';
import {auth} from '../Firebase';
import './Navbar.css';
import Search from './Search';
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';

const searchVal = createContext();
export default function Navbar(props) {
  const [search, setSearch] = useState(false);
  const toggle = ()=>{
    setSearch(!search);
  }

  const signOut = ()=>{
    auth.signOut()
    .then(()=>{
      console.log('signed out successfully');
      props.setUser(null);
    })
    .catch((err)=>{alert(err.message)})
  }
  
    return (
      <>
        {search &&
        <searchVal.Provider value={setSearch}>
          <Search/>
        </searchVal.Provider>}
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <span className="navbar-brand" to="/" style={{"fontSize": "1.5rem" , "cursor" : "default"}}>Pc<span className='text-danger' style={{"fontSize": "1.2rem"}}>World</span></span>
          
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
           
            
            <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/newreleased">New Released</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/upcoming">Up Comings</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bestgames">Best Of All Time</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Genres
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/genre/actionGames">Action</Link></li>
                    <li><Link className="dropdown-item" to="/genre/strategyGames">Strategy</Link></li>
                    <li><Link className="dropdown-item" to="/genre/rolePlayingGames">Rpg</Link></li>
                    <li><Link className="dropdown-item" to="/genre/shooterGames">Shooter</Link></li>
                    <li><Link className="dropdown-item" to="/genre/adventureGames">Adventure</Link></li>
                    <li><Link className="dropdown-item" to="/genre/puzzleGames">Puzzle</Link></li>
                    <li><Link className="dropdown-item" to="/genre/racingGames">Racing</Link></li>
                    <li><Link className="dropdown-item" to="/genre/sportsGames">Sports</Link></li>
                  </ul>
                </li>
                {props.currentUser && <li className="nav-item">
                  <Link className="nav-link" to="/library">Library</Link>
                </li>}
              </ul>
              
              <div className=" nav-end-item d-flex">
                {!props.currentUser && (<><button type="button" className="btn btn-outline-success btn-sm btn-style" style={{ "marginRight": ".5rem" }}><Link to="/login">signIn</Link></button><button type="button" className="btn btn-outline-success btn-sm btn-style"><Link to="/login">signUp</Link></button></>)
                }
                
              </div>  
              
            </div>
            {props.currentUser &&
                  (<div className="avatar">
                    <img src={props.currentUser.photoURL} alt="" onClick={signOut}/>
                  </div>)
                  
                }
              <div className="search-icon" onClick={toggle}>
                  <BiSearch/>
              </div>
          </div>
        </nav>

      </>
    )
  }
export {searchVal};
