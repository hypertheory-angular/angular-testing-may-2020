
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddReverseProxy()
        .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));
builder.Services.AddCors(cors =>
{
    cors.AddPolicy("all", pol =>
    {
        pol.AllowAnyHeader();
        pol.AllowAnyMethod();
        pol.AllowAnyOrigin();
    });
});
var app = builder.Build();
app.UseCors();
app.MapReverseProxy();

app.Run();
