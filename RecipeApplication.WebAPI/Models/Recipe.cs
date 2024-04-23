using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecipeApplication.WebAPI.Models
{
    public class Recipe
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string RecipeName { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public TimeSpan? CookingTime { get; set; }
        public ICollection<Instruction>? Instructions { get; set; }
        public ICollection<RecipeIngredient> RecipeIngredients { get; set; }
        public int Servings { get; set; }
        public string? DifficultyLevel { get; set; }
        public string? MealType { get; set; }
        public string? CuisineType { get; set; }
        public string? DietaryInformation { get; set; }
        public string? Source { get; set; }
        [Range(1, 5, ErrorMessage = "Rating must be between 1 and 5")]
        [Column(TypeName = "decimal(2,1)")]
        public decimal? Raiting { get; set; }
        public bool Favorite { get; set; }
        public string? ImageUrl { get; set; }
        public ICollection<UserRecipe> UserRecipes { get; set; }
    }
}
