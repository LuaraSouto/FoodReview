import express from "express";

const user = express.Router();

user.get('/', (req, res) => {
    res.send('Rota de Usuários');
});

user.post('/register', async (req, res) => {
    console.log(req.body)
});

export default user;
