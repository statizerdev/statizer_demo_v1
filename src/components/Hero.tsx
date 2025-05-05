'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';


export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      style={{ textAlign: 'center', padding: '2rem 2rem' }}
    >
      <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Statizer</h1>
      <p style={{ fontSize: '1.25rem' }}>
        All your artist stats from Spotify, SoundCloud, and YouTube Music &ndash;
        <br />
        unified & simplified.
      </p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          marginTop: '2.5rem',
          fontSize: '1.2rem',
          color: '#fff'
        }}
      >
        🚀 Statizer platform is coming soon &ndash; stay tuned!
      </motion.p>

      {/* Spotify embed blokk */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '3rem',
          flexWrap: 'wrap'
        }}
      >
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/1IoKfWVyCoJD8gLmvpHRcH?"
          width="350"
          height="200"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/4QggHHgluGJ6oF2L47w3Bj?"
          width="350"
          height="200"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* "For more information" link */}
      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={handleModalToggle}
          style={{
            backgroundColor: '#4caf50', /* Zöld szín */
            color: '#fff',
            border: 'none',
            padding: '0.75rem 1rem', /* Nagyobb padding */
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4caf50')}
        >
          Click here for more information!
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflowY: 'auto'
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '1.5rem',
              maxWidth: '500px',
              height: '70vh',
              width: '100%',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              color: '#333',
              overflowY: 'auto'
            }}
          >
            <h3>Statizer Web App</h3>
            <p>Welcome to the Statizer Web App, the web-based version of the popular phone app Statizer, created by developer KILIAM and powered by Euphonix & INVIBES Recordings.</p>

            <h4>About Statizer</h4>
            <p>Statizer is a powerful tool designed for artists worldwide. It provides an easy and efficient way to track your performance across major digital streaming platforms. Whether you&apos;re an independent artist or part of a label, Statizer helps you stay informed about your streaming stats, empowering you to make data&ndash;driven decisions.</p>

            <h4>Early info about features</h4>
            <ul>
              <li>Comprehensive Stats: View your streaming data from platforms like Spotify, SoundCloud, Apple Music, and YouTube Music.</li>
              <li>Cross-Platform Access: Access your stats seamlessly from both the mobile app and the web app.</li>
              <li>User-Friendly Interface: Navigate through your data with an intuitive and clean design.</li>
            </ul>

            <h4>Powered By</h4>
            <p>Statizer is proudly powered by Euphonix & INVIBES Recordings, ensuring reliable and accurate data for artists.</p>

            <h4>Support</h4>
            <p>For any questions or support, please contact us at <a href="mailto:support@statizer.com">support@statizer.com</a></p>


            <button
              onClick={handleModalToggle}
              style={{
                backgroundColor: '#4caf50', /* Zöld szín */
                color: '#fff',
                border: 'none',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
}
