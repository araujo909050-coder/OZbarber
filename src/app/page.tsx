import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#0c0c0c',
      // Fundo premium de parede preta texturizada com iluminação centralizada discreta
      backgroundImage: 'radial-gradient(circle at 50% 45%, #1a1a1a 0%, #080808 80%)',
      color: '#E5E5E5', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
      overflowX: 'hidden'
    }}>
      
      {/* CONTAINER PRINCIPAL DA LOGO OFICIAL 3D (Baseada em image_eaa609.png) */}
      <div style={{ 
        width: '100%', 
        maxWidth: '480px', 
        textAlign: 'center', 
        marginBottom: '5rem',
        position: 'relative'
      }}>
        
        {/* Vetorização Premium da Identidade Visual OZ BARBEARIA */}
        <div style={{ 
          width: '100%', 
          height: 'auto',
          padding: '0 10px',
          marginBottom: '1rem',
          // Filtro para dar profundidade tridimensional severa nas letras metálicas
          filter: 'drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.85)) drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.5))'
        }}>
          <svg 
            viewBox="0 0 450 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: 'auto' }}
          >
            {/* Definição do Gradiente Metálico Escovado/Cromado */}
            <defs>
              <linearGradient id="metalCromado" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8a8a8a" />
                <stop offset="20%" stopColor="#e5e5e5" />
                <stop offset="40%" stopColor="#737373" />
                <stop offset="60%" stopColor="#ffffff" />
                <stop offset="80%" stopColor="#525252" />
                <stop offset="100%" stopColor="#b3b3b3" />
              </linearGradient>
            </defs>

            {/* ONDAS FLUIDAS DO 'Z' QUE ENVOLVEM A LOGO */}
            {/* Onda Superior */}
            <path 
              d="M 16 46 C 45 35, 75 30, 95 48 C 110 62, 90 85, 115 65" 
              stroke="url(#metalCromado)" 
              strokeWidth="4.5" 
              strokeLinecap="round" 
              fill="none" 
            />
            {/* Onda Inferior */}
            <path 
              d="M 45 80 C 70 95, 110 98, 140 85" 
              stroke="url(#metalCromado)" 
              strokeWidth="4.5" 
              strokeLinecap="round" 
              fill="none" 
            />

            {/* LETRAS MANUSCRITAS ESTILIZADAS - MODELO REAL */}
            <g stroke="url(#metalCromado)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* O */}
              <path d="M 24 67 C 24 55, 42 55, 42 67 C 42 79, 24 79, 24 67 Z" strokeWidth="4.5" />
              
              {/* Z */}
              <path d="M 52 56 L 78 56 L 54 82 L 80 82" strokeWidth="5" />
              
              {/* B */}
              <path d="M 112 48 L 112 84 M 112 48 C 124 48, 126 64, 112 64 C 128 64, 126 84, 112 84" />
              
              {/* A */}
              <path d="M 134 84 L 142 52 L 150 84 M 136 72 L 148 72" />
              
              {/* R */}
              <path d="M 162 84 L 162 52 C 176 52, 176 68, 162 68 L 175 84 M 162 68 L 170 68" />
              
              {/* B */}
              <path d="M 188 52 L 188 84 M 188 52 C 198 52, 200 66, 188 66 C 202 66, 200 84, 188 84" />
              
              {/* E */}
              <path d="M 212 84 L 212 52 L 226 52 M 212 68 L 222 68 M 212 84 L 226 84" />
              
              {/* A */}
              <path d="M 238 84 L 246 52 L 254 84 M 240 72 L 252 72" />
              
              {/* R */}
              <path d="M 266 84 L 266 52 C 280 52, 280 68, 266 68 L 279 84" />
              
              {/* I */}
              <path d="M 294 52 L 294 84 M 288 52 L 300 52 M 288 84 L 300 84" />
              
              {/* A */}
              <path d="M 312 84 L 320 52 L 328 84 M 314 72 L 326 72" />
            </g>
          </svg>
        </div>
      </div>

      {/* BOTÕES MINIMALISTAS DE ALTA CLASSE (ESTILO FRESHA PREMIUM) */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.2rem', 
        width: '100%', 
        maxWidth: '350px',
        position: 'relative',
        zIndex: 10
      }}>
        
        <Link href="/servicos" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '1.2rem',
            // Botão preto ultra-fosco que se mistura elegantemente ao fundo gótico
            backgroundColor: 'rgba(20, 20, 20, 0.4)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px', 
            fontSize: '0.85rem',
            fontWeight: '600',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
            backdropFilter: 'blur(5px)',
            transition: 'all 0.3s ease'
          }}>
            Gerenciar Serviços
          </button>
        </Link>

        <Link href="/profissionais" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '1.2rem',
            backgroundColor: 'rgba(20, 20, 20, 0.4)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: '600',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
            backdropFilter: 'blur(5px)',
            transition: 'all 0.3s ease'
          }}>
            Gerenciar Equipe
          </button>
        </Link>
      </div>
    </div>
  );
}
