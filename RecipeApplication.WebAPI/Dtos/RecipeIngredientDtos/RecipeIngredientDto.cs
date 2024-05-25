using RecipeApplication.WebAPI.Dtos.IngredientDtos;
using RecipeApplication.WebAPI.Dtos.UnitDtos;
using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Dtos.RecipeIngredientDtos
{
    public class RecipeIngredientDto
    {
        public int RecipeId { get; set; }
        public int IngredientId { get; set; }
        public IngredientDto Ingredient { get; set; }
        public int UnitId { get; set; }
        public UnitDto Unit { get; set; }
        public decimal Quantity { get; set; }
    }
}
