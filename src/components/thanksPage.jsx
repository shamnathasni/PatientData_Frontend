import React, { useEffect } from "react";

const ThankYouPage = () => {
  useEffect(() => {
    // Ensure this is only called once the conversion is confirmed
    window.gtag('event', 'conversion', {
      send_to: 'AW-XXXXXXXXX/YOUR_CONVERSION_ID',
      value: 100.0, // Replace with the actual value
      currency: 'USD', // Replace with your currency
      transaction_id: 'TRANSACTION_ID' // Use a dynamic transaction ID
    });
  }, []);

  return (
    <div>
      <h1>Thank You for Your Purchase!</h1>
      {/* Other content */}
    </div>
  );
};

export default ThankYouPage;
