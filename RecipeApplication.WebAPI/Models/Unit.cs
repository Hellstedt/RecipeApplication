using System.ComponentModel.DataAnnotations;

namespace RecipeApplication.WebAPI.Models
{
    public class Unit
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string UnitName { get; set; }
        public string? UnitAbbreviation { get; set; }
    }
}
