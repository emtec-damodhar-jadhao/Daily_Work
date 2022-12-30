namespace Customer_Api.Controllers
{
    using Contract;
    using Dapper;
    using Domain;
    using Infrastructure.Interfaces;
    using Microsoft.AspNetCore.Mvc;
    using System.Data.SqlClient;

    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        private readonly IDataBaseOperation _DataBaseOperation;
        private readonly ILogger<CustomerController> _logger;
        private readonly IMessageSession _session;
        public CustomerController( IDataBaseOperation DataBaseOperation, ILogger<CustomerController> logger, IMessageSession session)
        {
            
            _DataBaseOperation = DataBaseOperation;
            _logger = logger;
            _session = session;
        }
        [HttpGet ("getallcustomer")]
        public IActionResult  GetAllCustomerData()
        {
            
            var Customers =_DataBaseOperation.GetAllCustomerData();
            return Ok(Customers);
        }
        //[HttpGet("getbyid")]
        //public async Task<ActionResult<CustomerData>> getcustomerbyid(int customerid)
        //{
        //    using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        //    var getcustomerbyid = await connection.QueryFirstAsync<CustomerData>(_DataBaseOperation.GetById(customerid));
        //    return Ok(getcustomerbyid);
        //}
        //[HttpGet("getbyname")]
        //public async Task<ActionResult<CustomerData>> getcustomerbyname(string customername)
        //{
        //    using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        //    var getcustomerbyid = await connection.QueryFirstAsync<CustomerData>(_DataBaseOperation.GetByName(customername));
        //    return Ok(getcustomerbyid);
        //}
        //[HttpPost ("addcustomer")]
        //public async Task<ActionResult> AddCustomer(CustomerData cusdata)
        //{
        //    using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        //    var addnewcus = await connection.ExecuteAsync(_DataBaseOperation.AddCustomer(cusdata));           
        //    await _session.Send(new UserDataAdd(cusdata.Id, cusdata.Name, cusdata.CustomerCode, cusdata.PostalCode, cusdata.landmark, cusdata.Address, cusdata.CityID));
        //    return Ok(addnewcus);
        //} 
        //[HttpPut ("updatecustomer")]
        //public async Task<ActionResult<List<CustomerData>>> UpdateCustomerData(CustomerData newcustomer)
        //{
        //    using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        //    var update_customer = await connection.ExecuteAsync(_DataBaseOperation.UpdateCustomer(newcustomer));
        //    await _session.Send(new UserDataAdd(newcustomer.Id,newcustomer.Name, newcustomer.CustomerCode, newcustomer.PostalCode, newcustomer.landmark, newcustomer.Address, newcustomer.CityID));
        //    return Ok(update_customer);
        //}
        //[HttpDelete("deletecustomer")]
        //public async Task<ActionResult<CustomerData>> DeleteCustomerData(int id)
        //{
        //    using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        //    var deleteCustomer = await connection.ExecuteAsync(_DataBaseOperation.DeleteCustomer(id));
        //    return Ok(deleteCustomer);
        //}
    }
}
