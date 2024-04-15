using Microsoft.AspNetCore.Mvc;
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
        public IActionResult GetAllRecipes() 
        { 
            var recipes = _context.Recipes.ToList();

            return Ok(recipes);
        }

        [HttpGet("{id}")]
        public IActionResult GetRecipeById(int id) 
        {
            var recipe = _context.Recipes.Find(id);

            if (recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
        }

        [HttpPost]
        public IActionResult CreateRecipe([FromBody] CreateRecipeRequestDto RecipeDto)
        {
            var RecipeModel = RecipeDto.ToRecipeFromCreateDto();
            _context.Recipes.Add(RecipeModel);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetRecipeById), new { id = RecipeModel.Id }, RecipeModel);
        }
    }
}
