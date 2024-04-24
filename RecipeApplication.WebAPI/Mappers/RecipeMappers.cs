using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using RecipeApplication.WebAPI.Dtos.IngredientDtos;
using RecipeApplication.WebAPI.Dtos.Instruction;
using RecipeApplication.WebAPI.Dtos.Recipe;
using RecipeApplication.WebAPI.Dtos.RecipeIngredientDtos;
using RecipeApplication.WebAPI.Dtos.UnitDtos;
using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Mappers
{
    public static class RecipeMappers
    {
        public static RecipeDto ToRecipeDtoFromRecipeModel(this Recipe recipeModel)
        {
            return new RecipeDto
            {
                RecipeName = recipeModel.RecipeName,
                Servings = recipeModel.Servings,
                DifficultyLevel = recipeModel.DifficultyLevel,
                MealType = recipeModel.MealType,
                CuisineType = recipeModel.CuisineType,
                DietaryInformation = recipeModel.DietaryInformation,
                Instructions = recipeModel.Instructions
                    .Select(i => new InstructionDto
                        {
                            Id = i.Id,
                            RecipeId = i.RecipeId,
                            StepNumber = i.StepNumber,
                            InstructionText = i.InstructionText,
                        }).ToList(),
                RecipeIngredients = recipeModel.RecipeIngredients
                    .Select(ri => new RecipeIngredientDto
                    {
                        Id = ri.Id,
                        IngredientId = ri.IngredientId,
                        Ingredient = new IngredientDto
                            {
                                Id = ri.Ingredient.Id,
                                CreatedByUserId = ri.Ingredient.CreatedByUserId,
                                IngredientName = ri.Ingredient.IngredientName,
                            },
                        Unit = new UnitDto
                        {
                            Id = ri.Unit.Id,
                            UnitName = ri.Unit.UnitName,
                            UnitAbbreviation = ri.Unit.UnitAbbreviation,
                        },
                        UnitId = ri.UnitId,
                        Quantity = ri.Quantity,
                    }).ToList(),
                Source = recipeModel.Source,
                ImageUrl = recipeModel.ImageUrl,
                Raiting = recipeModel.Raiting,
                Favorite = recipeModel.Favorite,
            };
        }
        public static Recipe ToRecipeFromCreateDto(this CreateRecipeRequestDto recipeDto)
        {
            return new Recipe
            {
                RecipeName = recipeDto.RecipeName,
                DateCreated = DateTime.Now,
                CookingTime = null,
                Servings = recipeDto.Servings,
                DifficultyLevel = recipeDto.DifficultyLevel,
                MealType = recipeDto.MealType,
                CuisineType = recipeDto.CuisineType,
                DietaryInformation = recipeDto.DietaryInformation,
                ImageUrl = recipeDto.ImageUrl,
                Source = recipeDto.Source,
                Raiting = null,
                Favorite = recipeDto.Favorite,
            };
        }
    }
}
