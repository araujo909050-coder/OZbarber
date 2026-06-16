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
      {/* Container do Logo (Logo minimalista geométrico OZ) */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        {/* Placeholder para o novo logo minimalista - Implementaremos a imagem depois */}
        <div style={{ 
          width: '100px', 
          height: '100px', 
          margin: '0 auto 1rem', 
          border: '2px solid #D4AF37', // Borda dourada sutil
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#C0C0C0' // Prata
        }}>
          OZ
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
          OZbarber
        </h1>
        <p style={{ color: '#A3A3A3', fontSize: '1rem', margin: 0 }}>
          Premium Barber Management
        </p>
      </div>

      {/* Botões de Navegação Principal (Botões de metal escuro com ouro) */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.5rem', 
        width: '100%', 
        maxWidth: '400px'
      }}>
        
        {/* Botão Gerenciar Serviços */}
        <Link href="/servicos" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '1.2rem',
            backgroundColor: '#1A1A1A', // Metal escuro
            color: '#FFFFFF',
            border: '1px solid #D4AF37', // Ouro velho
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'background-color 0.3s'
          }}>
            💈 GERENCIAR SERVIÇOS
          </button>
        </Link>

        {/* Botão Gerenciar Equipe */}
        <Link href="/profissionais" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '1.2rem',
            backgroundColor: '#1A1A1A',
            color: '#FFFFFF',
            border: '1px solid #D4AF37',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'background-color 0.3s'
          }}>
            👥 GERENCIAR EQUIPE
          </button>
        </Link>
      </div>
    </div>
  );
}
