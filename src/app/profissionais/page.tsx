import React from 'react';

export default function CadastroProfissionais() {
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
          💈 OZbarber <span style={{ color: '#737373', fontSize: '1.2rem', fontWeight: 'normal' }}>| Equipe</span>
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
          Cadastrar Novo Profissional
        </h2>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {/* Campo: Nome */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#737373', fontSize: '0.9rem' }}>Nome do Profissional</label>
            <input 
              type="text" 
              placeholder="Ex: Rodrigo Silva" 
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

          {/* Campo: Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#737373', fontSize: '0.9rem' }}>E-mail</label>
            <input 
              type="email" 
              placeholder="rodrigo@ozbarber.com" 
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

          {/* Campo: Função */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#737373', fontSize: '0.9rem' }}>Função / Cargo</label>
            <input 
              type="text" 
              placeholder="Ex: Barbeiro Master, Cabeleireiro, Visagista" 
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

          {/* Campo: Porcentagem de Comissão */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ color: '#737373', fontSize: '0.9rem' }}>Comissão (%)</label>
            <input 
              type="number" 
              placeholder="Ex: 40" 
              max="100"
              min="0"
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

          {/* Botão Salvar */}
          <button 
            type="button" 
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
            Salvar Colaborador
          </button>
        </form>
      </div>
    </div>
  );
}
