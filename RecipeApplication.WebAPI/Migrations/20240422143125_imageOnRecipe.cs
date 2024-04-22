using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipeApplication.WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class imageOnRecipe : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "463b29f6-8c49-4f3d-8ceb-3a24588ae0f3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e59d2e81-3f22-406b-904d-89141db56900");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Recipes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6e54d27d-439a-4e90-9a8a-e40d9989d891", null, "Admin", "ADMIN" },
                    { "73dba34d-5f0b-45d5-b5ed-8db9320a2904", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6e54d27d-439a-4e90-9a8a-e40d9989d891");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "73dba34d-5f0b-45d5-b5ed-8db9320a2904");

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Recipes");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "463b29f6-8c49-4f3d-8ceb-3a24588ae0f3", null, "User", "USER" },
                    { "e59d2e81-3f22-406b-904d-89141db56900", null, "Admin", "ADMIN" }
                });
        }
    }
}
