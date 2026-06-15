import React from 'react';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#0A0A0A', 
      color: '#FFFFFF', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '0.5rem' }}>
        OZbarber
      </h1>
      <p style={{ color: '#737373', fontSize: '1.2rem' }}>
        Agendamento Online & Gestão Premium
      </p>
    </div>
  );
}
