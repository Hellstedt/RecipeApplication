using RecipeApplication.WebAPI.Dtos.Recipe;
using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Interfaces
{
    public interface IRecipeRepository
    {
        Task<List<Recipe>> GetAllAsync();
        Task<Recipe?> GetByIdAsync(int id);
        Task<Recipe> CreateAsync(Recipe recipeModel);
        Task<Recipe?> UpdateAsync(int id, UpdateRecipeRequestDto recipeDto);
        Task<Recipe?> DeleteAsync(int id);
    }
}
