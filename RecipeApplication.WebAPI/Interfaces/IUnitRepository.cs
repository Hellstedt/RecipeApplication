using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Interfaces
{
    public interface IUnitRepository
    {
        Task<List<Unit>> GetAllAsync();
    }
}
