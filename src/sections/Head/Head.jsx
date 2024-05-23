import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
export default function Head() {
  const [t] = useTranslation();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta
            name="keywords"
            content="
        الاستيراد و التصدير,
        الترجمة و التدقيق,
        تخطيط و إعداد التقارير الإخبارية,
        تعليم اللغتين العربية و اليابانية,
        التصميم و البرمجة,
        تقديم الاستشارات الدراسية و الثقافية,
        دعم التبادل العلمي و الثقافي,
        تقديم الاستشارت الاستثمارية و التجارية,
        اعمال النشر المكتبي (DTP),
        دعم إضافة اللغات الى مواقع الويب,
        تسجيل الاصوات و تفريغها,
        تخطيط و اعداد الجولات السياحية,
  
        Import & Export,
        Translation & Proofreading,
        Planning and preparing news reports,
        Teaching Arabic and Japanese,
        Design & Programming,
        Providing study and cultural consultations,
        Supporting scientific and cultural exchange,
        Providing investment and commercial advice,
        Office Publishing (DTP),
        Support for adding languages to websites,
        Recording and unloading sounds,
        Planning and preparing tours,

        輸入及び輸出    ,
        翻訳及び校正,
        ニュースレポートの企画及び制作,
        アラビア語・日本語教育,
        デザイン及びプログラミング,
        観光ツアーの企画及び準備,
        学術及び文化に関するコンサルティングの提供,
        投資及びビジネスに関するコンサルティングの提供,
        デスクトップパブリッシング（ＤＴＰ）,
        ウェブサイトへの言語の追加,
        音声録音及び文字起こし,
        学術及び文化交流支援,      
        "
          />
          <title>{t("title")}</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
}
