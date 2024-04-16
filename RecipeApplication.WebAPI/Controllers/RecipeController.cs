using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipeApplication.WebAPI.Data;
using RecipeApplication.WebAPI.Dtos.Recipe;
using RecipeApplication.WebAPI.Interfaces;
using RecipeApplication.WebAPI.Mappers;

namespace RecipeApplication.WebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IRecipeRepository _recipeRepo;
        public RecipeController(ApplicationDbContext context, IRecipeRepository recipeRepo)
        {
            _context = context;
            _recipeRepo = recipeRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRecipes() 
        { 
            var recipes = await _recipeRepo.GetAllAsync();

            var recipeDto = recipes.Select(s => s.ToRecipeDtoFromRecipeModel());

            return Ok(recipes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRecipeById(int id) 
        {
            var recipe = await _recipeRepo.GetByIdAsync(id);

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
            await _recipeRepo.CreateAsync(RecipeModel);
            return CreatedAtAction(nameof(GetRecipeById), new { id = RecipeModel.Id }, RecipeModel);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateRecipe([FromRoute] int id, [FromBody] UpdateRecipeRequestDto UpdateDto)
        {
            var RecipeModel = await _recipeRepo.UpdateAsync(id, UpdateDto);

            if (RecipeModel == null)
            {
                return NotFound();
            }

            return Ok(RecipeModel.ToRecipeDtoFromRecipeModel());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteRecipe([FromRoute] int id)
        {
            var RecipeModel = await _recipeRepo.DeleteAsync(id);

            if (RecipeModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
