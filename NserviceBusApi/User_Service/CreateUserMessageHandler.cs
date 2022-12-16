using Messages;
using NServiceBus.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace User_Service
{
    public class CreateUserMessageHandler : IHandleMessages<CreateUserMessage>
    {
        static ILog log = LogManager.GetLogger<CreateUserMessageHandler>();
        public Task Handle(CreateUserMessage message, IMessageHandlerContext context)
        {
            log.InfoFormat($"User Id is {message.Id} and user Message is {message.Message}");
            return Task.CompletedTask;
        }
    }
}
