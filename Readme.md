# Recipes CRUD

Simple RESTful Recipes CRUD application README.

## Summary
A minimal CRUD API for creating, reading, updating and deleting recipe records. Includes endpoints for listing recipes, retrieving one recipe, creating, updating and deleting.

## Features
- MVC architecture used
- CRUD operations implemented
- MongoDB integration using Mongoose
- Proper error handling and validation
- Postman API documentation
- Clean, readable, and documented code

## Tech stack (example)
- Node.js + Express (API)
- MongoDB 
- Mongoose 
- Postman (for API testing and documentation)


## Installation
1. Clone repo
2. Install dependencies
    ```
    npm install
    ```
3. Configure environment (example .env)
    ```
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/recipes
    ```
4. Start server
    ```
    npm run dev
    ```

## API Endpoints
- GET /recipes
  - List all recipes
- GET /recipes/:id
  - Retrieve a single recipe
- POST /recipes
  - Create new recipe
  - Body (JSON):
     ```
     {
        "title": "Pasta",
        "description": "Simple pasta",
        "ingredients": ["pasta","salt","olive oil"],
        "instructions": "Boil pasta. Drain. Toss with oil.",
        "prepTime": 10,
        "cookTime": 12,
        "servings": 2
     }
     ```
- PUT /recipes/:id
  - Update recipe (full replace or partial depending on implementation)
- DELETE /recipes/:id
  - Delete recipe


