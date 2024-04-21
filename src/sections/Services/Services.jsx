import "./Services.css";
import Data from "../../Data/Card_Services";
import { Card_Services } from "../../components/index";
import { useTranslation } from "react-i18next";
import { GrServices } from "react-icons/gr";

export default function Services() {
  const [t] = useTranslation();

  const card = Data.map((card) => {
    return <Card_Services key={card.id} image={card.Image} />;
  });
  return (
    <>
      <div className="container" id="Services">
        <div className="row rowServices ">
          <div className="MainTitle">
            <h2 className="hidden ">
              {t("Services-h")} <GrServices />
            </h2>
          </div>
          <div className="CaRd">
            <div className="serv1 top">
              {card[0]} <h4>{t("Services-card1T")}</h4>{" "}
              <p>{t("Services-card1")}</p>
            </div>
            <div className="serv2 top">
              {card[1]} <h4>{t("Services-card2T")}</h4>{" "}
              <p>{t("Services-card2")}</p>
            </div>
            <div className="serv3 top">
              {card[2]} <h4>{t("Services-card3T")}</h4>{" "}
              <p>{t("Services-card3")}</p>
            </div>
            <div className="serv4 top">
              {card[3]} <h4>{t("Services-card4T")}</h4>{" "}
              <p>{t("Services-card4")}</p>
            </div>
            <div className="serv5 top">
              {card[4]} <h4>{t("Services-card5T")}</h4>{" "}
              <p>{t("Services-card5")}</p>
            </div>
            <div className="serv6 top">
              {card[5]} <h4>{t("Services-card6T")}</h4>{" "}
              <p>{t("Services-card6")}</p>
            </div>
            <div className="serv7 top">
              {card[6]} <h4>{t("Services-card7T")}</h4>{" "}
              <p>{t("Services-card7")}</p>
            </div>
            <div className="serv8 top">
              {card[7]} <h4>{t("Services-card8T")}</h4>{" "}
              <p>{t("Services-card8")}</p>
            </div>
            <div className="serv9 top">
              {card[8]} <h4>{t("Services-card9T")}</h4>{" "}
              <p>{t("Services-card9")}</p>
            </div>
            <div className="serv10 top">
              {card[9]} <h4>{t("Services-card10T")}</h4>{" "}
              <p>{t("Services-card10")}</p>
            </div>
            <div className="serv11 top">
              {card[10]}
              <h4>{t("Services-card11T")}</h4> <p>{t("Services-card11")}</p>
            </div>
            <div className="serv12 top">
              {card[11]}
              <h4>{t("Services-card12T")}</h4> <p>{t("Services-card12")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
