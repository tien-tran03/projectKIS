"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
//import { AppDataSource, UserEntity } from '@kis/wb-data';
const src_1 = require("../../../wb_data/src");
const handler = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!src_1.AppDataSource.isInitialized) {
        yield src_1.AppDataSource.initialize();
    }
    const userRepository = src_1.AppDataSource.getRepository(src_1.UserEntity);
    const users = yield userRepository.find();
    return {
        statusCode: 200,
        body: JSON.stringify(users),
    };
});
exports.handler = handler;
