namespace Customer_Api.Model
{
    public class CustomerData
    {
        public int Id { get; set; }
        public string Name { get; set; }=String.Empty;
        public string CustomerCode { get; set; } = String.Empty;
        public StateData statedata{ get; set; } 
        public CityData citydata { get; set; } 
        public int PostalCode { get; set; }
        public string Address { get; set; } = String.Empty;
        public int CityID { get; set; }

    }
}
