import "./Typing.css";
import { LuHeartHandshake } from "react-icons/lu";
import { useTranslation } from "react-i18next";
export default function Typing() {
  const [t] = useTranslation();
  return (
    <>
      <div className="container">
        <div>
          <div className="typing-demo">
            <LuHeartHandshake /> {t("Main")}
          </div>
        </div>
      </div>
    </>
  );
}
