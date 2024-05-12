import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/Logo/سوىAI-01 (1).webp';
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import {  GrServices } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { LuLanguages } from "react-icons/lu";
import "./Navbar.css"
export default function Navbar() {
  const { t, i18n } = useTranslation(); // Destructure t (translate function) and i18n (i18next instance)

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Function to change the language using i18n instance
  };

  return (
    <div className="container">
      <div className="title container">
        <ul>
          <li>
            <h1 className="left">{t('Header-h')}</h1>
          </li>
          <li className="diffrint" lang={i18n.language}>{t('Header-p')}</li>
          <li>
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="" />
            </a>
          </li>
        </ul>
        <p className="mt-3 m-0">
          <div className="typing-demo">
            <h5 lang={i18n.language}>
              {t('Main')}
            </h5>
          </div>
        </p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light mt-4">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active item1">
              <a className="nav-link" href="#">
                <FaHome /> {t('Navbar-Home')}
              </a>
            </li>
            <li className="nav-item item2">
              <a className="nav-link" href="#about">
                <IoPerson /> {t('Navbar-about')}
              </a>
            </li>
            <li className="nav-item item3">
              <a className="nav-link" href="#Services">
                <GrServices /> {t('Navbar-Services')}
              </a>
            </li>
            <li className="nav-item item4">
              <a className="nav-link" href="#Contact">
                <FaPhoneAlt /> {t('Navbar-contact')}
              </a>
            </li>
            <li className="nav-item dropdown item5">
              <a
                className="nav-link dropdown-toggle fs-5"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              <LuLanguages />  {/* {t('Navbar-languages')} */}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a
                  className="dropdown-item"
                  onClick={() => changeLanguage('ja')}
                  href="#"
                >
                  日本語
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => changeLanguage('en')}
                  href="#"
                >
                  English
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => changeLanguage('ar')}
                  href="#"
                >
                  العربية
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
