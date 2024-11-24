// WhiteListPage.js
import React from 'react';

const WhiteListPage = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="white-list-page" style={styles.container}>
      <div style={styles.content}>
        <button onClick={handleClose} style={styles.closeButton}>Close</button>
        <h1>White List</h1>
        <p>Here you can manage your white list.</p>
        {/* Add additional content or components related to the white list here */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  content: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'transparent',
    fontSize: '18px',
    cursor: 'pointer',
  }
};

export default WhiteListPage;
