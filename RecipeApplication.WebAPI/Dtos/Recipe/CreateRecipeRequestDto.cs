using RecipeApplication.WebAPI.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using RecipeApplication.WebAPI.Dtos.Instruction;
using RecipeApplication.WebAPI.Dtos.RecipeIngredientDtos;

namespace RecipeApplication.WebAPI.Dtos.Recipe
{
    public class CreateRecipeRequestDto
    {
        public string RecipeName { get; set; }
        public int Servings { get; set; }
        public ICollection<InstructionDto>? Instructions { get; set; }
        public ICollection<RecipeIngredientDto>? RecipeIngredients { get; set; }
        public string? DifficultyLevel { get; set; }
        public string? MealType { get; set; }
        public string? CuisineType { get; set; }
        public string? DietaryInformation { get; set; }
        public string? Source { get; set; }
        public string? ImageUrl { get; set; }
        public bool Favorite { get; set; }
    }
}
