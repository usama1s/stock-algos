import React from "react";
import logo from "../assets/images/logo.png";

const toggleMenu=()=> {
  alert("fdas");
}

const Navigation = () => {
  return (
    <header>
      <nav id="nav">
        <a class="logo">
          <img src={logo} alt="nav-logo" />
        </a>

        <button onClick={()=>document.getElementById("nav").classList.toggle("active")} class="menu-toggle">
          <span> </span>
          <span> </span>
          <span> </span>
        </button>

        <ul>
          <li>
            <a class="product-btn">
              <span>P</span>
              <div>
                <p>#2 PRODUCT OF THE WEEK</p>
                <b>Fintech</b>
              </div>
            </a>
          </li>
          <li>
            <a class="violet-btn"> Try at $0 for 7 days </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
