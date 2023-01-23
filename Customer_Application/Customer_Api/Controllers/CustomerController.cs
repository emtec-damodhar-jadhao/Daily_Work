namespace Customer_Api.Controllers
{
    using AutoMapper;
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
        private readonly IMapper _mapper;
        public CustomerController( IDataBaseOperation DataBaseOperation, ILogger<CustomerController> logger, IMessageSession session,IMapper mapper)
        {            
            _DataBaseOperation = DataBaseOperation;
            _logger = logger;
            _session = session;
            _mapper = mapper;
        }
        [HttpGet ("getallcustomer")]
        public async Task<IActionResult> GetAllCustomerData()
        {            
            var Customers =_DataBaseOperation.GetAllCustomerData();
            return Ok(await Customers);
        }

        [HttpGet("getbyid")]
        public async Task<IActionResult> Getbyid(int id)
        {
            var getstudent = await _DataBaseOperation.GetCustomerByID(id);
            return Ok(getstudent);            
        }

        [HttpGet("getbyname")]
        public async Task<ActionResult<Customer>> GetCustomerByName(string name)
        {
            var getcustomerbyid = await _DataBaseOperation.GetCustomerByName(name);
            return Ok(getcustomerbyid);
        }

        [HttpPost ]
        public async Task<IActionResult> AddCustomer(Customer customer)
        {
            var add =await  _DataBaseOperation.AddCustomer(customer);
            var sendData = _session.Send(new CustomerDto(customer.Id, customer.Name, customer.CustomerCode, customer.PostalCode, customer.landmark, customer.Address, customer.CityID));
            return Accepted(add);
        }     
                
        [HttpPut]
        public async Task<IActionResult> UpdateCustomer([FromBody] Customer customer)
        {
            var result = await _DataBaseOperation.UpdateCustomer(customer);
            var send = _session.Send(new CustomerDto(customer.Id, customer.Name, customer.CustomerCode, customer.PostalCode, customer.landmark, customer.Address, customer.CityID));
            return Ok(result);
        }     

        [HttpDelete]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            return Ok(await _DataBaseOperation.DeleteCustomer(id));
        }
        [HttpPut ("CustomerCode")]
        public async Task<IActionResult> updateCustomerByCode([FromBody] Customer customer)
        {
            var result = await _DataBaseOperation.UpdateCustomerByCustomerCode(customer);
            return Ok(result);
        }
    }
}
