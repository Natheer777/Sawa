import "./About.css"
// import AboutImg from '../../assets/Services/img4.webp'
// import { IoPerson } from "react-icons/io5";


import {useTranslation} from 'react-i18next'
export default function About() {
  const [t] = useTranslation()
  return (
    <>
    <div className="container mt-4 mb-5 text-container" id="about">
      <div className="row">
        <div className="col-lg-12 text-container">
          <h2 className="about-title right">{t("About-h")}</h2>
          <p className="about-details right">{t("About-p")}</p>           
       
        </div>
        {/* <div className="col-lg-6">
          <img className="about-img left" src={AboutImg} alt="" />
        </div> */}
      </div>
    </div>
    </>
  )
}
