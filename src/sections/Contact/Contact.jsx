import "./Contact.css";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
import {useTranslation} from 'react-i18next'

import Caontact from "../../assets/Services/اتصل بنا.webp";
export default function Contact() {
const [t] = useTranslation()

  return (
    <>
      <div className="container mb-5">
        <div className="Contact">
          <img src={Caontact} alt="" />
        </div>


        <form method="POST" action="https://formsubmit.co/contact@sawagroup.jp" encType="multipart/form-data">
        <label>{t("Name-form")}</label>
          <input type="text" name="user_name" required />
          <label>{t("Email-form")}</label>
          <input type="email" name="user_email" required/>
          <label>{t("Phone-form")}</label>
          <input type="number" name="user_number" required/>
          <label>{t("Textarea-form")}</label>
          <textarea name="message"></ textarea>
          <label>{t("File-form")}</label>
          <input type="file" name="attachment" accept="image/png, image/jpeg ,image/jpg ,.xlsx , .pdf ,.docx , .doc "  />
          <input type="submit" value={t("Send-form")} />
          <input type="hidden" name="_captcha" value="false" />
</form>
      </div>
    </>
  );
}
