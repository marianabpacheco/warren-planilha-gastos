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

function formatarDescricao(descricao) {
  return descricao.charAt(0).toUpperCase() + descricao.slice(1)
}


// criação de objeto
// const financas = {
//     saldo: 10,
//     transacoes: [
//       {
//         descricao: 'Salgado na faculdade',
//         categoria: 'Despesa',
//         valor: 5.5
//       },
//       {
//         descricao: 'Livro Clean Code',
//         categoria: 'Despesa',
//         valor: 50
//       },
//       {
//         descricao: 'Grana do estágio',
//         categoria: 'Receita',
//         valor: 80
//       },
//       {
//         descricao: 'Capinha pro celular',
//         categoria: 'Despesa',
//         valor: 15
//       },
//     ]
//   };
  
const setSaldo = (saldo) => {
  document.getElementById('saldo').innerHTML = `Saldo: ${formatarValor(saldo)}`
}


const adicionarTransacoes = (transacoes) => {
  let tabela = '';
  transacoes.reverse().forEach(transacao => {
    let linha = `<tr>
                    <td class="coluna-descricao">${formatarDescricao(transacao.descricao)}</td>
                    <td class="coluna-categoria">${transacao.categoria}</td>
                    <td class="coluna-valor">${formatarValor(transacao.valor)}</td>
                  </tr>`
    tabela += linha
  });
  document.getElementById('lista-transacoes-conteudo').innerHTML = tabela;
  
}
// função para capturar valores e adicionar receita e despesa
const adicionarReceita = () => {
    let nomeReceita = document.getElementById('nome-receita').value;
    let valorReceita = parseFloat(document.getElementById('valor-receita').value.replace(",", "."));
    const receita = {
        descricao: nomeReceita,
        valor: valorReceita,
        categoria:'Receita'
    }
    // financas.transacoes.push(receita);
    // financas.saldo = financas.saldo + valorReceita
    // setSaldo()
    // adicionarTransacoes()
    postData(receita)
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
    // financas.transacoes.push(despesa);
    // financas.saldo = financas.saldo - valorDespesa
  
    // setSaldo()
    // adicionarTransacoes()
    postData(despesa)
    document.querySelector('.modal-despesa').style.display = 'none';
    document.getElementById('nome-despesa').value = ''
    document.getElementById('valor-despesa').value = ''
}




// API
const getData = async () => {
  const url = 'https://run.mocky.io/v3/ba2007f7-04ea-465b-985e-b16c11e8061d'
  //comunicação com a API
  const response = await fetch(url)
  const financas = await response.json()
  adicionarTransacoes(financas.transacoes)
  setSaldo(financas.saldo)

}

getData();

const postData = async (transacao) => {
  const url = 'https://run.mocky.io/v3/ba2007f7-04ea-465b-985e-b16c11e8061d';
  const requisicao = await fetch(url, {method: 'POST', body: JSON.stringify(transacao)})
}
