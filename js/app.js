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



// função para capturar valores e adicionar receita e despesa
const adicionarReceita = () => {
    let nomeReceita = document.getElementById('nome-receita').value;
    let valorReceita = parseFloat(document.getElementById('valor-receita').value);


    document.querySelector('.modal-receita').style.display = 'none';
}

const adicionarDespesa = () => {
    let nomeDespesa= document.getElementById('nome-despesa').value;
    let valorDespesa = parseFloat(document.getElementById('valor-despesa').value);


    document.querySelector('.modal-despesa').style.display = 'none';
}