namespace User_Service.Handler
{
    using Messages;
    using NServiceBus.Logging;
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
