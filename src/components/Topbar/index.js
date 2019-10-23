import React from "react";

import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div className="toopbar sticky-top">
      <div className="nav-top">
        <ul className="nav  justify-content-end mr-5">
          <li className="nav-item">
            <Link href="" className="nav-link d-inline-block text-danger">
              Home
            </Link>
            <Link href="#" className="nav-link d-inline-block text-dark">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Topbar;
