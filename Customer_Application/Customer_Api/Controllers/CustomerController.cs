namespace Customer_Api.Controllers
{
    using Contract;
    using Domain;
    using Infrastructure.Interfaces;
    using Microsoft.AspNetCore.Mvc;

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
        public async Task<IActionResult> GetAllCustomerData()
        {            
            var Customers =_DataBaseOperation.GetAllCustomerData();
            return Ok(await Customers);
        }

        [HttpGet("getbyid")]
        public async Task<IActionResult> getbyid(int id)
        {
            return Ok(await _DataBaseOperation.GetCustomerByID(id));
        }

        [HttpGet("getbyname")]
        public async Task<ActionResult<CustomerData>> getcustomerbyname(string customername)
        {
            var getcustomerbyid = await _DataBaseOperation.GetCustomerByName(customername);
            return Ok(getcustomerbyid);
        }
        [HttpPost ("addcustomer")]
        public async Task<IActionResult> Post(CustomerData cusdata)
        {
            var add =await  _DataBaseOperation.CreateNewCustomer(cusdata);
            var sendData = _session.Send(new UserDataAdd(cusdata.Id, cusdata.Name, cusdata.CustomerCode, cusdata.PostalCode, cusdata.landmark, cusdata.Address, cusdata.CityID));
            return Ok(add);
        }
        //update using Async
        [HttpPut("updatecustomer")]
        public async Task<IActionResult> Put([FromBody] CustomerData newcustomer)
        {
            var result = await _DataBaseOperation.UpdateCustomer(newcustomer);
            var send = _session.Send(new UserDataAdd(newcustomer.Id, newcustomer.Name, newcustomer.CustomerCode, newcustomer.PostalCode, newcustomer.landmark, newcustomer.Address, newcustomer.CityID));
            return Ok(result);
        }

        [HttpDelete("deletecustomer")]
        public async Task<IActionResult> deletestudent(int id)
        {
            return Ok(await _DataBaseOperation.DeleteCustomer(id));
        }
    }
}
