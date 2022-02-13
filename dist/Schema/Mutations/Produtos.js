"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletarProduto = exports.AlterarProduto = exports.AdicionarProduto = void 0;
const graphql_1 = require("graphql");
const Produtos_1 = require("../TypeDefs/Produtos");
const Produtos_2 = require("../../Entities/Produtos");
exports.AdicionarProduto = {
    type: Produtos_1.ProdutosType,
    args: {
        nomeProduto: { type: graphql_1.GraphQLString },
        fabricante: { type: graphql_1.GraphQLString },
        quantidadeEmEstoque: { type: graphql_1.GraphQLInt },
        valor: { type: graphql_1.GraphQLFloat },
    },
    async resolve(_, args) {
        const { nomeProduto, fabricante, quantidadeEmEstoque, valor } = args;
        await Produtos_2.Produtos.insert({ nomeProduto, fabricante, quantidadeEmEstoque, valor });
        return args;
    }
};
exports.AlterarProduto = {
    type: graphql_1.GraphQLString,
    args: {
        id: { type: graphql_1.GraphQLInt },
        nomeProduto: { type: graphql_1.GraphQLString },
        fabricante: { type: graphql_1.GraphQLString },
        quantidadeEmEstoque: { type: graphql_1.GraphQLInt },
        valor: { type: graphql_1.GraphQLFloat }
    },
    async resolve(_, args) {
        const { id, nomeProduto, fabricante, quantidadeEmEstoque, valor } = args.id;
        const produto = await Produtos_2.Produtos.findOne(args.id);
        if (produto === null || produto === undefined) {
            throw new Error("Nao existe um usuário com esse ID");
        }
        else {
            const retorno = await Produtos_2.Produtos.update({ id: args.id }, { nomeProduto: args.nomeProduto, fabricante: args.fabricante, quantidadeEmEstoque: args.quantidadeEmEstoque, valor: args.valor });
            return "produto alterado";
        }
    }
};
exports.DeletarProduto = {
    type: graphql_1.GraphQLString,
    args: {
        id: { type: graphql_1.GraphQLInt }
    },
    async resolve(_, args) {
        const id = args.id;
        const retorno = await Produtos_2.Produtos.delete(id);
        return "Produto Deletado";
    }
};
//# sourceMappingURL=Produtos.js.map