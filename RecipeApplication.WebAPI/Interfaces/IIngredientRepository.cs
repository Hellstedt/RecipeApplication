using RecipeApplication.WebAPI.Dtos.Recipe;
using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Interfaces
{
    public interface IIngredientRepository
    {
        Task<List<Ingredient>> GetAllAsync();
    }
}
