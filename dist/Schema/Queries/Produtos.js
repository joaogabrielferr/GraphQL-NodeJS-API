"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObterProdutosSemEstoque = exports.ObterProdutoComMaiorEstoque = exports.ObterProdutoComMenorEstoque = exports.ObterQuantidadeProdutos = exports.BuscarProdutoPorId = exports.BuscarProdutos = void 0;
const graphql_1 = require("graphql");
const Produtos_1 = require("../TypeDefs/Produtos");
const Produtos_2 = require("../../Entities/Produtos");
const typeorm_1 = require("typeorm");
exports.BuscarProdutos = {
    type: new graphql_1.GraphQLList(Produtos_1.ProdutosType),
    async resolve() {
        return await Produtos_2.Produtos.find();
    }
};
exports.BuscarProdutoPorId = {
    type: Produtos_1.ProdutosType,
    args: {
        id: { type: graphql_1.GraphQLInt }
    },
    async resolve(_, args) {
        return await Produtos_2.Produtos.findOne(args.id);
    }
};
exports.ObterQuantidadeProdutos = {
    type: graphql_1.GraphQLString,
    async resolve() {
        const retorno = await (0, typeorm_1.getManager)().query('SELECT COUNT(id) FROM "public"."produtos"');
        return retorno[0].count;
    }
};
exports.ObterProdutoComMenorEstoque = {
    type: Produtos_1.ProdutosType,
    async resolve() {
        const retorno = await (0, typeorm_1.getManager)().
            query('SELECT * FROM "public"."produtos" ORDER BY "produtos"."quantidadeEmEstoque" LIMIT 1 ');
        return retorno[0];
    }
};
exports.ObterProdutoComMaiorEstoque = {
    type: Produtos_1.ProdutosType,
    async resolve() {
        const retorno = await (0, typeorm_1.getManager)().
            query('SELECT * FROM "public"."produtos" WHERE "produtos"."quantidadeEmEstoque" = (SELECT MAX("produtos"."quantidadeEmEstoque") FROM "public"."produtos")');
        return retorno[0];
    }
};
exports.ObterProdutosSemEstoque = {
    type: new graphql_1.GraphQLList(Produtos_1.ProdutosType),
    async resolve() {
        return await (0, typeorm_1.getManager)().query('SELECT * FROM "public"."produtos" WHERE "produtos"."quantidadeEmEstoque" < 5');
    }
};
//# sourceMappingURL=Produtos.js.map