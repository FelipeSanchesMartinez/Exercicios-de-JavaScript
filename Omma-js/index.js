const receitas = [{
    titulo: 'Receita a',
    nvdificuldade: 'simples',
    ingredientes: ['ingrediente 1', 'ingrediente 2'],
    instrucoes: ['instrução 1', 'instrução 2'],
    video: 'https://www.youtube.com.br',
    vegano: true,
  }];
  
  function CadastrarReceitas() {
    receitas.push({
      titulo: 'Receita B',
      nvdificuldade: 'Moderado',
      ingredientes: ['ingrediente 1', 'ingrediente 2'],
      instrucoes: ['instrução 1', 'instrução 2'],
      video: 'https://www.youtube.com.br',
      vegano: true,
    });
    console.log('Receita cadastrada com sucesso! Sua nova receita é: ' + receitas[1].titulo);
  }
  
  CadastrarReceitas();