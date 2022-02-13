"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const data_json_1 = __importDefault(require("../../data.json"));
exports.getAllUsers = {
    type: new graphql_1.GraphQLList(User_1.UserType),
    resolve() {
        return data_json_1.default;
    }
};
//# sourceMappingURL=User.js.map