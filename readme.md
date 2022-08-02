/*
    * * * * * * * *
    
    DESAFIO PLANILHA DE GASTOS:
    
    1. Desenvolva uma função que pedirá ao usuário que insira dados
    de uma nova despesa. Essa função quando chamada abrirá um prompt
    na tela com a pergunta: "Qual a descricao de sua despesa?".
    Depois de respondida, a mesma função abrirá um novo prompt com a
    pergunta: "Qual o valor de sua despesa?".
    
    2. Desenvolva uma nova função que pedirá ao usuário que insira
    dados de uma nova receita. Assim como a função acima essa deverá 
    pedir informações da descrição e valor da receita.
    
    3. Note que devemos interpretar o valor digitado pelo usuário como um
    number, e o resultado que recebemos de um prompt é uma string. Por isso
    é necessário fazer a conversão. Antes disso vamos validar se o que foi
    digitado é um número. Caso não seja um número deve-se enviar um alerta
    avisando ao usuário que aquele campo deve ser um número.
    Obs: aqui no Brasil temos a convenção de usar a vírgula como símbolo decimal
    mas o padrão internacional é o ponto, por isso vamos também validar antes de
    converter para número, que o valor digitado não contém uma vírgula.
    Se contiver, precisamos enviar um alerta ao usuário avisando que o padrão
    de símbolo decimal deve ser um ponto.
    
    * * * * * * * *
*/


/*
    * * * * * * * *
    
    DESAFIO PLANILHA DE GASTOS:
    
    1. Monte um objeto 'financas' que represente os dados apresentados 
    nessa planilha de gastos.
    
    Esse objeto financas deve conter um campo 'saldo' e um array
    'transacoes'. Esse array deve ser composto de objetos que contém os
    campos 'descricao', 'categoria' e 'valor'.
    
    2. Desenvolva uma função que exiba no console (console.log) os 
    valores do objeto 'transacoes' nesse formato:

    Saldo: R$ 10,00
    
    Transacao 1:
    [Despesa] Salgado na faculdade
    R$ 5,50
    
    Transacao 2:
    [Despesa] Livro Clean Code
    R$ 50,00
    
    Transacao 3:
    [Receita] Grana do estágio
    R$ 80,00
    
    Transacao 4:
    [Despesa] Capinha pro celular
    R$ 15,00 
    
    
    3. Na função de adicionar despesa desenvolvida no exercício passado,
    monte a resposta recebida do usuário em um objeto no formado:
    { descricao: '', valor: 0.00, categoria: '' }
    sendo a categoria o texto 'Despesa' ou 'Receita'.
    Depois adicione esse objeto no array de transacoes do objeto financas
    criado no primeiro exercício.
    Outra atualização do objeto financas é o saldo. Case esteja adicionando
    uma receita, você deve somar o valor digitado pelo usuário. Caso seja 
    uma despesa, você deve subtrair o valor digitado pelo usuário.
    
    Faça a mesma coisa com a função adicionar receita.
    
    * * * * * * * *
*/
/*
    * * * * * * * *
    
    DESAFIO PLANILHA DE GASTOS:
    
    Nesse exercício é necessário preencher na tela os dados do objeto 'financas'.
    
    1. Desenvolva uma função que exibe o financas.saldo no lugar do texto
    'Carregando saldo...'.
    
    2. Desenvolva uma função que exibe financas.transacoes na tabela no lugar do
    texto 'Carregando dados...'. Para cada transacao será necessário criar
    uma nova linha na tabela, e para cada propriedade uma nova coluna. As
    colunas devem ter o atributo classe como 'coluna-*****' substituindo o
    ***** pelo nome da propriedade, como 'coluna-descricao', 'coluna-categoria'
    ou 'coluna-valor'.
    
    3. Para que os botões Adicionar despesa e Adicionar receita funcionem é
    necessário atribuir as funções de prompt criadas na primeira semana ao clique
    desses botões. E depois de adicionar o resultado ao objeto financas, chame as 
    funções de exibicação de dados criadas nos exercícios acima para que os valores
    da tela sejam atualizados.
    
    * * * * * * * *
*/

/*
    * * * * * * * *
   DESAFIO PLANILHA DE GASTOS:

    Nesse exercício vamos integrar com dados da API ao invés de trabalhar
    com um objeto local.
    
    1. Primeiramente é necessário criar uma função que chama um GET na seguinte
    API: https://run.mocky.io/v3/ba2007f7-04ea-465b-985e-b16c11e8061d
    
    O resultado será usado para preencher o saldo e transacoes na tela.
    Use as funções criadas no exercício anterior para preencher os dados na tela,
    a única diferença é que agora a fonte dos dados é uma API e não o objeto
    local.
    
    2. Nas funções de clique da receita e despesa, não precisaremos mais atribuir
    valores ao objeto local. Agora precisaremos integrar com uma API para enviar 
    os dados digitados pelo usuário. Então integre com a seguinte API: 
    https://run.mocky.io/v3/c50981e7-1c9b-471c-9128-3adf362cf36f
    Envie nessa API um POST com os dados digitados pelo usuário em um objeto
    no formato: { descricao: '', valor: 0 }
    Toda a validação de número continua valendo.
    
    3. Depois de enviar os dados digitados pelo cliente para a API é necessário
    buscar novamente os dados para exibir na tela. Deve-se chamar a função de
    busca de dados ao final da função de clique dos botões de despesa e receita.
    
    * * * * * * * *
*/
/*
