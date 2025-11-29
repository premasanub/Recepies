import recipes from "../RecipesModel/recipeSchema.js";




// CREATING a recipes
export const createRecipe = async (req,res)=>{
    try{
   const newRecipe =new recipes (req.body)
   await newRecipe.save();
   res.status(200).json({message:"Recipe created successfully " ,data:newRecipe})
    }
    catch(error){
   res.status(502).json({message:"cannot add recipe error in the create app"})

    }
};

//Get recipes
export const getAllRecipe = async (req,res)=>{
    try{
        const getRecipe =await recipes.find();
        res
        .status(200)
        .json({message:"Recipes Retrieved successfully",data:getRecipe})
    }
    catch(error){
         res
         .status(502)
         .json({message:"cannot get recipe error in the get recipe"})

    }
};

// get product by id
export const getRecipeById = async (req,res) => {
    try{
        const recipeId= req.params.id;
        const recipeDetails=await recipes.findById(recipeId);
        if (!recipeDetails) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }
     res.status(200)
        .json({message:"Recipes Retrieved By Id successfully",data:recipeDetails})
    }
    catch(error){
        res
         .status(502)
         .json({message:"cannot get recipe by id, error in the get by id recipe"})

    }
};

//Update Recipe

export const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const { name,duration,ingredients  } = req.body;
    const result = await recipes.findByIdAndUpdate(
      { _id: recipeId },
      { name, duration,ingredients },
      { new: true }
    );
    if (!result) {
      return res.status(404).json({ message: "Recipe Not Found" });
    }
    res
      .status(200)
      .json({ message: "Recipe Updated Successfully", data: result });
  } catch (error) {
    res.status(504).json({
      message: "Cannot Update the recipe, Error in Update recipe"
    });
  }
};

//delete Recipe
export const deleteRecipe= async (req,res)=>{
  try{
    const recipeId=req.params.id;
    const result = await recipes.findByIdAndDelete({_id:recipeId});
 if (!result) {
      return res.status(404).json({ message: "Recipe Not Deleted" });
    }
    res
      .status(200)
      .json({ message: "Recipe Deleted Successfully", data: result });

  }
  catch(error){
      res.status(502).json({
        message:"cannot delete the Recipe, Error in delete Recipe "
      });
  }
};