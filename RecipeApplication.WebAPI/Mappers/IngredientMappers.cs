using RecipeApplication.WebAPI.Dtos.IngredientDtos;
using RecipeApplication.WebAPI.Dtos.Recipe;
using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Mappers
{
    public static class IngredientMappers
    {
        public static SelectIngredientDto ToSelectIngredientDtoFromIngredientModel(this Ingredient ingredientModel)
        {
            return new SelectIngredientDto
            {
                Id = ingredientModel.Id,
                IngredientName = ingredientModel.IngredientName,
            };
        }
    }
}
