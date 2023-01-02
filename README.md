
<br/>
API built with Node.js, Typescript, GraphQL, Express.js, TypeORM and PostgreSQL

<br/>

# Rotas
Todas as informações sobre as rotas, seus tipos e parâmetros estão disponíveis na seção 'Docs', no GraphiQL.<br/>
Os atributos da tabela são referenciados no graphQL como : (id, nomeProduto, fabricante, quantidadeEmEstoque, valor).<br/>
<br/>
Mutations:<br/>
AdicionarProduto(nomeProduto,fabricante,quantidadeEmEstoque,valor) , retorno: produto adicionado, com exceção do atributo ID
<br/>
AlterarProduto(id,nomeProduto,fabricante,quantidadeEmEstoque,valor) , retorno: mensagem indicando que o produto foi alterado
<br/>
DeletarProduto(id) , retorno: mensagem indicando que o produto foi deletado
<br/>

Queries:<br/>
BuscarProdutos - sem parametros , retorno: lista de Produtos
<br/>
BuscarProdutoPorId(id) , retorno : produto
<br/>
ObterQuantidadeProdutos - sem paramentros ,retorno : inteiro
<br/>
ObterProdutoComMenorEstoque - sem parametros , retorno : produto
<br/>
ObterProdutoComMaiorEstoque - sem parametros , retorno: produto
<br/>
ObterProdutosSemEstoque - sem parametros , retorno : lista de produtos

<br/><br/>
Exemplo:<br/>
```
query{
  
  BuscarProdutos{
	id,
    	nomeProduto,
    	quantidadeEmEstoque,
    	fabricante,
    	valor
  }
  
  
  ObterQuantidadeProdutos
  
  
  ObterProdutosSemEstoque{
    id,
    nomeProduto,
    quantidadeEmEstoque
  }

  
}
```


# Arquivos

<br/>
Os arquivos criados estão na pasta /src:
<br/>
A pasta Entities contém a definição da tabela Produtos
<br/>
A pasta Schema contém a definição das Queries e Mutations para o graphQL
<br/>
O arquivo index.ts é o arquivo principal do server



