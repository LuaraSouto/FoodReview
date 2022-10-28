import express from "express";
import Restaurant from "../models/Restaurant.js";
import verifyToken from "../config/auth.js";

const restaurant = express.Router();

restaurant.get('/', (req, res) => {
    res.send('Rota de Restaurantes');
});

restaurant.post('/register', async (req, res) => {
    const { name, type, description, address } = req.body;

    const alreadyExistsRestaurant = await restaurant.findOne(
        { where: { name } }
    ).catch((err) => console.log("Error: ", err));

    if (alreadyExistsRestaurant) {
        console.log("Restaurante existente: " + alreadyExistsRestaurant);
        return res
            .status(409)
            .json({ message: "Nome já utilizado por outro restaurante"})
    }

    const newRestaurant = new Restaurant({ name, type, description, address });
    const savedRestaurant = await newRestaurant.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Não foi possível cadastrar o restaurante"});
    });

    if (savedRestaurant) {
        console.log(savedRestaurant);
        res.json({ message: "Obrigado pelo cadastro!" })
    } 


});
export default restaurant;