using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RecipeApplication.WebAPI.Interfaces;
using RecipeApplication.WebAPI.Mappers;

namespace RecipeApplication.WebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        private readonly IIngredientRepository _ingredientRepo;
            
        public IngredientController(IIngredientRepository ingredientRepo)
        {
            _ingredientRepo = ingredientRepo;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAllIngredient()
        {
            var ingredients = await _ingredientRepo.GetAllAsync();

            var SelectingredientDto = ingredients.Select(s => s.ToSelectIngredientDtoFromIngredientModel());

            return Ok(SelectingredientDto);
        }
    }
}
