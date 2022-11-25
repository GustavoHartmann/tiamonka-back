import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signUpRoute from "./routes/signUp.route.js";
import productsRoute from "./routes/products.route.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//-- ROTAS --
app.use(signUpRoute);
app.use(productsRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at port ${port}`));
