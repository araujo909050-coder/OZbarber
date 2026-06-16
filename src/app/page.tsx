import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#050505',
      // Puxa a imagem da barbearia gótica enviada e adiciona uma camada escura para dar contraste
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(5, 5, 5, 0.85)), url("/fundo-barbearia.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#F5F5F5', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      overflowX: 'hidden'
    }}>
      
      {/* ESPAÇO DA LOGO PRINCIPAL UTILIZANDO O ARQUIVO REAL (logo-oz.png) */}
      <div style={{ 
        width: '100%', 
        maxWidth: '520px', 
        textAlign: 'center', 
        marginBottom: '4.5rem',
        padding: '0 1rem'
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/logo-oz.png" 
          alt="OZ Barber" 
          style={{ 
            width: '100%', 
            height: 'auto',
            objectFit: 'contain',
            // Sombra projetada para destacar a logo sobre a imagem de fundo
            filter: 'drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.95)) drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.8))'
          }} 
        />
      </div>

      {/* BOTÕES INICIAIS BEM SALTADOS E RESPONSIVOS COM CONTORNO DOURADO */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.6rem', 
        width: '100%', 
        maxWidth: '360px',
        zIndex: 10,
        padding: '0 1rem',
        boxSizing: 'border-box'
      }}>
        
        <Link href="/servicos" style={{ textDecoration: 'none', width: '100%' }}>
          <button style={{
            width: '100%',
            padding: '1.3rem 1rem',
            // Base em degradê grafite ultra-escuro para dar corpo tridimensional
            background: 'linear-gradient(180deg, #1f1f1f 0%, #0d0d0d 100%)',
            border: '1px solid #333333',
            borderRadius: '10px', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // Multi-camadas de sombras para fazer o botão saltar agressivamente da tela
            boxShadow: `
              0 2px 0 #3a3a3a inset,
              0 6px 0 #000000,
              0 14px 25px rgba(0, 0, 0, 0.85)
            `,
            transition: 'transform 0.1s ease, box-shadow 0.1s ease'
          }}>
            <span style={{
              fontSize: '0.95rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#FFFFFF',
              // Contorno dourado nas letras para conversar com as páginas internas
              textShadow: `
                -1px -1px 0 #D4AF37,  
                 1px -1px 0 #D4AF37,
                -1px  1px 0 #D4AF37,
                 1px  1px 0 #D4AF37
              `
            }}>
              Gerenciar Serviços
            </span>
          </button>
        </Link>

        <Link href="/profissionais" style={{ textDecoration: 'none', width: '100%' }}>
          <button style={{
            width: '100%',
            padding: '1.3rem 1rem',
            background: 'linear-gradient(180deg, #1f1f1f 0%, #0d0d0d 100%)',
            border: '1px solid #333333',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `
              0 2px 0 #3a3a3a inset,
              0 6px 0 #000000,
              0 14px 25px rgba(0, 0, 0, 0.85)
            `,
            transition: 'transform 0.1s ease, box-shadow 0.1s ease'
          }}>
            <span style={{
              fontSize: '0.95rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#FFFFFF',
              // Contorno dourado nas letras
              textShadow: `
                -1px -1px 0 #D4AF37,  
                 1px -1px 0 #D4AF37,
                -1px  1px 0 #D4AF37,
                 1px  1px 0 #D4AF37
              `
            }}>
              Gerenciar Equipe
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
