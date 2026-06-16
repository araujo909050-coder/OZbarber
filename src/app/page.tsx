import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#050505',
      // Imagem de fundo com temática de barbearia rústica/gótica escura
      backgroundImage: 'linear-gradient(to bottom, rgba(5, 5, 5, 0.85), rgba(10, 10, 10, 0.95)), url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#E0E0E0', 
      minHeight: '100vh', 
      fontFamily: '"Cinzel", "Times New Roman", serif, sans-serif', // Fonte com toque mais clássico/gótico
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      
      {/* Container do Letreiro em ACM Metalizado */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        
        {/* Brasão Letreiro de Metal */}
        <div style={{ 
          width: '110px', 
          height: '110px', 
          margin: '0 auto 1.5rem', 
          // Efeito de Metal Cromado/ACM com relevo (box-shadow pesado e linear-gradient de metal)
          background: 'linear-gradient(135deg, #737373 0%, #f5f5f5 25%, #404040 50%, #ffffff 75%, #262626 100%)',
          borderRadius: '12px', // Cantos levemente retos para parecer placa de metal cortada
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'inset 0 2px 3px rgba(255,255,255,0.6), 0 10px 25px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.1)',
          border: '2px solid #171717'
        }}>
          {/* Letras com efeito entalhado no metal */}
          <span style={{ 
            fontSize: '2.5rem', 
            fontWeight: '900', 
            color: '#111111',
            textShadow: '1px 1px 0px rgba(255,255,255,0.5)',
            letterSpacing: '-2px'
          }}>
            OZ
          </span>
        </div>

        {/* Nome da Barbearia em Texto Metalizado Escovado */}
        <h1 style={{ 
          fontSize: '2.8rem', 
          fontWeight: '900', 
          margin: '0 0 0.3rem', 
          textTransform: 'uppercase', 
          letterSpacing: '6px',
          background: 'linear-gradient(to bottom, #ffffff 0%, #a3a3a3 50%, #ffffff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.9))'
        }}>
          OZbarber
        </h1>
        
        <p style={{ 
          color: '#D4AF37', // Detalhe em ouro velho para quebrar o prata
          fontSize: '0.8rem', 
          margin: 0, 
          letterSpacing: '4px',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          opacity: 0.8
        }}>
          Premium Management
        </p>
      </div>

      {/* Botões Estilo Placas de ACM Escuro */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.5rem', 
        width: '100%', 
        maxWidth: '380px'
      }}>
        
        {/* Botão Serviços */}
        <Link href="/servicos" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '1.3rem',
            // Acabamento chapa de metal escuro escovado com bordas polidas
            background: 'linear-gradient(180deg, #1f1f1f 0%, #111111 100%)',
            color: '#FFFFFF',
            border: '1px solid #404040',
            borderRadius: '4px', // Visual mais reto, minimalista e agressivo
            fontSize: '0.95rem',
            fontWeight: '700',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1)',
            transition: 'all 0.3s'
          }}>
            <span style={{ color: '#D4AF37' }}>▪</span> Gerenciar Serviços
          </button>
        </Link>

        {/* Botão Equipe */}
        <Link href="/profissionais" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '1.3rem',
            background: 'linear-gradient(180deg, #1f1f1f 0%, #111111 100%)',
            color: '#FFFFFF',
            border: '1px solid #404040',
            borderRadius: '4px',
            fontSize: '0.95rem',
            fontWeight: '700',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1)',
            transition: 'all 0.3s'
          }}>
            <span style={{ color: '#D4AF37' }}>▪</span> Gerenciar Equipe
          </button>
        </Link>
      </div>
    </div>
  );
}
