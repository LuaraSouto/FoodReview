import express from 'express';
import dotenv from 'dotenv';

// Load Config
dotenv.config({ path: './config/config.env' });

// Run Server
const server = express();
const port = process.env.PORT || 5000;

server.listen(port, console.log("Servidor LEGAL rodando em " + process.env.NODE_ENV + " na porta " + port + "..."));

server.get('/', (req, res) => {
    res.send("Página Inicial")
});

server.get('/user', (req, res) => {
    res.send('Página do Usuário')
})

