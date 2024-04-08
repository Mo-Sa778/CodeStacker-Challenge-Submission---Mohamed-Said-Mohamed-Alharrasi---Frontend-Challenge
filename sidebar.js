import React from "react";
import { useState } from "react";
import HomeIcon from "./home.svg"
import costumizeLogo from "./costumize.png";
import evolutionLogo from "./pokemon (1).svg";
import moreOptionsIcon from "./moreOptionsIcon.svg";
import dashes from "./dashes.png"
import "./style.css";


const navItems = ["Home", "Costumize Your Page", "Pokemon's Evolution"];
const imgSrc = [HomeIcon, costumizeLogo, evolutionLogo]


export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <section className="page sidebar-2-page">
      <aside className={`sidebar-2 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button
              type="button"
              className="sidebar-2-burger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">
              <img src={isOpen ? dashes : moreOptionsIcon} alt="Burger icon" height={'35px'} width={'35px'} className="burger-icon" />
              </span>
            </button>
          </header>
          <nav>
            {navItems.map((item, index) => (
              <button key={item} type="button">
                {<span className="material-symbols-outlined"><img src={imgSrc[index]} height={'35px'} width={'35px'} id="items"/></span>}
                {item}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
 
};