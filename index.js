import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB  from "./DbConnection/dbConfig.js";
import router from "./RecipesRouters/recipeRouter.js";

//Dotenv configuration

dotenv.config();

//Express initialization

const app = express();

//default middleware

app.use(express.json());

app.use(cors());

//database connection

connectDB();

//Default Route

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the API");
});

//custom router

app.use("/api/recipes",router)


//Port

const port = process.env.PORT || 5000;

//server starting logic

app.listen(port, () => {
  console.log("server started");
});