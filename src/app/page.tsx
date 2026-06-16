import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#0a0a0a',
      // Fundo de tijolos escuros de barbearia antiga com iluminação focal centralizada super baixa
      backgroundImage: 'linear-gradient(to bottom, rgba(5, 5, 5, 0.88), rgba(12, 12, 12, 0.94)), url("https://images.unsplash.com/photo-1605497746444-ac9da5848af7?q=80&w=1200&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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
      
      {/* AREA DA LOGO OFICIAL IDENTICA À IMAGEM */}
      <div style={{ 
        width: '100%', 
        maxWidth: '650px', 
        textAlign: 'center', 
        marginBottom: '5rem',
        filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.95)) drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.6))'
      }}>
        
        <svg 
          viewBox="0 0 700 160" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto' }}
        >
          {/* Gradiente de Metal Escovado Realista */}
          <defs>
            <linearGradient id="metalEscovado3D" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#d6d6d6" />
              <stop offset="50%" stopColor="#7a7a7a" />
              <stop offset="75%" stopColor="#e3e3e3" />
              <stop offset="100%" stopColor="#3a3a3a" />
            </linearGradient>
          </defs>

          {/* ONDAS METALICAS DA MARCA */}
          {/* Onda Superior */}
          <path 
            d="M 65 67 C 110 52, 175 48, 212 78 C 224 88, 206 102, 218 108" 
            stroke="url(#metalEscovado3D)" 
            strokeWidth="6" 
            strokeLinecap="round" 
            fill="none" 
          />
          {/* Onda Inferior */}
          <path 
            d="M 112 114 C 150 134, 215 138, 265 118" 
            stroke="url(#metalEscovado3D)" 
            strokeWidth="6" 
            strokeLinecap="round" 
            fill="none" 
          />

          {/* TIPOGRAFIA EXATA DA IMAGEM */}
          <g stroke="url(#metalEscovado3D)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* O */}
            <path d="M 95 96 C 95 80, 120 80, 120 96 C 120 112, 95 112, 95 96 Z" strokeWidth="6" />
            
            {/* Z */}
            <path d="M 138 80 L 178 80 L 142 114 L 180 114" strokeWidth="6.5" />
            
            {/* B */}
            <path d="M 235 72 L 235 120 M 235 72 C 254 72, 256 94, 235 94 C 258 94, 256 120, 235 120" />
            
            {/* A */}
            <path d="M 270 120 L 282 72 L 294 120 M 274 104 L 290 104" />
            
            {/* R */}
            <path d="M 314 120 L 314 72 C 336 72, 336 96, 314 96 L 334 120 M 314 96 L 324 96" />
            
            {/* B */}
            <path d="M 355 72 L 355 120 M 355 72 C 374 72, 376 94, 355 94 C 378 94, 376 120, 355 120" />
            
            {/* E */}
            <path d="M 395 120 L 395 72 L 416 72 M 395 96 L 410 96 M 395 120 L 416 120" />
            
            {/* R */}
            <path d="M 435 120 L 435 72 C 457 72, 457 96, 435 96 L 455 120 M 435 96 L 445 96" />
          </g>
        </svg>

      </div>

      {/* BOTÕES ALTAMENTE SALTADOS, RESPONSIVOS E COM CONTORNO DOURADO */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.5rem', 
        width: '100%', 
        maxWidth: '380px',
        zIndex: 10
      }}>
        
        <Link href="/servicos" style={{ textDecoration: 'none', width: '100%' }}>
          <button style={{
            width: '100%',
            padding: '1.4rem 1rem',
            // Estrutura de chapa de ACM grafite que salta sobre o fundo
            background: 'linear-gradient(180deg, #242424 0%, #121212 100%)',
            border: '1px solid #383838',
            borderRadius: '8px', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // Empilhamento de sombras para o efeito saltado tridimensional agressivo
            boxShadow: `
              0 1px 0 #404040 inset,
              0 4px 0 #0d0d0d,
              0 12px 25px rgba(0, 0, 0, 0.75)
            `,
            transition: 'all 0.15s ease'
          }}>
            <span style={{
              fontSize: '0.95rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#FFFFFF',
              // Contorno dourado estrito nas letras para linkar com as outras páginas
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
            padding: '1.4rem 1rem',
            background: 'linear-gradient(180deg, #242424 0%, #121212 100%)',
            border: '1px solid #383838',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `
              0 1px 0 #404040 inset,
              0 4px 0 #0d0d0d,
              0 12px 25px rgba(0, 0, 0, 0.75)
            `,
            transition: 'all 0.15s ease'
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
