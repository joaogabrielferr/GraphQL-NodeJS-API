# DesafioTasken
API para o teste técnico da Tasken.
<br/>
Stack: Node.js, Typescript, GraphQL, Express.js, TypeORM, PostgreSQL

<br/>
O deploy da API foi feita no Heroku, no seguinte endereço: https://desafiotasken.herokuapp.com/graphql
<br/>(Como o deploy foi feito no Heroku o primeiro load pode demorar até 10 segundos) É possível testar as rotas utilizando o in-Browser IDE GraphiQL acessando o endereço acima, onde é possível escrever as queries e mutations. O banco de dados escolhido foi o PostgreSQL, que está hosteado na plataforma ElephantSQL. O typeORM é utilizado para a conexão com o banco e criação dos comandos em SQL. A tabela Produtos já foi criada no banco e já contém algumos registros.
<br/>

# Rotas
Todas as informações sobre as rotas, seus tipos e parâmetros também estão disponíveis na seção 'Docs', no GraphiQL.
Mutations:<br/>
AdicionarProduto(nomeProduto,fabricante,quantidadeEmEstoque,valor) , retorno: produto adicionado, com exceção do campo ID
<br/>
AlterarProduto(id,nomeProduto,fabricante,quantidadeEmEstoque,valor) , retorno: mensagem indicando que o produto foi alterado
<br/>
DeletarProduto(id) , retorno: mensagem indicando que o produto foi deletado
<br/>

Queries:<br/>
BuscarProdutos - sem parametros , retorno: lista de Produtos no banco
<br/>
BuscarProdutoPorId(id) , retorno : produto com a ID
<br/>
ObterQuantidadeProdutos - sem paramentros
<br/>
ObterProdutoComMenorEstoque - sem parametros
<br/>
ObterProdutoComMaiorEstoque - sem parametros
<br/>
ObterProdutosSemEstoque - sem parametros


# Arquivos

<br/>
Os arquivos criados estão na pasta /src:
<br/>
A pasta Entities contém a definição da tabela Produtos
<br/>
A pasta Schema contém a definição das Queries e Mutations para o graphQL
<br/>
O arquivo index.ts é o arquivo principal do server



