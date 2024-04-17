using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecipeApplication.WebAPI.Models
{
    public class Ingredient
    {
        [Key]
        public int Id { get; set; }
        public string? CreatedByUserId { get; set; }
        [ForeignKey("CreatedByUserId")]
        public AppUser? User { get; set; }
        [Required]
        public string IngredientName { get; set; }
    }
}
