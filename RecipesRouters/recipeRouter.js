import express from "express";
import { createRecipe, deleteRecipe, getAllRecipe, getRecipeById, updateRecipe } from "../RecipesController/recipeController.js";




const router = express.Router();


router.post("/create",createRecipe)
router.get("/getRecipe",getAllRecipe)
router.get("/get/:id",getRecipeById)
router.put("/update/:id",updateRecipe)
router.delete("/deleteRecipe/:id",deleteRecipe)

export default router;
