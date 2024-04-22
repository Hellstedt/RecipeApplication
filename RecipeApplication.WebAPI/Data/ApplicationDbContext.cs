using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RecipeApplication.WebAPI.Models;
using System.Reflection.Emit;

namespace RecipeApplication.WebAPI.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Instruction> Instructions { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<RecipeIngredient> RecipeIngredients { get; set; }
        public DbSet<Unit> Units { get; set; }
        public DbSet<UserRecipe> UserRecipes { get; set; }

        public ApplicationDbContext(DbContextOptions dbContextOptions) : 
            base(dbContextOptions) 
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole
                {
                    Name = "User",
                    NormalizedName = "USER"
                },

            };

            builder.Entity<IdentityRole>().HasData(roles);

            builder.Entity<RecipeIngredient>()
            .HasKey(ri => ri.Id);

            builder.Entity<UserRecipe>()
            .HasKey(ur => ur.Id);
        }
    }
}
