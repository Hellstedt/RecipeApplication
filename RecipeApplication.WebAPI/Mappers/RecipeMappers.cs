using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using RecipeApplication.WebAPI.Dtos.Recipe;
using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Mappers
{
    public static class RecipeMappers
    {
        public static RecipeDto ToRecipeDtoFromRecipeModel(this Recipe recipeModel)
        {
            return new RecipeDto
            {
                RecipeName = recipeModel.RecipeName,
                Servings = recipeModel.Servings,
                DifficultyLevel = recipeModel.DifficultyLevel,
                MealType = recipeModel.MealType,
                CuisineType = recipeModel.CuisineType,
                DietaryInformation = recipeModel.DietaryInformation,
                Source = recipeModel.Source,
                Raiting = recipeModel.Raiting,
                Favorite = recipeModel.Favorite,
            };
        }
        public static Recipe ToRecipeFromCreateDto(this CreateRecipeRequestDto recipeDto)
        {
            return new Recipe
            {
                RecipeName = recipeDto.RecipeName,
                DateCreated = DateTime.Now,
                CookingTime = null,
                Servings = recipeDto.Servings,
                DifficultyLevel = recipeDto.DifficultyLevel,
                MealType = recipeDto.MealType,
                CuisineType = recipeDto.CuisineType,
                DietaryInformation = recipeDto.DietaryInformation,
                Source = recipeDto.Source,
                Raiting = null,
                Favorite = recipeDto.Favorite,
            };
        }
    }
}
