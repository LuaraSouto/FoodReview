import express from 'express';
import dotenv from 'dotenv';
import router from './Routes/routes.js'
import bodyParser from 'body-parser'
//import testConn from './config/db.js'

// Load Config
dotenv.config({ path: './config/config.env' });

// Run Server
const server = express();
const port = process.env.PORT || 5000;

server.listen(port, console.log("Servidor LEGAL rodando em " + process.env.NODE_ENV + " na porta " + port + "..."));
//testConn();

//Define routes
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use(router);