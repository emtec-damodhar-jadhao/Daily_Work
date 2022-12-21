using Customer_Api.Infrastructure;
using Customer_Api.Model;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using UserData;

namespace Customer_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerDataController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IDataBaseOperation _DataBaseOperation;
        private readonly ILogger<CustomerDataController> _logger;
        private readonly IMessageSession session;


        public CustomerDataController(IConfiguration configuration, IDataBaseOperation DataBaseOperation, ILogger<CustomerDataController> logger, IMessageSession session)
        {
            _configuration = configuration;
            _DataBaseOperation = DataBaseOperation;
            _logger = logger;
            this.session = session;
        }

        [HttpGet ("getallcustomer")]
        public async Task<ActionResult<List<object>>> GetAllCustomerData()
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var Customers = await connection.QueryAsync<object>(_DataBaseOperation.GetAllCustomerData());
            return Ok(Customers);
        }
        [HttpGet("getbyid")]
        public async Task<ActionResult<CustomerData>> getcustomerbyid(int customerid)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var getcustomerbyid = await connection.QueryFirstAsync<CustomerData>(_DataBaseOperation.getbyid(customerid));
            return Ok(getcustomerbyid);
        }

        [HttpGet("getbyname")]
        public async Task<ActionResult<CustomerData>> getcustomerbyname(string customername)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var getcustomerbyid = await connection.QueryFirstAsync<CustomerData>(_DataBaseOperation.getbyname(customername));
            return Ok(getcustomerbyid);
        }

        [HttpPost ("addcustomer")]
        public async Task<ActionResult> AddCustomer(CustomerData cusdata)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var addnewcus = await connection.ExecuteAsync(_DataBaseOperation.addcustomer(cusdata));           
            await session.Send(new UserDataAdd(cusdata.Id, cusdata.CustomerCode, cusdata.PostalCode, cusdata.landmark, cusdata.Address, cusdata.CityID));
            return Ok(addnewcus);
        } 

        [HttpPut ("updatecustomer")]
        public async Task<ActionResult<List<CustomerData>>> UpdateCustomerData(CustomerData newcustomer)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var update_customer = await connection.ExecuteAsync(_DataBaseOperation.updatecustomer(newcustomer));
            await session.Send(new UserDataAdd(newcustomer.Id, newcustomer.CustomerCode, newcustomer.PostalCode, newcustomer.landmark, newcustomer.Address, newcustomer.CityID));

            return Ok(update_customer);
        }


        [HttpDelete("deletecustomer")]
        public async Task<ActionResult<CustomerData>> DeleteCustomerData(int id)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var deleteCustomer = await connection.ExecuteAsync(_DataBaseOperation.deletecustomer(id));
            return Ok(deleteCustomer);
        }


    }
}
