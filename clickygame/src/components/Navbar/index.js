import React from 'react';
import './style.css';

// class Counter extends React.Component {
//     state= {
//         count: 0
//     }
// };

// handleIncrement = () => {
//     this.ListeningStateChangedEvent({ count: this.state.count + 1});
// };

function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand" href="#">Clicky Game</div>
            <div className="navbar-brand" href="#">{props.status}</div>
            <div className="navbar-brand" href="#">Score: { props.score } | Top Score: {props.topScore} </div>
        </nav>
    );
  }
// fix navbar dynamic
    export default Navbar;