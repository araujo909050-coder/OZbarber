import React from 'react';
import { cadastrarServicoAction } from '../actions';

export default function CadastroServicos() {
  return (
    <div style={{ 
      backgroundColor: '#0A0A0A', 
      color: '#FFFFFF', 
      minHeight: '100vh', 
      fontFamily: 'sans-serif',
      padding: '2rem'
    }}>
      {/* Cabeçalho */}
      <div style={{ maxWidth: '500px', margin: '0 auto', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', borderBottom: '1px solid #1A1A1A', paddingBottom: '1rem' }}>
          💈 OZbarber <span style={{ color: '#737373', fontSize: '1.2rem', fontWeight: 'normal' }}>| Serviços</span>
        </h1>
      </div>

      {/* Formulário de Cadastro */}
      <div style={{ 
        maxWidth: '500px', 
        margin: '0 auto', 
        backgroundColor: '#1A1A1A', 
        padding: '2rem', 
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', fontWeight: '600' }}>
          Cadastrar Novo Serviço
        </h2>

        {/* ATENÇÃO: Aqui conectamos a Server Action */}
        <form action={cadastrarServicoAction} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          
          {/* Campo: Nome do Serviço */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#737373', fontSize: '0.9rem' }}>Nome do Serviço</label>
            <input 
              type="text" 
              name="nome" // O Next.js usa esse 'name' para pegar o valor
              required
              placeholder="Ex: Corte Degradê, Barba Completa..." 
              style={{
                backgroundColor: '#0A0A0A',
                border: '1px solid #737373',
                borderRadius: '4px',
                padding: '0.8rem',
                color: '#FFFFFF',
                outline: 'none'
              }}
            />
          </div>

          {/* Campo: Preço / Valor */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#737373', fontSize: '0.9rem' }}>Valor (R$)</label>
            <input 
              type="number" 
              name="preco" // Identificador para a nossa Action
              required
              placeholder="0,00" 
              step="0.01"
              style={{
                backgroundColor: '#0A0A0A',
                border: '1px solid #737373',
                borderRadius: '4px',
                padding: '0.8rem',
                color: '#FFFFFF',
                outline: 'none'
              }}
            />
          </div>

          {/* Campo: Tempo de Duração */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#737373', fontSize: '0.9rem' }}>Duração Estimada</label>
            <select 
              name="duracao" // Identificador para a nossa Action
              style={{
                backgroundColor: '#0A0A0A',
                border: '1px solid #737373',
                borderRadius: '4px',
                padding: '0.8rem',
                color: '#FFFFFF',
                outline: 'none'
              }}
            >
              <option value="15">15 minutos</option>
              <option value="30">30 minutos</option>
              <option value="45">45 minutos</option>
              <option value="60">1 hora</option>
            </select>
          </div>

          {/* Botão Salvar - Agora do tipo submit para disparar o formulário */}
          <button 
            type="submit" 
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '4px',
              padding: '1rem',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Salvar Serviço
          </button>
        </form>
      </div>
    </div>
  );
}
