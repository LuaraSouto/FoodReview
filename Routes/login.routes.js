import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import Jwt  from "jsonwebtoken";

const login = express.Router();

login.post('/', async (req, res) => {
    const { email, password } = req.body;
 
    const registeredUser = await User.findOne( 
            { where : { email }} 
    ).catch(
        (err) => {
                console.log("Error:", err)
        }
    )

    if(!registeredUser)
        return res
            .status(400)
            .json({message: "Email ou senha inválidos"})

    //Validar a senha do Usuário
    if(!bcrypt.compareSync(password, registeredUser.password))
        return res
            .status(400)
            .json({message: "Email ou senha inválidos"})

    //geração de TOKEN
    const token = Jwt.sign(
        //PAYLOAD: o que sera armazenado no TOKEN
        {
            id: registeredUser.id,
            email: registeredUser.email
        },
        //secret or private key
        process.env.JWT_SECRET,

        {
            expiresIn: '1h'
        }
    );

    //Envia confirmação e Token para Usuário
    res.json({
        message: "BEM_VINDO!!!",
        token: token
    });
    
});

export default login;