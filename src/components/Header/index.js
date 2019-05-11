import React from "react";
import Message from "../Message"
import "./style.css";

const Header = props => {
  return (
    <nav className="navbar">
      <ul>
        <li className="itemLeft">
          <a href="/">Llama Drama</a>
        </li>
        <li className="itemCenter">
        <Message score={props.score} topScore={props.topScore} />
        </li>
        <li className="itemRight">
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
