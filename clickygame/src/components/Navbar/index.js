import React from 'react';
import './style.css';

function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand" href="#">Clicky Game</div>
            <div className="navbar-brand" href="#">Click an image to begin!</div>
            <div className="navbar-brand" href="#">Score: 0 | Top Score: 0</div>
        </nav>
    );
  }

    export default Navbar;