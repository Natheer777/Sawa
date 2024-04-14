import './Vision.css'
import { useTranslation } from 'react-i18next'
import VisionImg from '../../assets/Services/img2.webp'
import { PiTargetBold } from "react-icons/pi";


export default function Vision() {

    const [t] = useTranslation() 

  return (
    <>
    
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="vision-title right">{t("Vision-h")} <PiTargetBold /></h2>
          <p className="vision-details right">{t("Vision-p")}</p>
        </div>
        <div className="col-lg-6">
          <img className="vision-img left" src={VisionImg} alt="" />
        </div>
      </div>
    </div>
    
    </>
  )
}
