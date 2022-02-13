"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const cors_1 = __importDefault(require("cors"));
const schema_1 = require("./Schema/schema");
const typeorm_1 = require("typeorm");
const Produtos_1 = require("./Entities/Produtos");
const main = async () => {
    await (0, typeorm_1.createConnection)({
        type: 'postgres',
        url: 'postgres://ntqmfgeh:4-FnHqPoOwB2kDkBPkeON5xHUSmBsSBC@kesavan.db.elephantsql.com/ntqmfgeh',
        synchronize: true,
        entities: [Produtos_1.Produtos]
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.get("/", (req, res) => {
        res.send("API online, vá para a rota /graphql para testar as endpoints com a GUI graphiql");
    });
    app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
        schema: schema_1.schema,
        graphiql: true
    }));
    const port = process.env.PORT || 3001;
    app.listen(port);
};
main().catch((erro) => {
    console.log("ERRO:", erro);
});
//# sourceMappingURL=index.js.map