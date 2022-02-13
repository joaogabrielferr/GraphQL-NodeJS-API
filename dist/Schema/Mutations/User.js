"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const data_json_1 = __importDefault(require("../../data.json"));
exports.createUser = {
    type: User_1.UserType,
    args: {
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        const { id, name, email } = args;
        data_json_1.default.push(args);
        return args;
    }
};
//# sourceMappingURL=User.js.map