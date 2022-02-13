import {GraphQLObjectType,GraphQLID,GraphQLString, GraphQLIncludeDirective, GraphQLInt, GraphQLFloat} from 'graphql';

export const ProdutosType = new GraphQLObjectType({
    name:"Produtos",
    fields: () =>({
        id : {type: GraphQLID},
        nomeProduto: { type: GraphQLString},
        fabricante: { type: GraphQLString},
        quantidadeEmEstoque: { type: GraphQLInt},
        valor: { type: GraphQLFloat},
    })
});