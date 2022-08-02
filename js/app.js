//criação dos modais de receita e despesa

const switchModalDespesa = () => {
  const modal = document.querySelector('.modal-despesa');
  const actualStyle = modal.style.display;
  if (actualStyle === 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
}

const switchModalReceita = () => {
  const modal = document.querySelector('.modal-receita');
  const actualStyle = modal.style.display;
  if (actualStyle === 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
}

const btnDespesa = document.querySelector('#botao-despesa')
const btnReceita = document.querySelector('#botao-receita')
btnDespesa.addEventListener('click', switchModalDespesa);
btnReceita.addEventListener('click', switchModalReceita);

const btnCancelarDespesa = document.querySelector('.btn-cancelar-despesa');
const btnCancelarReceita = document.querySelector('.btn-cancelar-receita');

btnCancelarDespesa.addEventListener('click', switchModalDespesa);
btnCancelarReceita.addEventListener('click', switchModalReceita);

// criação de objeto
const financas = {
  saldo: 10,
  transacoes: [
    {
      descricao: 'Salgado na faculdade',
      categoria: 'Despesa',
      valor: 5.5
    },
    {
      descricao: 'Livro Clean Code',
      categoria: 'Despesa',
      valor: 50
    },
    {
      descricao: 'Grana do estágio',
      categoria: 'Receita',
      valor: 80
    },
    {
      descricao: 'Capinha pro celular',
      categoria: 'Despesa',
      valor: 15
    },
  ]
};
const formatarValor = (valor) => valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

document.getElementById("saldo").innerText += `Saldo: ${formatarValor(financas.saldo)}`


  let descricoes = document.querySelectorAll('.coluna-descricao');
  let valores = document.querySelectorAll('.coluna-valor');
  let categorias = document.querySelectorAll('.coluna-categoria');

  descricoes.append += financas.transacoes.map((transacao)=>{
    `Descricao: ${transacao.descricao}`
  console.log(transacao.descricao)});

const mostrarSaldo = () => {
  let informacao = document.querySelector('.informacao');
  informacao.innerText += `Saldo: ${formatarValor(financas.saldo)}`

}



// função para capturar valores e adicionar receita e despesa
const adicionarReceita = () => {
  let nomeReceita = document.getElementById('nome-receita').value;
  let valorReceita = parseFloat(document.getElementById('valor-receita').value.replace(",", "."));
  const receita = {
    descricao: nomeReceita,
    valor: valorReceita,
    categoria: 'Receita'
  }
  financas.transacoes.push(receita);
  financas.saldo = financas.saldo + valorReceita

  document.querySelector('.modal-receita').style.display = 'none';
}

const adicionarDespesa = () => {
  let nomeDespesa = document.getElementById('nome-despesa').value;
  let valorDespesa = parseFloat(document.getElementById('valor-despesa').value.replace(",", "."));
  const despesa = {
    descricao: nomeDespesa,
    valor: valorDespesa,
    categoria: 'Despesa'
  }
  financas.transacoes.push(despesa);
  financas.saldo = financas.saldo - valorDespesa

  document.querySelector('.modal-despesa').style.display = 'none';
}




function exibirFinancas() {
  console.log('Saldo: ', formatarValor(financas.saldo));
  financas.transacoes.map((transacao,i) => {
    console.log('');
    
    console.log('Transacao ', i + 1, ':');
    console.log('[', transacao.categoria, ']', transacao.descricao);
    console.log(formatarValor(transacao.valor));
  });
}
exibirFinancas()