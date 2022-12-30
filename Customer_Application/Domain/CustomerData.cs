namespace Domain
{
    public class CustomerData
    {
       public CustomerData(int id, string customerCode, int postalCode, string landmark, string address, int cityID)
        {
            Id = id;
            CustomerCode = customerCode;
            PostalCode = postalCode;
            this.landmark = landmark;
            Address = address;
            CityID = cityID;
        }
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string CustomerCode { get; set; } = String.Empty;
        public int PostalCode { get; set; }
        public string landmark { get; set; } = string.Empty;
        public string Address { get; set; } = String.Empty;
        public int CityID { get; set; }
    }
}