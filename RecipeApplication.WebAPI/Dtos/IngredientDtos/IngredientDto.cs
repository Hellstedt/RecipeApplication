using RecipeApplication.WebAPI.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using RecipeApplication.WebAPI.Dtos.RecipeIngredientDtos;

namespace RecipeApplication.WebAPI.Dtos.IngredientDtos
{
    public class IngredientDto
    {
        public int Id { get; set; }
        public string? CreatedByUserId { get; set; }
        public string IngredientName { get; set; }
    }
}
