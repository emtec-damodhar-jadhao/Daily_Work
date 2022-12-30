namespace Contract
{    
    using NServiceBus;
    public class UserDataAdd:ICommand
    {      
        public int Id { get; set; }
        public string Name { get; set; }
        public string CustomerCode { get; set; }
        public int postalCode;
        public string landmark { get; set; }
        public string Address { get; set; }
        public int CityId { get; set; }      
        public UserDataAdd(int id,string Name, string customerCode, int postalCode, string landmark, string address, int cityID)
        {
            Id = id;
            this.Name = Name;
            CustomerCode = customerCode;
            this.postalCode = postalCode;
            this.landmark = landmark;
            Address = address;
            CityId = cityID;
        }
    }
}


