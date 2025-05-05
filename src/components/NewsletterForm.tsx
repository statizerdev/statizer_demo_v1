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
      {/* A formot innen eltávolítjuk, mert a Hero.tsx-ban már benne van */}
    </motion.section>
  );
}
