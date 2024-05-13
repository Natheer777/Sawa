import './Vision.css'
import { useTranslation } from 'react-i18next'
// import VisionImg from '../../assets/Services/img2.webp'
// import { PiTargetBold } from "react-icons/pi";


export default function Vision() {

    const [t , i18n] = useTranslation() 

  return (
    <>
    
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-container">
          <h2 className="vision-title right">{t("Vision-h")}</h2>
          <p className="vision-details right" lang={i18n.language}>{t("Vision-p")}</p>
        </div>
        {/* <div className="col-lg-6">
          <img className="vision-img left" src={VisionImg} alt="" />
        </div> */}
      </div>
    </div>
    
    </>
  )
}
