namespace CustomerEndpoint
{
    using Contract;
    using NServiceBus.Logging;
    public class UserDataHandler : IHandleMessages<CustomerDto>
    {
        static ILog log = LogManager.GetLogger<CustomerDto>();
        public Task Handle(CustomerDto data, IMessageHandlerContext context)
        {
            log.InfoFormat($" Name:{data.Name} customercode:{data.CustomerCode},postalcode:{data.postalCode},landmark;{data.landmark},address:{data.Address},cityId:{data.CityId}");
            return Task.CompletedTask;
        }
    }
}
