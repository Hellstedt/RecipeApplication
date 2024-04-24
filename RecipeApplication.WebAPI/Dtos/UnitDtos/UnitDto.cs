using System.ComponentModel.DataAnnotations;

namespace RecipeApplication.WebAPI.Dtos.UnitDtos
{
    public class UnitDto
    {
        public int Id { get; set; }
        public string UnitName { get; set; }
        public string? UnitAbbreviation { get; set; }
    }
}
