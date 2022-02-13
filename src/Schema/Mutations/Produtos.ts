import { GraphQLFloat, GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { ProdutosType } from "../TypeDefs/Produtos";
import data from '../../data.json';
import {Produtos} from '../../Entities/Produtos';



interface InterfaceProdutos{
    id?:number,
    nomeProduto:string,
    fabricante:string,
    quantidadeEmEstoque:number,
    valor:number;
}


export const AdicionarProduto = {

    type: ProdutosType,
    args:{
        nomeProduto: { type: GraphQLString},
        fabricante: { type: GraphQLString},
        quantidadeEmEstoque: { type: GraphQLInt},
        valor: { type: GraphQLFloat},
    },
    async resolve(_:any,args:any):Promise<InterfaceProdutos[]>{
        const {nomeProduto,fabricante,quantidadeEmEstoque,valor} = args;

        await Produtos.insert({nomeProduto,fabricante,quantidadeEmEstoque,valor});
        
        return args;
    }

}

export const AlterarProduto = {

    type: GraphQLString,
    args:{
        id : {type: GraphQLInt},
        nomeProduto: { type: GraphQLString},
        fabricante: { type: GraphQLString},
        quantidadeEmEstoque: { type: GraphQLInt},
        valor: { type: GraphQLFloat}
    },
    async resolve(_:any,args:any){
        const {id,nomeProduto,fabricante,quantidadeEmEstoque,valor} = args.id;
        const produto = await Produtos.findOne(args.id);

        if(produto=== null || produto === undefined)
        {
            throw new Error("Nao existe um usuário com esse ID");
        }else
        {
            const retorno = await Produtos.update({id:args.id},{nomeProduto:args.nomeProduto,fabricante:args.fabricante,quantidadeEmEstoque:args.quantidadeEmEstoque,valor:args.valor});
            return "produto alterado";
        }
    }
}

export const DeletarProduto = {

    type: GraphQLString,
    args:{
        id: {type:GraphQLInt}
    },
    async resolve(_:any,args:any){
        const id = args.id;
        const retorno = await Produtos.delete(id);
        return "Produto Deletado";
    }
}