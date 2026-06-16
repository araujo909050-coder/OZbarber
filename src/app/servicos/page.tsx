import React from 'react';
import { neon } from '@neondatabase/serverless';
import Link from 'next/link';

export default function ServicosPage() {
  async function actionSalvarServico(formData: FormData) {
    'use server';
    const sql = neon(process.env.DATABASE_URL!);
    const nome = formData.get('nome') as string;
    const preco = parseFloat(formData.get('preco') as string);

    await sql`
      INSERT INTO servicos (nome, preco) 
      VALUES (${nome}, ${preco})
    `;
  }

  return (
    <div style={{
      backgroundColor: '#030303',
      backgroundImage: 'radial-gradient(circle at 50% 10%, #1a1510 0%, #030303 70%)',
      color: '#F5F5F5',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 2rem'
    }}>
      {/* Cabeçalho Premium */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem', position: 'relative', width: '100%', maxWidth: '480px' }}>
        <Link href="/" style={{ 
          position: 'absolute', 
          left: 0, 
          top: '6px', 
          color: '#D4AF37', 
          textDecoration: 'none', 
          fontSize: '0.8rem', 
          letterSpacing: '2px',
          fontWeight: '500',
          opacity: 0.8
        }}>
          ← HOME
        </Link>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '4px', color: '#FFFFFF' }}>
          Serviços
        </h2>
        <p style={{ color: '#8C8C8C', fontSize: '0.8rem', margin: '8px 0 0', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Menu de Experiências Exclusivas
        </p>
      </div>

      {/* Formulário Alta Qualidade */}
      <form action={actionSalvarServico} style={{
        width: '100%',
        maxWidth: '480px',
        backgroundColor: 'rgba(15, 15, 15, 0.75)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(212, 175, 55, 0.15)',
        padding: '3rem 2.5rem',
        borderRadius: '16px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.8rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', color: '#BA9A2D' }}>
            Nome do Serviço
          </label>
          <input 
            type="text" 
            name="nome" 
            required 
            placeholder="Ex: Corte Texturizado + Barber Spa"
            style={{
              padding: '1.1rem',
              backgroundColor: '#0D0D0D',
              border: '1px solid #222222',
              borderRadius: '8px',
              color: '#FFFFFF',
              fontSize: '1rem',
              outline: 'none',
              letterSpacing: '0.5px'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', color: '#BA9A2D' }}>
            Valor do Investimento
          </label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <span style={{ position: 'absolute', left: '1.1rem', color: '#666666', fontSize: '1rem' }}>R$</span>
            <input 
              type="number" 
              step="0.01" 
              name="preco" 
              required 
              placeholder="0,00"
              style={{
                width: '100%',
                padding: '1.1rem 1.1rem 1.1rem 2.8rem',
                backgroundColor: '#0D0D0D',
                border: '1px solid #222222',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '1rem',
                outline: 'none',
                letterSpacing: '0.5px'
              }}
            />
          </div>
        </div>

        <button type="submit" style={{
          marginTop: '1rem',
          padding: '1.2rem',
          background: 'linear-gradient(135deg, #1e1915 0%, #12100e 100%)',
          color: '#D4AF37',
          border: '1px solid #D4AF37',
          borderRadius: '8px',
          fontSize: '0.95rem',
          fontWeight: '700',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          boxShadow: '0 6px 20px rgba(212, 175, 55, 0.08)',
          transition: 'all 0.3s ease'
        }}>
          Adicionar Serviço Premium
        </button>
      </form>
    </div>
  );
}
