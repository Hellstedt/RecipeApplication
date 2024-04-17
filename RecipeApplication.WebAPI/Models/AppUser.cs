using Microsoft.AspNetCore.Identity;

namespace RecipeApplication.WebAPI.Models
{
    public class AppUser : IdentityUser
    {
        public ICollection<UserRecipe> UserRecipes { get; set; }
        public ICollection<Ingredient> Ingredients { get; set; }
    }
}
