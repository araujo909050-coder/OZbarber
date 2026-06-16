import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#050505', 
      color: '#E0E0E0', 
      minHeight: '100vh', 
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      {/* Container do Logo Minimalista */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ 
          width: '90px', 
          height: '90px', 
          margin: '0 auto 1rem', 
          border: '2px solid #D4AF37', 
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#C0C0C0',
          boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)'
        }}>
          OZ
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '3px' }}>
          OZbarber
        </h1>
        <p style={{ color: '#A3A3A3', fontSize: '0.9rem', margin: 0, letterSpacing: '1px' }}>
          PREMIUM BARBER MANAGEMENT
        </p>
      </div>

      {/* Botões Estilo Metal Escuro */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.2rem', 
        width: '100%', 
        maxWidth: '350px'
      }}>
        
        <Link href="/servicos" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '1.1rem',
            backgroundColor: '#111111',
            color: '#FFFFFF',
            border: '1px solid #333333',
            borderRadius: '6px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
          }}>
            💈 Gerenciar Serviços
          </button>
        </Link>

        <Link href="/profissionais" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '1.1rem',
            backgroundColor: '#111111',
            color: '#FFFFFF',
            border: '1px solid #333333',
            borderRadius: '6px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
          }}>
            👥 Gerenciar Equipe
          </button>
        </Link>
      </div>
    </div>
  );
}
