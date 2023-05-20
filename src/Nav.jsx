import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const key_1 = [1, 2, 3];
  return (
    <div>
      <nav>
        <ul className="nav-list" key={key_1}>
          <li>BLOG</li>
          <li>CONTACT US</li>
          <li>SERVICE</li>
          <li>ABOUT US</li>
          <li>HOME</li>
          <Button>This is a button</Button>
          <FontAwesomeIcon icon={faEnvelope} />
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
