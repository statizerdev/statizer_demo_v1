'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';


export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setSubmitting(true);

    // Ha az email üres, üzenet megjelenítése
    if (!email.trim()) {
      setMessage('Please enter your email!');
      setSubmitting(false);
      return;
    }

    // Feliratkozás küldése a Formspree-ra
    try {
      const response = await fetch('https://formspree.io/f/mrbpnjqr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage('Thank you!');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setMessage('Network error. Please try again.');
    }

    setSubmitting(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ textAlign: 'center', padding: '0.25rem' }}
    >
      <h3 style={{ fontSize: '1.2rem' }}>📩 Sign up to get notified when we launch</h3>
      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '0.6rem',
            width: '250px',
            borderRadius: '8px',
            border: 'none',
            background: '#fff',
            color: '#000',
          }}
        />
        <button
          type="submit"
          disabled={submitting}
          style={{
            padding: '0.6rem 1.2rem',
            backgroundColor: '#58a6ff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#4096e0')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#58a6ff')}
        >
          {submitting ? 'Sending...' : 'Notify Me'}
        </button>

        <label>
        <input type="checkbox" required />
          I agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a>
        </label>

        {message && (
          <span style={{ marginLeft: '0.5rem', color: 'lime', fontWeight: 'bold' }}>
            {message}
          </span>
        )}
      </form>
    </motion.section>
  );
}
