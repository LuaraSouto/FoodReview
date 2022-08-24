import express from "express";

const restaurant = express.Router();

restaurant.get('/', (req, res) => {
    res.send('Rota de Restaurante');
});

export default restaurant;