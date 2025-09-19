import React from 'react';

const LogoUpload = () => {
  return (
    <div style={{
      border: '2px solid #d9d9d9',
      borderRadius: '8px',
      height: '150px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      backgroundColor: '#fafafa',
      cursor: 'pointer'
    }}>
      <div style={{
        fontSize: '24px',
        color: '#999',
        marginBottom: '8px'
      }}>
        📁
      </div>
      <span style={{ color: '#999', fontSize: '14px' }}>Logo</span>
    </div>
  );
};

export default LogoUpload;