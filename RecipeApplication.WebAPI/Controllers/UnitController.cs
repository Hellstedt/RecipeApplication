using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RecipeApplication.WebAPI.Interfaces;
using RecipeApplication.WebAPI.Mappers;

namespace RecipeApplication.WebAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UnitController : ControllerBase
    {
        private readonly IUnitRepository _unitRepo;

        public UnitController(IUnitRepository unitRepo)
        {
            _unitRepo = unitRepo;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAllUnits()
        {
            var units = await _unitRepo.GetAllAsync();

            var unitDto = units.Select(s => s.ToUnitDtoFromUnitModel());

            return Ok(unitDto);
        }
    }
}
