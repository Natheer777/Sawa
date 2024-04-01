import "./Navbar.css";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/Logo/سوىAI-01 (1).webp";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { LuLanguages } from "react-icons/lu";



export default function Navbar() {
  const [t, i18n] = useTranslation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand  ms-3 me-3" href="#">
            <img src={Logo} alt="" />
          </a>
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
          <div
            className="collapse navbar-collapse justify-content-end me-3"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item active item1 hidden">
                <a className="nav-link" href="#">
                  <FaHome />{t("Navbar-Home")}
                  <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item item2 hidden">
                <a className="nav-link" href="#about">
               <IoPerson />   {t("Navbar-about")}
                </a>
              </li>
              <li className="nav-item item3 hidden">
                <a className="nav-link" href="#Services">
              <MdDesignServices />    {t("Navbar-Services")}
                </a>
              </li>
              <li className="nav-item item4 hidden">
                <a className="nav-link" href="#Contact">
               <FaPhoneAlt />   {t("Navbar-contact")}
                </a>
              </li>
              <li className="nav-item dropdown item5 hidden">
                <a
                  className="nav-link dropdown-toggle fs-5"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                <LuLanguages />{/* {t("Navbar-languages")} */}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    onClick={() => {
                      i18n.changeLanguage("ar");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    العربية
                  </a>
                  <a
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    ُEnglish
                  </a>
                  <a
                    onClick={() => {
                      i18n.changeLanguage("jp");
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    日本語
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
