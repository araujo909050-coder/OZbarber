import React from 'react';
import { neon } from '@neondatabase/serverless';
import Link from 'next/link';

export default function ProfissionaisPage() {
  async function actionSalvarProfissional(formData: FormData) {
    'use server';
    const sql = neon(process.env.DATABASE_URL!);
    const nome = formData.get('nome') as string;
    const cargo = formData.get('cargo') as string;

    await sql`
      INSERT INTO profissionais (nome, cargo) 
      VALUES (${nome}, ${cargo})
    `;
  }

  return (
    <div style={{
      backgroundColor: '#050505',
      color: '#E0E0E0',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '3rem 2rem'
    }}>
      {/* Cabeçalho Premium */}
      <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', width: '100%', maxWidth: '450px' }}>
        <Link href="/" style={{ position: 'absolute', left: 0, top: '5px', color: '#D4AF37', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '1px' }}>
          ← VOLTAR
        </Link>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', color: '#FFFFFF' }}>
          Membros da Equipe
        </h2>
        <p style={{ color: '#737373', fontSize: '0.85rem', margin: '5px 0 0', letterSpacing: '1px' }}>
          CADASTRO DE PROFISSIONAIS PREMIUM
        </p>
      </div>

      {/* Formulário Elegante */}
      <form action={actionSalvarProfissional} style={{
        width: '100%',
        maxWidth: '450px',
        backgroundColor: '#0A0A0A',
        border: '1px solid #1A1A1A',
        padding: '2.5rem',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#A3A3A3' }}>
            Nome do Profissional
          </label>
          <input 
            type="text" 
            name="nome" 
            required 
            placeholder="Ex: Carlos Silva"
            style={{
              padding: '1rem',
              backgroundColor: '#121212',
              border: '1px solid #262626',
              borderRadius: '6px',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', color: '#A3A3A3' }}>
            Especialidade / Cargo
          </label>
          <input 
            type="text" 
            name="cargo" 
            required 
            placeholder="Ex: Barbeiro Visagista"
            style={{
              padding: '1rem',
              backgroundColor: '#121212',
              border: '1px solid #262626',
              borderRadius: '6px',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
        </div>

        <button type="submit" style={{
          marginTop: '1rem',
          padding: '1.1rem',
          backgroundColor: '#1A1A1A',
          color: '#FFFFFF',
          border: '1px solid #D4AF37',
          borderRadius: '6px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          boxShadow: '0 4px 15px rgba(212, 175, 55, 0.1)'
        }}>
          🏆 Salvar Profissional
        </button>
      </form>
    </div>
  );
}
