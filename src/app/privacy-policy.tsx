// app/privacy-policy.tsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Privacy Policy</h1>
      <p>We take your privacy seriously. Below is the summary of how we handle your personal data:</p>
      <h2>Data Collection</h2>
      <p>We collect email addresses when you sign up for our newsletter. This information will be used solely for the purpose of sending you updates and notifications related to Statizer.</p>
      
      <h2>Data Usage</h2>
      <p>Your email address will not be shared with third parties. We will store your data securely and only retain it as long as necessary.</p>

      <h2>Your Rights</h2>
      <p>You have the right to access, update, or delete your personal data at any time. Please contact us at <a href="mailto:support@statizer.com">support@statizer.com</a> for any data-related requests.</p>

      <h2>Contact</h2>
      <p>If you have any questions about our privacy practices, please reach out to us at <a href="mailto:support@statizer.com">support@statizer.com</a>.</p>
    </div>
  );
};

export default PrivacyPolicy;
