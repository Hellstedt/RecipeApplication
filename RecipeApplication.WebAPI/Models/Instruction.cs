using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecipeApplication.WebAPI.Models
{
    public class Instruction
    {
        [Key]
        public int Id { get; set; }
        public int RecipeId { get; set; }
        [ForeignKey("RecipeId")]
        public Recipe Recipe { get; set; }
        [Required]
        public int StepNumber { get; set; }
        [Required]
        public string InstructionText { get; set; }
    }
}
