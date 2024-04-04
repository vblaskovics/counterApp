"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Server side code is running.");
const client_1 = require("@libsql/client");
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const client = (0, client_1.createClient)({
    url: "libsql://counter-szankdav.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTA3NjE4MTgsImlkIjoiNWJhYmIwOTItODk0Mi00NTU1LWI3NDAtYWM3OTE0OWI1MTNjIn0.tuaOahYx0A4DoDyGkbXoRUg-YS8_flmeeYzU7vlSYMTO1KDT86jV6EzjEmozYtdui1mhBg-rXydKA5_zatmCCQ",
});
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.static(path.join(__dirname, '../src/public')));
app.use('/css', express_1.default.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express_1.default.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/ts', express_1.default.static(path.join(__dirname, './public')));
app.listen(port, () => {
    console.log("Listening in 8080!");
});
app.get('/', (req, res) => {
    try {
        res.sendFile(__dirname + '../src/public/index.html');
    }
    catch (error) {
        res.status(404).json({ error: "Page not found!" });
    }
});
app.get('/getNumber', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield client.execute("SELECT countedNumber FROM countedNumbers");
        const numberFromServer = result.rows[0]['countedNumber'];
        console.log(numberFromServer === null || numberFromServer === void 0 ? void 0 : numberFromServer.toString());
        res.status(200).json(numberFromServer);
    }
    catch (error) {
        console.error("Error while fetching the data:", error);
        res.status(500).json({ error: "An error occurred while fetching data." });
    }
}));
app.put("/increased", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.execute("UPDATE countedNumbers SET countedNumber = countedNumber + 1");
        res.sendStatus(201);
    }
    catch (error) {
        console.error("Error while increasing the number:", error);
        res.status(500).json({ error: "An error occurred increasing the number." });
    }
}));
app.put("/decreased", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.execute("UPDATE countedNumbers SET countedNumber = countedNumber - 1");
        res.sendStatus(201);
    }
    catch (error) {
        console.error("Error while decreasing the number:", error);
        res.status(500).json({ error: "An error occurred decreasing the number." });
    }
}));
