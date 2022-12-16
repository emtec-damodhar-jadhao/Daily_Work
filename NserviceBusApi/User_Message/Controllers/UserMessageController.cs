using Messages;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace User_Message.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserMessageController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<UserMessageController> _logger;
        private readonly IMessageSession session;

        public UserMessageController(IConfiguration configuration,ILogger<UserMessageController> logger ,IMessageSession session)
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
