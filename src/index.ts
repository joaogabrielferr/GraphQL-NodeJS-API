import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import cors from 'cors';
import {schema} from './Schema/schema';
import {createConnection} from 'typeorm';
import {Produtos} from './Entities/Produtos';

const main = async () =>{

    //usando o ElephantSQL para hostear o banco de dados
    await createConnection({
        type:'postgres',
        url: 'postgres://ntqmfgeh:4-FnHqPoOwB2kDkBPkeON5xHUSmBsSBC@kesavan.db.elephantsql.com/ntqmfgeh',
        synchronize: true,
        entities: [Produtos]
    });

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get("/",(req,res)=>{
        res.send("API online, vá para a rota /graphql para testar as endpoints com a GUI graphiql");
    });


    

    app.use("/graphql",graphqlHTTP({
        schema,
        graphiql : true
    }))

    const port = process.env.PORT || 3001;
    app.listen(port)


}
main().catch((erro)=>{
    console.log("ERRO:",erro);
});

