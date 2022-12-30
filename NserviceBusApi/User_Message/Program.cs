using Messages;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Host.UseNServiceBus( Context =>{

    var endpointConfiguration = new EndpointConfiguration("User_Message");

    var transport = endpointConfiguration.UseTransport<LearningTransport>();

    transport.Routing().RouteToEndpoint(typeof(CreateUserMessage), "User_Service");
    endpointConfiguration.EnableInstallers();

    return endpointConfiguration;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
