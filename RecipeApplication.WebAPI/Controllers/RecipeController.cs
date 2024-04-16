using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipeApplication.WebAPI.Data;
using RecipeApplication.WebAPI.Dtos.Recipe;
using RecipeApplication.WebAPI.Mappers;

namespace RecipeApplication.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public RecipeController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRecipes() 
        { 
            var recipes = await _context.Recipes.ToListAsync();

            var recipeDto = recipes.Select(s => s.ToRecipeDtoFromRecipeModel());

            return Ok(recipes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRecipeById(int id) 
        {
            var recipe = await _context.Recipes.FindAsync(id);

            if (recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
        }

        [HttpPost]
        public async Task<IActionResult> CreateRecipe([FromBody] CreateRecipeRequestDto RecipeDto)
        {
            var RecipeModel = RecipeDto.ToRecipeFromCreateDto();
             await _context.Recipes.AddAsync(RecipeModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRecipeById), new { id = RecipeModel.Id }, RecipeModel);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateRecipe([FromRoute] int id, [FromBody] UpdateRecipeRequestDto UpdateDto)
        {
            var RecipeModel = await _context.Recipes.FirstOrDefaultAsync(x => x.Id == id);

            if (RecipeModel == null)
            {
                return NotFound();
            }

            RecipeModel.RecipeName = UpdateDto.RecipeName;
            RecipeModel.Servings = UpdateDto.Servings;
            RecipeModel.DifficultyLevel = UpdateDto.DifficultyLevel;
            RecipeModel.MealType = UpdateDto.MealType;
            RecipeModel.CuisineType = UpdateDto.CuisineType;
            RecipeModel.DietaryInformation = UpdateDto.DietaryInformation;
            RecipeModel.Source = UpdateDto.Source;
            RecipeModel.Raiting = UpdateDto.Raiting;
            RecipeModel.Favorite = UpdateDto.Favorite;

            await _context.SaveChangesAsync();
            return Ok(RecipeModel);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteRecipe([FromRoute] int id)
        {
            var RecipeModel = await _context.Recipes.FirstOrDefaultAsync(x => x.Id == id);

            if (RecipeModel == null)
            {
                return NotFound();
            }

            _context.Recipes.Remove(RecipeModel);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
