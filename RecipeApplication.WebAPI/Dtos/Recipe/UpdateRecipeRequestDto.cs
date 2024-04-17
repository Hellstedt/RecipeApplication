namespace RecipeApplication.WebAPI.Dtos.Recipe
{
    public class UpdateRecipeRequestDto
    {
        public string RecipeName { get; set; }
        public int Servings { get; set; }
        public string? DifficultyLevel { get; set; }
        public string? MealType { get; set; }
        public string? CuisineType { get; set; }
        public string? DietaryInformation { get; set; }
        public string? Source { get; set; }
        public decimal? Raiting { get; set; }
        public bool Favorite { get; set; }
    }
}
