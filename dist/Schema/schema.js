"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Produtos_1 = require("./Queries/Produtos");
const Produtos_2 = require("./Mutations/Produtos");
const QueryBase = new graphql_1.GraphQLObjectType({
    name: "QueryBase",
    fields: {
        BuscarProdutos: Produtos_1.BuscarProdutos,
        BuscarProdutoPorId: Produtos_1.BuscarProdutoPorId,
        ObterQuantidadeProdutos: Produtos_1.ObterQuantidadeProdutos,
        ObterProdutoComMenorEstoque: Produtos_1.ObterProdutoComMenorEstoque,
        ObterProdutoComMaiorEstoque: Produtos_1.ObterProdutoComMaiorEstoque,
        ObterProdutosSemEstoque: Produtos_1.ObterProdutosSemEstoque
    }
});
const MutationBase = new graphql_1.GraphQLObjectType({
    name: "MutationBase",
    fields: {
        AdicionarProduto: Produtos_2.AdicionarProduto,
        AlterarProduto: Produtos_2.AlterarProduto,
        DeletarProduto: Produtos_2.DeletarProduto
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: QueryBase,
    mutation: MutationBase
});
//# sourceMappingURL=schema.js.map