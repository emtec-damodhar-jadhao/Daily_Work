namespace User_Message.Controllers
{
    using Messages;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<UserController> _logger;
        private readonly IMessageSession session;
        public UserController(IConfiguration configuration,ILogger<UserController> logger ,IMessageSession session)
        {
            _configuration = configuration;
            _logger = logger;
            this.session = session;
        }
        [HttpPost]
        public async Task Add_User_message(UserMessageData AddMessage)
        {
            await session.Send(new CreateUserMessage(AddMessage.Id, AddMessage.Message));
        }
    }
}
