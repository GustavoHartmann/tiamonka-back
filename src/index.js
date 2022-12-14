import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signUpRoute from "./routes/signUp.route.js";
import mainRoute from "./routes/main.route.js";
import categoryRoute from "./routes/Category.route.js";
import singleProductRoute from "./routes/singleProduct.route.js";
import cartRoute from "./routes/cart.route.js";
import addCartEntryRoute from "./routes/addCartEntry.route.js";
import changeCartEntryRoute from "./routes/ChangeCartEntryQuantity.route.js";
import signInRoute from "./routes/signIn.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

//-- ROTAS --
app.use(signUpRoute);
app.use(mainRoute);
app.use(categoryRoute);
app.use(singleProductRoute);
app.use(cartRoute);
app.use(addCartEntryRoute);
app.use(changeCartEntryRoute);
app.use(signInRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at port ${port}`));
