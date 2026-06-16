'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  // Estado para controlar a abertura do modal de agendamento e o horário selecionado
  const [modalAberto, setModalAberto] = useState(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState('');
  
  // Lista de horários disponíveis na timeline da barbearia
  const horariosTimeline = [
    '08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  // Lista de menus laterais principais
  const menus = [
    { label: 'Gerenciar Serviços', href: '/servicos' },
    { label: 'Gerenciar Equipe', href: '/profissionais' },
    { label: 'Cadastro de Serviços', href: '/cadastro-servicos' },
    { label: 'Cadastro de Clientes', href: '/cadastro-clientes' },
    { label: 'Cadastro de Profissionais', href: '/cadastro-profissionais' },
    { label: 'Pacotes', href: '/pacotes' },
    { label: 'Caixa', href: '/caixa' },
  ];

  // Função para abrir o formulário ao clicar no horário
  const abrirAgendamento = (horario: string) => {
    setHorarioSelecionado(horario);
    setModalAberto(true);
  };

  return (
    <div style={{ 
      backgroundColor: '#080808',
      color: '#E5E5E5', 
      minHeight: '100vh', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'hidden'
    }}>
      
      {/* 1. SIDEBAR LATERAL ESQUERDA FIXA */}
      <aside style={{
        width: '340px',
        backgroundColor: '#0d0d0d',
        borderRight: '1px solid #1f1f1f',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 1.2rem',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
        height: '100vh',
        zIndex: 20,
        boxShadow: '10px 0 30px rgba(0,0,0,0.5)',
        overflowY: 'auto'
      }}>
        
        {/* LOGO DO ARQUIVO REAL UTILIZADA NO CANTO ESQUERDO SUPERIOR */}
        <div style={{ width: '100%', maxWidth: '240px', marginBottom: '2.5rem', textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logo.png" 
            alt="OZ Barber Logo" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              objectFit: 'contain',
              filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.6))'
            }} 
          />
          <div style={{
            fontSize: '0.65rem',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: '#D4AF37',
            marginTop: '0.5rem',
            fontWeight: '700'
          }}>
            EST. 2020
          </div>
        </div>

        {/* CONTAINER DE BOTÕES FLUXO PRINCIPAL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', marginBottom: '2rem' }}>
          {menus.map((menu, i) => (
            <Link key={i} href={menu.href} style={{ textDecoration: 'none', width: '100%' }}>
              <button style={{
                width: '100%',
                padding: '0.9rem 0.8rem',
                background: 'linear-gradient(180deg, #222222 0%, #0f0f0f 100%)',
                border: '1px solid #333333',
                borderRadius: '8px', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 0 #3a3a3a inset, 0 4px 0 #000000, 0 8px 15px rgba(0,0,0,0.4)',
                transition: 'all 0.1s ease'
              }}>
                <span style={{
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: '#FFFFFF',
                  textShadow: '-1px -1px 0 #D4AF37, 1px -1px 0 #D4AF37, -1px 1px 0 #D4AF37, 1px 1px 0 #D4AF37'
                }}>
                  {menu.label}
                </span>
              </button>
            </Link>
          ))}
        </div>

        {/* BOTOES ADICIONAIS: CONFIGURAÇÕES DO SISTEMA */}
        <div style={{ width: '100%', marginTop: 'auto', borderTop: '1px solid #1f1f1f', paddingTop: '1.5rem' }}>
          <Link href="/configuracoes" style={{ textDecoration: 'none', width: '100%' }}>
            <button style={{
              width: '100%',
              padding: '0.9rem 0.8rem',
              background: 'linear-gradient(180deg, #1a150a 0%, #0a0702 100%)', // Tom dourado queimado escuro
              border: '1px solid #4a3b12',
              borderRadius: '8px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 0 #6e581c inset, 0 4px 0 #000000',
            }}>
              <span style={{
                fontSize: '0.78rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#D4AF37'
              }}>
                ⚙️ Configurações
              </span>
            </button>
          </Link>
        </div>
      </aside>

      {/* 2. ÁREA CENTRAL - LINHA DO TEMPO DISPONÍVEL (ESTILO FRESHA REAL) */}
      <main style={{
        flex: 1,
        padding: '3rem',
        boxSizing: 'border-box',
        backgroundColor: '#080808',
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', margin: 0, color: '#ffffff' }}>Painel de Agendamentos</h2>
            <p style={{ margin: '0.3rem 0 0 0', color: '#888888', fontSize: '0.9rem' }}>Selecione um horário vago abaixo para incluir um novo cliente</p>
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
            QUADRO DE HORÁRIOS
          </div>
        </div>

        {/* CONTAINER DA COLUNA DE TIMELINE VAZIA */}
        <div style={{ 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.2rem',
          paddingLeft: '2rem',
          borderLeft: '2px solid #222222'
        }}>
          
          {horariosTimeline.map((horario, index) => (
            <div key={index} style={{ position: 'relative' }}>
              
              {/* NÓ CIRCULAR DA TIMELINE */}
              <div style={{
                position: 'absolute',
                left: '-calc(2rem + 7px)',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1a1a1a',
                border: '2px solid #444444',
                zIndex: 5
              }} />

              {/* CARD CLICÁVEL DE HORÁRIO DISPONÍVEL */}
              <div 
                onClick={() => abrirAgendamento(horario)}
                style={{
                  backgroundColor: '#0d0d0d',
                  border: '1px dashed #262626',
                  borderRadius: '6px',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#D4AF37';
                  e.currentTarget.style.backgroundColor = '#121212';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#262626';
                  e.currentTarget.style.backgroundColor = '#0d0d0d';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#888888', minWidth: '60px' }}>
                    {horario}
                  </div>
                  <div style={{ color: '#555555', fontSize: '0.9rem', fontStyle: 'italic', fontWeight: '500' }}>
                    — Horário Livre (Clique para agendar) —
                  </div>
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: '#D4AF37',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>
                  + Reservar
                </div>
              </div>

            </div>
          ))}

        </div>

      </main>

      {/* 3. WINDOW MODAL INTERATIVO PARA INCLUSÃO DE AGENDAMENTO REAL */}
      {modalAberto && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 100,
          backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            backgroundColor: '#0d0d0d',
            border: '1px solid #2c2c2c',
            borderRadius: '12px',
            padding: '2.5rem',
            width: '100%',
            maxWidth: '460px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.9)'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#ffffff', fontSize: '1.4rem' }}>Novo Agendamento</h3>
            <p style={{ margin: '0 0 2rem 0', color: '#D4AF37', fontSize: '0.9rem', fontWeight: '600' }}>Horário Selecionado: {horarioSelecionado} hrs</p>
            
            <form onSubmit={(e) => { e.preventDefault(); setModalAberto(false); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#aaa', textTransform: 'uppercase' }}>Nome do Cliente</label>
                <input type="text" placeholder="Ex: João Silva" required style={{ width: '100%', padding: '0.8rem', backgroundColor: '#161616', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#aaa', textTransform: 'uppercase' }}>Serviço</label>
                <input type="text" placeholder="Ex: Corte Degradê" required style={{ width: '100%', padding: '0.8rem', backgroundColor: '#161616', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" onClick={() => setModalAberto(false)} style={{ flex: 1, padding: '0.9rem', backgroundColor: '#222', border: 'none', borderRadius: '6px', color: '#fff', cursor: 'pointer', fontWeight: '600' }}>
                  Cancelar
                </button>
                <button type="submit" style={{ flex: 1, padding: '0.9rem', backgroundColor: '#D4AF37', border: 'none', borderRadius: '6px', color: '#000', cursor: 'pointer', fontWeight: '700' }}>
                  Confirmar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
