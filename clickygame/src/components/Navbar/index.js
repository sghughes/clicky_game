import React from 'react';
import './style.css';


function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand" href="#">Clicky Game</div>
            <div className="navbar-brand" href="#">{props.status}</div>
            <div className="navbar-brand" href="#">Score: { props.score } | Top Score: {props.topScore} </div>
        </nav>
    );
  }

    export default Navbar;