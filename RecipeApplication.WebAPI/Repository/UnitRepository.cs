using Microsoft.EntityFrameworkCore;
using RecipeApplication.WebAPI.Data;
using RecipeApplication.WebAPI.Interfaces;
using RecipeApplication.WebAPI.Models;

namespace RecipeApplication.WebAPI.Repository
{
    public class UnitRepository : IUnitRepository
    {
        private readonly ApplicationDbContext _context;
        public UnitRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<Unit>> GetAllAsync()
        {
            return await _context.Units.ToListAsync();
        }
    }
}
