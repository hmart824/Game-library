import React, { Component } from 'react'
import './Navbar.css';
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    let {setSearch} = this.props;
    return (
      <>
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
                    Platforms
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/">Pc</Link></li>
                    <li><Link className="dropdown-item" to="/">Play Station</Link></li>
                    <li><Link className="dropdown-item" to="/">Xbox One</Link></li>
                    <li><Link className="dropdown-item" to="/">Ios</Link></li>
                    <li><Link className="dropdown-item" to="/">Android</Link></li>
                  </ul>
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
              </ul>
              
              <div className=" nav-end-item d-flex">
                <button type="button" className="btn btn-outline-success btn-sm btn-style" style={{"marginRight":".5rem"}}>signIn</button>
                <button type="button" className="btn btn-outline-success btn-sm btn-style">signUp</button>
              </div>  
              
            </div>
              <div className="search-icon " onClick={()=>{setSearch()}}>
                  <BiSearch/>
              </div>
          </div>
        </nav>

      </>
    )
  }
}
