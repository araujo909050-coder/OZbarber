import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#050505',
      backgroundImage: 'linear-gradient(to bottom, rgba(3, 3, 3, 0.88), rgba(8, 8, 8, 0.96)), url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#E0E0E0', 
      minHeight: '100vh', 
      fontFamily: '"Cinzel", "Times New Roman", serif, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      
      {/* Container do Letreiro Modificado */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        
        {/* Placa de ACM Alongada e com Alta Profundidade (3D Cascading) */}
        <div style={{ 
          width: '100px', 
          height: '140px', // Alongamos o bloco para dar mais imponência vertical
          margin: '0 auto 1.5rem', 
          background: 'linear-gradient(135deg, #525252 0%, #e5e5e5 15%, #171717 50%, #f5f5f5 85%, #262626 100%)',
          borderRadius: '6px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // Camadas extras de sombra para criar o efeito de "salto" para fora da tela (Profundidade ACM)
          boxShadow: `
            inset 0 2px 3px rgba(255,255,255,0.4), 
            0 1px 0 #111111,
            0 3px 0 #222222,
            0 5px 0 #1a1a1a,
            0 7px 0 #0f0f0f,
            0 15px 30px rgba(0,0,0,0.9)
          `,
          border: '1px solid #1f1f1f',
          transform: 'perspective(500px) rotateX(5deg)', // Leve inclinação 3D de fachada
        }}>
          
          {/* Início da customização do texto 'O Z' */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'baseline', 
            justifyContent: 'center',
            position: 'relative',
            height: '100%',
            width: '100%',
            paddingTop: '25px'
          }}>
            {/* Letra O robusta */}
            <span style={{ 
              fontSize: '2.8rem', 
              fontWeight: '900', 
              color: '#080808',
              textShadow: '1px 1px 1px rgba(255,255,255,0.3)',
              letterSpacing: '-2px',
              lineHeight: '1'
            }}>
              O
            </span>
            
            {/* Letra Z Customizada: Alongada na perna inferior */}
            <span style={{ 
              fontSize: '3.5rem', // Z maior para dominar a logo
              fontWeight: '900', 
              color: '#0a0a0a',
              textShadow: '1px 1px 1px rgba(255,255,255,0.4)',
              lineHeight: '0.8',
              marginLeft: '-5px',
              position: 'relative',
              display: 'inline-block',
              transform: 'scaleY(1.25)' // Alonga o formato vertical do Z, esticando suas pernas
            }}>
              Z
            </span>
          </div>
        </div>

        {/* Nome da Barbearia com Efeito Letreiro Luminoso Apagado */}
        <h1 style={{ 
          fontSize: '2.6rem', 
          fontWeight: '900', 
          margin: '0 0 0.3rem', 
          textTransform: 'uppercase', 
          letterSpacing: '8px', // Mais espaçado estilo minimalista extremo
          background: 'linear-gradient(to bottom, #ffffff 0%, #8a8a8a 50%, #ffffff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0px 5px 10px rgba(0,0,0,1))'
        }}>
          OZbarber
        </h1>
        
        <p style={{ 
          color: '#BA9A2D', 
          fontSize: '0.75rem', 
          margin: 0, 
          letterSpacing: '5px',
          textTransform: 'uppercase',
          fontWeight: '700',
          opacity: 0.9
        }}>
          PREMIUM MANAGEMENT
        </p>
      </div>

      {/* Botões Estilo Placas Retas de Metal */}
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
            background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
            color: '#E5E5E5',
            border: '1px solid #333333',
            borderRadius: '2px', 
            fontSize: '0.9rem',
            fontWeight: '700',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
            transition: 'all 0.3s'
          }}>
            <span style={{ color: '#BA9A2D', fontSize: '0.6rem' }}>■</span> Gerenciar Serviços
          </button>
        </Link>

        <Link href="/profissionais" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '1.2rem',
            background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
            color: '#E5E5E5',
            border: '1px solid #333333',
            borderRadius: '2px',
            fontSize: '0.9rem',
            fontWeight: '700',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
            transition: 'all 0.3s'
          }}>
            <span style={{ color: '#BA9A2D', fontSize: '0.6rem' }}>■</span> Gerenciar Equipe
          </button>
        </Link>
      </div>
    </div>
  );
}
