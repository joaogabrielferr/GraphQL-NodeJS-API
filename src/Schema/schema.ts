import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {
BuscarProdutos,BuscarProdutoPorId,ObterQuantidadeProdutos,
ObterProdutoComMenorEstoque,ObterProdutoComMaiorEstoque,ObterProdutosSemEstoque
} from './Queries/Produtos';
import {AdicionarProduto,AlterarProduto,DeletarProduto} from './Mutations/Produtos';

const QueryBase = new GraphQLObjectType({
    name: "QueryBase",
    fields: {
        BuscarProdutos : BuscarProdutos,
        BuscarProdutoPorId : BuscarProdutoPorId,
        ObterQuantidadeProdutos : ObterQuantidadeProdutos,
        ObterProdutoComMenorEstoque : ObterProdutoComMenorEstoque,
        ObterProdutoComMaiorEstoque : ObterProdutoComMaiorEstoque,
        ObterProdutosSemEstoque : ObterProdutosSemEstoque

    }
 });
const MutationBase = new GraphQLObjectType({
    name: "MutationBase",
    fields: {
        AdicionarProduto : AdicionarProduto,
        AlterarProduto : AlterarProduto,
        DeletarProduto : DeletarProduto
    }
 });


export const schema = new GraphQLSchema({

    query: QueryBase,
    mutation: MutationBase
});