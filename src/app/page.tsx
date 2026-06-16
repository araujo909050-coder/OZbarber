import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#0c0c0c',
      // Fundo premium simulando a textura e iluminação estúdio da foto original
      backgroundImage: 'radial-gradient(circle at 50% 45%, #222222 0%, #0a0a0a 75%)',
      color: '#E5E5E5', 
      minHeight: '100vh', 
      fontFamily: '"Montserrat", "Helvetica Neue", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
      overflowX: 'hidden'
    }}>
      
      {/* AREA DO LETREIRO DIGITAL BASEADO NA FOTO (image_eaa609.png) */}
      <div style={{ 
        width: '100%', 
        maxWidth: '550px', 
        textAlign: 'center', 
        marginBottom: '4.5rem',
        position: 'relative',
        padding: '2rem 0'
      }}>
        
        {/* ONDA FLUIDA SUPERIOR (Efeito Metal Líquido) */}
        <div style={{
          position: 'absolute',
          top: '0px',
          left: '10%',
          width: '55%',
          height: '25px',
          borderTop: '5px solid #ffffff',
          borderRadius: '50% 50% 0 0',
          transform: 'rotate(-4deg)',
          filter: 'blur(0.5px) drop-shadow(0px 6px 4px rgba(0,0,0,0.9))',
          // Gradiente metálico na borda superior
          borderImage: 'linear-gradient(to right, #737373, #ffffff, #a3a3a3, #ffffff, #525252) 1'
        }} />

        {/* LOGO TEXTUAL "OZbarber" EM METAL 3D */}
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '800', 
          margin: 0, 
          textTransform: 'uppercase', 
          letterSpacing: '2px',
          fontStyle: 'italic', // Curvatura elegante inspirada na marca
          // Gradiente de reflexo metálico vertical idêntico ao aço escovado
          background: 'linear-gradient(to bottom, #ffffff 0%, #d4d4d4 25%, #737373 50%, #ffffff 75%, #404040 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          // Profundidade e sombra projetada realística na parede escura
          filter: `
            drop-shadow(0px 2px 1px rgba(255,255,255,0.4)) 
            drop-shadow(0px 12px 15px rgba(0,0,0,0.95)) 
            drop-shadow(0px 4px 6px rgba(0,0,0,0.6))
          `
        }}>
          OZbarber
        </h1>

        {/* ONDA FLUIDA INFERIOR (Envolvendo o texto por baixo) */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '15%',
          width: '60%',
          height: '30px',
          borderBottom: '5px solid #ffffff',
          borderRadius: '0 0 50% 50%',
          transform: 'rotate(-2deg)',
          filter: 'blur(0.5px) drop-shadow(0px 8px 5px rgba(0,0,0,0.9))',
          borderImage: 'linear-gradient(to right, #525252, #ffffff, #737373, #ffffff, #909090) 1'
        }} />
        
      </div>

      {/* BOTÕES MINIMALISTAS - ESTILO PLATAFORMA DE ELITE (FRESHA) */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.2rem', 
        width: '100%', 
        maxWidth: '360px',
        zIndex: 10
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
  );
}
