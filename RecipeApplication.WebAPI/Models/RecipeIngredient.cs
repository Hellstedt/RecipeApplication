using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecipeApplication.WebAPI.Models
{
    public class RecipeIngredient
    {
        [Key]
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public Recipe Recipe { get; set; }
        public int IngredientId { get; set; }
        public Ingredient Ingredient { get; set; }
        public int UnitId { get; set; }
        public Unit Unit { get; set; }
        [Column(TypeName = "decimal(6,2)")]
        public decimal Quantity { get; set; }
    }
}
