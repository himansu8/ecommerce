import userModel from '../models/userModel.js'
import JWT from 'jsonwebtoken'
import bcrypt from "bcrypt";
import config from '../config/config.js';

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body

        //validations
        if (!name) {
            return res.send({ error: "Name is Required" });
        }
        if (!email) {
            return res.send({ error: "Email is Required" });
        }
        if (!password) {
            return res.send({ error: "Password is Required" });
        }
        if (!phone) {
            return res.send({ error: "Phone no is Required" });
        }
        if (!address) {
            return res.send({ error: "Address is Required" });
        }

        const user = await userModel.findOne({ email })

        if (user) {
            return res.status(401).send({
                sucess: false,
                message: "Already Register Please Login"
            })
        }
        const hashpassword = await bcrypt.hash(password, 12)

        const userData = {
            name,
            email,
            password: hashpassword,
            phone,
            address
        }

        await userModel.create(userData)

        res.status(200).send({
            success: true,
            message: "user register successfully",
            userData
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Errro in Registeration",
            error,
        });
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;


        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
            });
        }
        let user = await userModel.findOne({ email: email })

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registerd",
            });
        }

        let matchPassword = await bcrypt.compare(password, user.password);

        if (!matchPassword) {
            return res.status(404).send({
                success: false,
                message: "Invalid Password",
            });
        }

        const token = JWT.sign(
            { _id: user._id }, config.PRIVATE_KEY
        )

        res.status(200).send({
            success: true,
            message: "login successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                adddress: user.address,
            },
            token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
}