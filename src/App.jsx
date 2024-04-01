import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Home } from "./pages/index";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { PiArrowBendLeftUpBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../src/assets/Logo/سوىAI-01 (1).webp";
const languages = [
  {
    code: "jp",
    name: "japanis",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

function App() {
  const [t] = useTranslation();
  const [lan, setLan] = useState(navigator.language);
  useEffect(() => {
    setLan(navigator.language);
    i18next.changeLanguage(lan);
    if (!i18next.languages.includes(lan)) {
      i18next.changeLanguage("en");
    } else {
      i18next.changeLanguage(lan);
    }
  }, [lan]);

  ///////////////////////////////
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  // const [t] = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  /////////////////////////////////////////////
  useEffect(() => {
    setInterval(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });

      const leftElements = document.querySelectorAll(".left");
      const rightElements = document.querySelectorAll(".right");
      const hiddenElements = document.querySelectorAll(".hidden");
      const topElements = document.querySelectorAll(".top");
      leftElements.forEach((el) => observer.observe(el));
      rightElements.forEach((el) => observer.observe(el));
      hiddenElements.forEach((el) => observer.observe(el));
      topElements.forEach((el) => observer.observe(el));

      return () => {
        leftElements.forEach((el) => observer.unobserve(el));
        rightElements.forEach((el) => observer.unobserve(el));
        hiddenElements.forEach((el) => observer.unobserve(el));
        topElements.forEach((el) => observer.unobserve(el));
      };
    });
  }, []);

  //////////////////////////////////////////
  useEffect(() => {
    const up = document.querySelectorAll(".social");

    const handleScroll = () => {
      window.scrollY >= 150
        ? up.forEach((item) => item.classList.add("look"))
        : up.forEach((item) => item.classList.remove("look"));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /////////////////////////////////
  useEffect(() => {
    const up = document.querySelectorAll(".up");

    const handleScroll = () => {
      window.scrollY >= 150
        ? up.forEach((item) => item.classList.add("look"))
        : up.forEach((item) => item.classList.remove("look"));
    };

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", handleScroll);
    up.forEach((item) => item.addEventListener("click", handleScrollToTop));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      up.forEach((item) =>
        item.removeEventListener("click", handleScrollToTop)
      );
    };
  }, []);

  ////////////////////////////////////

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <div className="social">
        <ul>
          <li>
            <a href="https://wa.link/mr0gya">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a href="mailto:contact@sawagroup.jp">
              <MdEmail />
            </a>
          </li>
          <li>
            <a href="https://line.me/ti/p/IuAqVt59QV">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                fill="currentColor"
                className="bi bi-line"
                viewBox="0 0 16 16"
              >
                <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0M5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.15.15 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157m.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832l-.013-.015v-.001l-.01-.01-.003-.003-.011-.009h-.001L7.88 4.79l-.003-.002-.005-.003-.008-.005h-.002l-.003-.002-.01-.004-.004-.002-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.2.2 0 0 0 .039.038l.001.001.01.006.004.002.008.004.007.003.005.002.01.003h.003a.2.2 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.16.16 0 0 0-.108.044h-.001l-.001.002-.002.003a.16.16 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.16.16 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <button className="up">
        <PiArrowBendLeftUpBold />
      </button>
      {loading ? (
        <img className="Loading" src={Logo} alt="" />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path= "/" element={<Home/>}/>
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
