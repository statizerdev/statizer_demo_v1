import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{
      padding: '0',
      textAlign: 'center',
      background: 'url("/bg01.jpg") no-repeat center center fixed',
      backgroundSize: 'cover',
      color: 'white',  // A szöveg fehér lesz
      height: '100vh',  // A teljes magasságot kitölti
      margin: '0',  // Ne legyen margó
    }}>
      <h1>Privacy Policy</h1>
      <p>Your privacy is very important to us. We respect your privacy and are committed to protecting your personal data.</p>
      <h2>Information Collection</h2>
      <p>We collect email addresses to send you notifications. We do not share your data with third parties.</p>
      <h2>Data Protection</h2>
      <p>We ensure that your data is securely stored and handled in compliance with the GDPR regulations.</p>
      <h2>Your Rights</h2>
      <p>You have the right to access, correct, and delete your personal data. If you want to exercise these rights, please contact us.</p>
      <p>For more details, please contact support@statizer.com</p>
    </div>
  );
};

export default PrivacyPolicy;
