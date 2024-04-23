using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipeApplication.WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class updateRecipeIngredientRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ingredients_Recipes_RecipeId",
                table: "Ingredients");

            migrationBuilder.DropIndex(
                name: "IX_Ingredients_RecipeId",
                table: "Ingredients");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6e54d27d-439a-4e90-9a8a-e40d9989d891");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "73dba34d-5f0b-45d5-b5ed-8db9320a2904");

            migrationBuilder.DropColumn(
                name: "RecipeId",
                table: "Ingredients");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "91e99836-3c89-4caa-878e-4dc870849e56", null, "Admin", "ADMIN" },
                    { "daf3fa72-81cc-4865-86e7-35c13b378cc1", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "91e99836-3c89-4caa-878e-4dc870849e56");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "daf3fa72-81cc-4865-86e7-35c13b378cc1");

            migrationBuilder.AddColumn<int>(
                name: "RecipeId",
                table: "Ingredients",
                type: "int",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6e54d27d-439a-4e90-9a8a-e40d9989d891", null, "Admin", "ADMIN" },
                    { "73dba34d-5f0b-45d5-b5ed-8db9320a2904", null, "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ingredients_RecipeId",
                table: "Ingredients",
                column: "RecipeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ingredients_Recipes_RecipeId",
                table: "Ingredients",
                column: "RecipeId",
                principalTable: "Recipes",
                principalColumn: "Id");
        }
    }
}
