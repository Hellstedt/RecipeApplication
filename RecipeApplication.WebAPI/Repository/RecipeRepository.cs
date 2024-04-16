using Microsoft.EntityFrameworkCore;
using RecipeApplication.WebAPI.Data;
using RecipeApplication.WebAPI.Dtos.Recipe;
using RecipeApplication.WebAPI.Interfaces;
using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Repository
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly ApplicationDbContext _context;
        public RecipeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Recipe> CreateAsync(Recipe recipeModel)
        {
            await _context.Recipes.AddAsync(recipeModel);
            await _context.SaveChangesAsync();
            return recipeModel;
        }

        public async Task<Recipe?> DeleteAsync(int id)
        {
            var recipeModel = await _context.Recipes.FirstOrDefaultAsync(x => x.Id == id);

            if (recipeModel == null)
            {
                return null;
            }

            _context.Recipes.Remove(recipeModel);
            _context.SaveChanges();
            return recipeModel;
        }

        public async Task<List<Recipe>> GetAllAsync()
        {
            return await _context.Recipes.ToListAsync();
        }

        public async Task<Recipe?> GetByIdAsync(int id)
        {
            return await _context.Recipes.FindAsync(id);
        }

        public async Task<Recipe?> UpdateAsync(int id, UpdateRecipeRequestDto updateDto)
        {
            var existingRecipe = await _context.Recipes.FirstOrDefaultAsync(x => x.Id == id);
            
            if (existingRecipe == null)
            {
                return null;
            }

            existingRecipe.RecipeName = updateDto.RecipeName;
            existingRecipe.Servings = updateDto.Servings;
            existingRecipe.DifficultyLevel = updateDto.DifficultyLevel;
            existingRecipe.MealType = updateDto.MealType;
            existingRecipe.CuisineType = updateDto.CuisineType;
            existingRecipe.DietaryInformation = updateDto.DietaryInformation;
            existingRecipe.Source = updateDto.Source;
            existingRecipe.Raiting = updateDto.Raiting;
            existingRecipe.Favorite = updateDto.Favorite;

            await _context.SaveChangesAsync();

            return existingRecipe;
        }
    }
}
