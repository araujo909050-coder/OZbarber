import React from 'react';
import Link from 'next/link';

export default function Home() {
  // Dados simulados da timeline da agenda (Padrão Fresha Premium)
  const compromissos = [
    { horario: '09:00', cliente: 'Carlos Henrique', servico: 'Corte Degradê & Barba', status: 'Confirmado', valor: 'R$ 85,00' },
    { horario: '10:15', cliente: 'Eduardo Santos', servico: 'Cabelo, Barba e Toalha Quente', status: 'Em Atendimento', valor: 'R$ 120,00' },
    { horario: '11:30', cliente: 'Mateus Oliveira', servico: 'Design de Barba e Pigmentação', status: 'Pendente', valor: 'R$ 60,00' },
    { horario: '14:00', cliente: 'Thiago Martins', servico: 'Corte Clássico Tesoura', status: 'Confirmado', valor: 'R$ 70,00' },
    { horario: '15:15', cliente: 'Bruno Alencar', servico: 'Combo OZ (Corte, Barba e Sobrancelha)', status: 'Confirmado', valor: 'R$ 150,00' },
  ];

  return (
    <div style={{ 
      backgroundColor: '#080808',
      color: '#E5E5E5', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'row', // Divide a tela entre menu esquerdo e painel central
      overflowX: 'hidden'
    }}>
      
      {/* 1. SIDEBAR LATERAL ESQUERDA FIXA */}
      <aside style={{
        width: '320px',
        backgroundColor: '#0d0d0d',
        borderRight: '1px solid #1f1f1f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem 1.5rem',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
        height: '100vh',
        zIndex: 20,
        boxShadow: '10px 0 30px rgba(0,0,0,0.5)'
      }}>
        
        {/* LOGO CUSTOMIZADA NO TOPO DO MENU (Vetorizada em CSS para não falhar) */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', width: '100%' }}>
          <h1 style={{
            margin: 0,
            fontSize: '2.4rem',
            fontWeight: '900',
            letterSpacing: '1px',
            fontStyle: 'italic',
            background: 'linear-gradient(to bottom, #ffffff 0%, #a3a3a3 50%, #404040 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.7))'
          }}>
            OZBarber
          </h1>
          <div style={{
            fontSize: '0.65rem',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            color: '#D4AF37',
            marginTop: '0.3rem',
            fontWeight: '700'
          }}>
            EST. 2020
          </div>
        </div>

        {/* CONTAINER DE BOTÕES MENU LATERAL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
          
          <Link href="/servicos" style={{ textDecoration: 'none', width: '100%' }}>
            <button style={{
              width: '100%',
              padding: '1.1rem 1rem',
              background: 'linear-gradient(180deg, #222222 0%, #0f0f0f 100%)',
              border: '1px solid #333333',
              borderRadius: '8px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 0 #3a3a3a inset, 0 4px 0 #000000, 0 8px 15px rgba(0,0,0,0.5)',
              transition: 'all 0.1s ease'
            }}>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#FFFFFF',
                textShadow: '-1px -1px 0 #D4AF37, 1px -1px 0 #D4AF37, -1px 1px 0 #D4AF37, 1px 1px 0 #D4AF37'
              }}>
                Gerenciar Serviços
              </span>
            </button>
          </Link>

          <Link href="/profissionais" style={{ textDecoration: 'none', width: '100%' }}>
            <button style={{
              width: '100%',
              padding: '1.1rem 1rem',
              background: 'linear-gradient(180deg, #222222 0%, #0f0f0f 100%)',
              border: '1px solid #333333',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 0 #3a3a3a inset, 0 4px 0 #000000, 0 8px 15px rgba(0,0,0,0.5)',
              transition: 'all 0.1s ease'
            }}>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#FFFFFF',
                textShadow: '-1px -1px 0 #D4AF37, 1px -1px 0 #D4AF37, -1px 1px 0 #D4AF37, 1px 1px 0 #D4AF37'
              }}>
                Gerenciar Equipe
              </span>
            </button>
          </Link>

        </div>

        {/* RODAPÉ DO MENU */}
        <div style={{ marginTop: 'auto', fontSize: '0.75rem', color: '#555555', letterSpacing: '1px' }}>
          PAINEL DE CONTROLE v2.0
        </div>
      </aside>

      {/* 2. ÁREA CENTRAL - TIMELINE DA AGENDA (ESTILO FRESHA) */}
      <main style={{
        flex: 1,
        padding: '3rem',
        boxSizing: 'border-box',
        backgroundColor: '#080808',
        // Textura suave de fundo para quebrar o preto chapado
        backgroundImage: 'radial-gradient(circle at top right, #141414 0%, #080808 60%)',
        minHeight: '100vh'
      }}>
        
        {/* CABEÇALHO DA TIMELINE */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '3rem',
          borderBottom: '1px solid #1a1a1a',
          paddingBottom: '1.5rem'
        }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', margin: 0, color: '#ffffff' }}>Agenda do Dia</h2>
            <p style={{ margin: '0.3rem 0 0 0', color: '#888888', fontSize: '0.9rem' }}>Visualização em linha do tempo dos agendamentos</p>
          </div>
          <div style={{
            backgroundColor: '#121212',
            padding: '0.6rem 1.2rem',
            borderRadius: '6px',
            border: '1px solid #222222',
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#D4AF37',
            letterSpacing: '1px'
          }}>
            HOJE • Terça-feira
          </div>
        </div>

        {/* CONTAINER DA COLUNA DE TIMELINE */}
        <div style={{ 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem',
          paddingLeft: '2rem',
          borderLeft: '2px solid #222222' // Linha guia da timeline
        }}>
          
          {compromissos.map((item, index) => (
            <div key={index} style={{ position: 'relative' }}>
              
              {/* NÓ CIRCULAR DA TIMELINE NA LINHA GUIA */}
              <div style={{
                position: 'absolute',
                left: '-calc(2rem + 7px)',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: item.status === 'Em Atendimento' ? '#D4AF37' : '#222222',
                border: item.status === 'Em Atendimento' ? '3px solid #080808' : '3px solid #080808',
                boxShadow: item.status === 'Em Atendimento' ? '0 0 10px #D4AF37' : 'none',
                zIndex: 5
              }} />

              {/* CARD DE COMPROMISSO ESTILO PLATAFORMA DE LUXO */}
              <div style={{
                backgroundColor: '#121212',
                border: item.status === 'Em Atendimento' ? '1px solid #D4AF37' : '1px solid #1c1c1c',
                borderRadius: '8px',
                padding: '1.2rem 1.8rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                transition: 'all 0.2s ease'
              }}>
                {/* Horário e Informações Principais */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <div style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: '800', 
                    color: item.status === 'Em Atendimento' ? '#D4AF37' : '#a3a3a3',
                    minWidth: '60px' 
                  }}>
                    {item.horario}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#ffffff', fontWeight: '600' }}>{item.cliente}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#888888', marginTop: '0.2rem', display: 'inline-block' }}>
                      {item.servico}
                    </span>
                  </div>
                </div>

                {/* Status e Valor */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '4px',
                    backgroundColor: item.status === 'Em Atendimento' ? 'rgba(212, 175, 55, 0.1)' : 'rgba(255,255,255,0.03)',
                    color: item.status === 'Em Atendimento' ? '#D4AF37' : '#888888',
                    border: item.status === 'Em Atendimento' ? '1px solid rgba(212, 175, 55, 0.2)' : '1px solid #222222'
                  }}>
                    {item.status}
                  </span>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff' }}>
                    {item.valor}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </main>

    </div>
  );
}
