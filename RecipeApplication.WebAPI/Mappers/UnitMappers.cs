using RecipeApplication.WebAPI.Dtos.IngredientDtos;
using RecipeApplication.WebAPI.Dtos.UnitDtos;
using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Mappers
{
    public static class UnitMappers
    {
        public static UnitDto ToUnitDtoFromUnitModel(this Unit unitModel)
        {
            return new UnitDto
            {
                Id = unitModel.Id,
                UnitName = unitModel.UnitName,
                UnitAbbreviation = unitModel.UnitAbbreviation,
            };
        }
    }
}
