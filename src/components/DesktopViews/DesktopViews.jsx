import { useState } from 'react';

const DesktopViewButton = () => {
  const [desktopView, setDesktopView] = useState(false);

  const requestDesktopSite = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.match(/(iphone|ipod|ipad|android)/)) {
      const viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute('content', 'width=1024');
    //   window.location.reload();
    }
    setDesktopView(true);
  };

  return (
    <div>
      <button onClick={requestDesktopSite}>عرض سطح المكتب</button>
      {desktopView && <p>تم تفعيل عرض سطح المكتب</p>}
    </div>
  );
};

export default DesktopViewButton;
