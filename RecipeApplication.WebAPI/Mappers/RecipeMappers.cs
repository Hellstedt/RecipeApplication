using RecipeApplication.WebAPI.Dtos.Recipe;
using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Mappers
{
    public static class RecipeMappers
    {
        public static Recipe ToRecipeFromCreateDto(this CreateRecipeRequestDto RecipeDto)
        {
            return new Recipe
            {
                RecipeName = RecipeDto.RecipeName,
                DateCreated = DateTime.Now,
                CookingTime = null,
                Servings = RecipeDto.Servings,
                DifficultyLevel = RecipeDto.DifficultyLevel,
                MealType = RecipeDto.MealType,
                CuisineType = RecipeDto.CuisineType,
                DietaryInformation = RecipeDto.DietaryInformation,
                Source = RecipeDto.Source,
                Raiting = RecipeDto.Raiting,
                Favorite = RecipeDto.Favorite,
            };
        }
    }
}
