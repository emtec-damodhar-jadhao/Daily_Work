namespace CustomerEndpoint
{
    using Contract;
    using NServiceBus.Logging;
    public class UserDataHandler : IHandleMessages<UserDataAdd>
    {
        static ILog log = LogManager.GetLogger<UserDataAdd>();
        public Task Handle(UserDataAdd data, IMessageHandlerContext context)
        {
            log.InfoFormat($" Name:{data.Name} customercode:{data.CustomerCode},postalcode:{data.postalCode},landmark;{data.landmark},address:{data.Address},cityId:{data.CityId}");
            return Task.CompletedTask;
        }
    }
}
