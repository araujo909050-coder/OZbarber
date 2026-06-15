'use server';

// Função para salvar um Novo Serviço no Banco de Dados
export async function cadastrarServicoAction(formData: FormData) {
  const nome = formData.get('nome') as string;
  const preco = parseFloat(formData.get('preco') as string);
  const duracao = parseInt(formData.get('duracao') as string);

  // Aqui o Next.js vai conectar com o Neon e rodar:
  // INSERT INTO servicos (nome, preco, duracao_minutos) VALUES (nome, preco, duracao);
  console.log('Salvando no banco o serviço:', { nome, preco, duracao });
  
  // Como estamos no GitHub direto, nas próximas etapas vamos estruturar o driver de conexão!
}

// Função para salvar um Novo Profissional no Banco de Dados
export async function cadastrarProfissionalAction(formData: FormData) {
  const nome = formData.get('nome') as string;
  const email = formData.get('email') as string;
  const funcao = formData.get('funcao') as string;
  const porcentagem = parseFloat(formData.get('porcentagem') as string);

  // Aqui o Next.js vai conectar com o Neon e rodar:
  // INSERT INTO profissionais (nome, email, funcao, porcentagem) VALUES (nome, email, funcao, porcentagem);
  console.log('Salvando no banco o profissional:', { nome, email, funcao, porcentagem });
}
