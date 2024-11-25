import React, { useEffect } from "react";

const ThankYouPage = () => {
  useEffect(() => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16777200397');
  gtag('event', 'conversion', {'send_to': 'AW-16777200397/JOKwCI3bxu4ZEI2G_78-'});

  }, []);

  return (
    <div>
      <h1>Thank You for Your Purchase!</h1>
      {/* Other content */}
    </div>
  );
};

export default ThankYouPage;
