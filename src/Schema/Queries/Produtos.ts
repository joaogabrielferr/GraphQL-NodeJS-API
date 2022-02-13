import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import {ProdutosType} from '../TypeDefs/Produtos';
import data from '../../data.json';
import {Produtos} from '../../Entities/Produtos';
import { getManager } from 'typeorm';

interface InterfaceProdutos{
    id:number,
    nomeProduto:string,
    fabricante:string,
    quantidadeEmEstoque:number,
    valor:number
}

export const BuscarProdutos = {

    type: new GraphQLList(ProdutosType),
    async resolve(): Promise<InterfaceProdutos[]>{ 
        return await Produtos.find();
    }
}

export const BuscarProdutoPorId = {

    type: ProdutosType,
    args:{
        id:{ type: GraphQLInt}
    },
    async resolve(_:any,args:any):Promise<InterfaceProdutos[]>{
        return await Produtos.findOne(args.id);        
    }

}


export const ObterQuantidadeProdutos = {

    type: GraphQLString,
    async resolve():Promise<string>{
        //a documentacao do typeorm nao tem nenhum exemplo com count, foi mais facil escrever a
        //query com sql de uma vez
        const retorno = await getManager().query('SELECT COUNT(id) FROM "public"."produtos"');
        return retorno[0].count;
        //O retorno é [{count: 'numero'}]
    }
}

export const ObterProdutoComMenorEstoque = {

    type: ProdutosType,
    async resolve():Promise<InterfaceProdutos>{

        const retorno = await getManager().
        query('SELECT * FROM "public"."produtos" ORDER BY "produtos"."quantidadeEmEstoque" LIMIT 1 ');
        return retorno[0];
    }
}
export const ObterProdutoComMaiorEstoque = {

    type: ProdutosType,
    async resolve():Promise<InterfaceProdutos>{

        const retorno = await getManager().
        query('SELECT * FROM "public"."produtos" WHERE "produtos"."quantidadeEmEstoque" = (SELECT MAX("produtos"."quantidadeEmEstoque") FROM "public"."produtos")');
        return retorno[0];
    }
}

export const ObterProdutosSemEstoque = {

    type : new GraphQLList(ProdutosType),
    async resolve():Promise<InterfaceProdutos[]>{

        return await getManager().query(
            'SELECT * FROM "public"."produtos" WHERE "produtos"."quantidadeEmEstoque" < 5'
        );
    }

}

