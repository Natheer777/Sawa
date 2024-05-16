import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DesktopViewButton = () => {
  const [t] = useTranslation();
  const [desktopView, setDesktopView] = useState(false);

  const requestDesktopSite = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.match(/(iphone|ipod|ipad|android)/)) {
      const viewport = document.querySelector("meta[name=viewport]");
      if (viewport) {
        viewport.setAttribute('content', 'width=1024');
      }
    }
    setDesktopView(true);
  };

  return (
    <div>
      <button className='DesktopView m-1' onClick={requestDesktopSite}>{t("desktop")}</button>
    </div>
  );
};

export default DesktopViewButton;
