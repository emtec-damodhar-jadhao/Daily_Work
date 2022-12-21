using NServiceBus.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserData;

namespace CustomerEndpoint
{
    public class UserDataHandler : IHandleMessages<UserDataAdd>
    {
        static ILog log = LogManager.GetLogger<UserDataAdd>();
       
        public Task Handle(UserDataAdd data, IMessageHandlerContext context)
        {
            log.InfoFormat($" customercode:{data.CustomerCode},postalcode:{data.PostalCode},landmark;{data.landmark},address:{data.Address},cityId:{data.CityId}");
            return Task.CompletedTask;
        }
    }
}
