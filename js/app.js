

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


