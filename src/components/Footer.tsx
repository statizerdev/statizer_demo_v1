'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{
        textAlign: 'center',
        padding: '2rem',
        fontSize: '0.9rem',
      }}
    >
      <p>© {new Date().getFullYear()} Statizer. Powered by Euphonix & INVIBES Recordings.</p>
      <div
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'nowrap',
        }}
      >
        <a
          href="https://linktr.ee/euphonixrecordings"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/euphonix_128.png"
            alt="Euphonix Logo"
            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
          />
        </a>
        <a
          href="https://linktr.ee/invibesrec"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/invibes_128.png"
            alt="INVIBES Logo"
            style={{ width: '48px', height: '48px', objectFit: 'contain' }}
          />
        </a>
      </div>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" required style={{ marginRight: '0.5rem' }} />
          I agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a>
      </label>
    </motion.footer>
  );
}
