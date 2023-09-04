global using Microsoft.EntityFrameworkCore;
using healthlog_be;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Allows the front end to access api
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "localhost",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader().AllowCredentials();
        });
});
// Connecting this .net to the mssql server which will run in a containerized docker
builder.Services.AddDbContext<healthlog_be.DataContext>(options =>
{
    options.UseSqlServer("Server=localhost;Initial Catalog=PantryDB;Integrated Security=False;User Id=sa;Password=Your_password123;MultipleActiveResultSets=True")
    .EnableSensitiveDataLogging();
});
/* Will need to add these services in order to access each service api
builder.Services.AddScoped<IFamilyService, FamilyService>();
builder.Services.AddScoped<IItemService, ItemService>();
builder.Services.AddScoped<IPantryService, PantryService>();
builder.Services.AddScoped<IRecipeService, RecipeService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IInviteService,InviteService>();
*/
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
// Automatically creates Migration maybe
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<DataContext>();
    context.Database.Migrate();
}
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
