using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RecipeApplication.WebAPI.Dtos.Instruction
{
    public class InstructionDto
    {
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public int StepNumber { get; set; }
        public string InstructionText { get; set; }
    }
}
