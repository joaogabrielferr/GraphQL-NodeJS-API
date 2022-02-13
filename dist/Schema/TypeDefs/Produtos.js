"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosType = void 0;
const graphql_1 = require("graphql");
exports.ProdutosType = new graphql_1.GraphQLObjectType({
    name: "Produtos",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        nomeProduto: { type: graphql_1.GraphQLString },
        fabricante: { type: graphql_1.GraphQLString },
        quantidadeEmEstoque: { type: graphql_1.GraphQLInt },
        valor: { type: graphql_1.GraphQLFloat },
    })
});
//# sourceMappingURL=Produtos.js.map