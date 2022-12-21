using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NServiceBus;

namespace UserData
{
    public class UserDataAdd:ICommand
    {
        private int postalCode;
        public int Id { get; set; }
        public string Name { get; set; }
        public string CustomerCode { get; set; }
        public string PostalCode { get; set; }
        public string landmark { get; set; }
        public string Address { get; set; }
        public int CityId { get; set; }
        public int PostalCode1 { get; }
        public UserDataAdd(int id, string customerCode, int postalCode, string landmark, string address, int cityID)
        {
            Id = id;
            CustomerCode = customerCode;
            this.postalCode = postalCode;
            this.landmark = landmark;
            Address = address;
            CityId = cityID;
        }
    }
 
}
