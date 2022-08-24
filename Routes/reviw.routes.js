import express from "express";

const review = express.Router();

review.get('/', (req, res) => {
    res.send('Rota de Reviw');
});

export default review;