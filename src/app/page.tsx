import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      position: 'relative',
      minHeight: '100vh',
      fontFamily: '"Montserrat", "Helvetica Neue", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
      overflowX: 'hidden',
      color: '#E5E5E5'
    }}>

      {/* FUNDO GÓTICO */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.95)),
          url('/bg-barbearia.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'contrast(1.1) brightness(0.6)',
        zIndex: 0
      }} />

      {/* CONTEÚDO */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* LOGO EM IMAGEM */}
        <div style={{ 
          width: '100%', 
          maxWidth: '420px', 
          marginBottom: '4rem',
          textAlign: 'center'
        }}>
          <img 
            src="/logo-ozbarber.png"
            alt="OZBarber Logo"
            style={{
              width: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0px 15px 25px rgba(0,0,0,0.9))'
            }}
          />
        </div>

        {/* BOTÕES */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.2rem', 
          width: '100%', 
          maxWidth: '360px'
        }}>
          
          <Link href="/servicos" style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              padding: '1.2rem',
              backgroundColor: 'rgba(18, 18, 18, 0.6)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '4px', 
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s ease'
            }}>
              Gerenciar Serviços
            </button>
          </Link>

          <Link href="/profissionais" style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              padding: '1.2rem',
              backgroundColor: 'rgba(18, 18, 18, 0.6)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s ease'
            }}>
              Gerenciar Equipe
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
