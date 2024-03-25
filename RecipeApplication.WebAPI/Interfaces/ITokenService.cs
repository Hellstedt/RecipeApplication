using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
