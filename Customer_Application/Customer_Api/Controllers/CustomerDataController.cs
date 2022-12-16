using Customer_Api.Infrastructure;
using Customer_Api.Model;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;

namespace Customer_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerDataController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IDataBaseOperation _DataBaseOperation;
        public CustomerDataController(IConfiguration configuration, IDataBaseOperation DataBaseOperation)
        {
            _configuration = configuration;
            _DataBaseOperation = DataBaseOperation;
        }
        [HttpGet]
        public async Task<ActionResult<List<CustomerData>>> GetAllCustomerData()
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var Customers = await connection.QueryAsync<CustomerData>(_DataBaseOperation.GetAllCustomerData());
            return Ok(Customers);
        }

        [HttpPost]
        public async Task<ActionResult> SetData(CustomerData cust1)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));

            var customer = await connection.ExecuteAsync("INSERT INTO Customer(Name,CustomerCode,PostalCode,CityID) values(@Name,@PostalCode,@PostalCode,@cityID)", new
            {
                Name = cust1.Name,
                CustomerCode= cust1.CustomerCode,
               PostalCode= cust1.PostalCode,
                cityID = cust1.CityID
            });

            return Ok();
        }

        [HttpPost("SetDataWithObject")]
        public async Task<ActionResult> SetDataWithObject(CustomerData cust)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));

            var customer = await connection.ExecuteAsync("INSERT INTO Customer(Name,CustomerCode,PostalCode,CityID) values(@Name,@PostalCode,@PostalCode,@cityID)", new
            {
                Name = cust.Name,
                CustomerCode= cust.CustomerCode,
                PostalCode = cust.PostalCode,     
                CityID = cust.citydata.Id
            });

            var city = await connection.ExecuteAsync("INSERT INTO City (CityName,StateID) " +
                "Values (@CityName,@StateID)",
                new
                {
                    cityName = cust.citydata.CityName,
                    stateId = cust.citydata.StateID
                });
            return Ok();
        }

    }
}
