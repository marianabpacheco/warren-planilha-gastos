//criação dos modais de receita e despesa

const switchModalDespesa = () => {
    const modal =   document.querySelector('.modal-despesa');
    const actualStyle = modal.style.display;
    if (actualStyle === 'block') {
        modal.style.display = 'none';
    }else{
        modal.style.display = 'block';
    }
}

const switchModalReceita = () => {
    const modal =   document.querySelector('.modal-receita');
    const actualStyle = modal.style.display;
    if (actualStyle === 'block') {
        modal.style.display = 'none';
    }else{
        modal.style.display = 'block';
    }
}

const  btnDespesa = document.querySelector('#botao-despesa')
const btnReceita = document.querySelector('#botao-receita')
btnDespesa.addEventListener('click', switchModalDespesa);
btnReceita.addEventListener('click', switchModalReceita);

const btnCancelarDespesa = document.querySelector('.btn-cancelar-despesa');
const btnCancelarReceita = document.querySelector('.btn-cancelar-receita');

btnCancelarDespesa.addEventListener('click', switchModalDespesa);
btnCancelarReceita.addEventListener('click', switchModalReceita);

function formatarValor(valor) {
  return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

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
  
const setSaldo = () => {
  document.getElementById('saldo').innerHTML = `Saldo: ${formatarValor(financas.saldo)}`
}
setSaldo()

const adicionarTransacoes = () => {
  let tabela = '';
  financas.transacoes.forEach(transacao => {
    let linha = `<tr>
                    <td class="coluna-descricao">${transacao.descricao}</td>
                    <td class="coluna-categoria">${transacao.categoria}</td>
                    <td class="coluna-valor">${formatarValor(transacao.valor)}</td>
                  </tr>`
    tabela += linha
  });
  document.getElementById('lista-transacoes-conteudo').innerHTML = tabela;
  
}
adicionarTransacoes()
// função para capturar valores e adicionar receita e despesa
const adicionarReceita = () => {
    let nomeReceita = document.getElementById('nome-receita').value;
    let valorReceita = parseFloat(document.getElementById('valor-receita').value.replace(",", "."));
    const receita = {
        descricao: nomeReceita,
        valor: valorReceita,
        categoria:'Receita'
    }
    financas.transacoes.push(receita);
    financas.saldo = financas.saldo + valorReceita
    setSaldo()
    document.querySelector('.modal-receita').style.display = 'none';
    document.getElementById('nome-receita').value = ''
    document.getElementById('valor-receita').value = '';
}

const adicionarDespesa = () => {
    let nomeDespesa= document.getElementById('nome-despesa').value;
    let valorDespesa = parseFloat(document.getElementById('valor-despesa').value.replace(",", ".")); 
    
    const despesa = {
        descricao: nomeDespesa,
        valor: valorDespesa,
        categoria:'Despesa'
    }
    financas.transacoes.push(despesa);
    financas.saldo = financas.saldo - valorDespesa
  
    setSaldo()

    document.querySelector('.modal-despesa').style.display = 'none';
    document.getElementById('nome-despesa').value = ''
    document.getElementById('valor-despesa').value = ''
}

// Adicionar função de adicionar transação aos respectivos botões
document.querySelector('.btn-adicionar-despesa').addEventListener('click',adicionarTransacoes)
document.querySelector('.btn-adicionar-receita').addEventListener('click',adicionarTransacoes)


console.log(financas)