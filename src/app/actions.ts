'use server';

import { neon } from '@neondatabase/serverless';

// Inicializa a conexão com o banco usando a URL secreta do seu .env
const sql = neon(process.env.DATABASE_URL!);

// Função para salvar um Novo Serviço no Neon
export async function cadastrarServicoAction(formData: FormData) {
  const nome = formData.get('nome') as string;
  const preco = parseFloat(formData.get('preco') as string);
  const duracao = parseInt(formData.get('duracao') as string);

  try {
    // Insere os dados diretamente na tabela 'servicos' do Neon
    await sql`
      INSERT INTO servicos (nome, preco, duracao_minutos) 
      VALUES (${nome}, ${preco}, ${duracao})
    `;
    console.log('Serviço salvo com sucesso no Neon!');
  } catch (error) {
    console.error('Erro ao salvar serviço:', error);
    throw new Error('Não foi possível salvar o serviço.');
  }
}

// Função para salvar um Novo Profissional no Neon
export async function cadastrarProfissionalAction(formData: FormData) {
  const nome = formData.get('nome') as string;
  const email = formData.get('email') as string;
  const funcao = formData.get('funcao') as string;
  const porcentagem = parseFloat(formData.get('porcentagem') as string);

  try {
    // Insere os dados diretamente na tabela 'profissionais' do Neon
    await sql`
      INSERT INTO profissionais (nome, email, funcao, porcentagem) 
      VALUES (${nome}, ${email}, ${funcao}, ${porcentagem})
    `;
    console.log('Profissional salvo com sucesso no Neon!');
  } catch (error) {
    console.error('Erro ao salvar profissional:', error);
    throw new Error('Não foi possível salvar o profissional.');
  }
}
