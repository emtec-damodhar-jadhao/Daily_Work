using Contract;
using Infrastructure;
using Infrastructure.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// automapper
builder.Services.AddAutoMapper(typeof(Program).Assembly);

//serilog 
//builder.Host.UseSerilog((context, config) =>
//{
//    config.ReadFrom.Configuration(context.Configuration);
//});

// interface Register
builder.Services.AddSingleton<IDataBaseOperation , DataBaseOperation>();
builder.Services.AddSingleton<IDbConnection, DbConnection>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CustomerService",
        builder =>
        {
            builder
            .WithOrigins("http://localhost:3000")
            .WithMethods("*")
            .AllowAnyHeader();
        });
});

//NserviceBus Implimentation
builder.Host.UseNServiceBus(Context => {

    var endpointConfiguration = new EndpointConfiguration("Customer_Api");
    //endpointConfiguration.UseSerialization<NewtonsoftJsonSerializer>();
    var transport = endpointConfiguration.UseTransport<LearningTransport>();

    transport.Routing().RouteToEndpoint(typeof(CustomerDto), "CustomerEndpoint");
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

app.UseCors("CustomerService");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
