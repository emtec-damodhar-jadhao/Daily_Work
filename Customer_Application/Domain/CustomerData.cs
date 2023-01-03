namespace Domain
{
    public class CustomerData
    {
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string CustomerCode { get; set; } = String.Empty;
        public string c_name { get; set; } = String.Empty;
        public string s_name { get; set; } = String.Empty;
        public int PostalCode { get; set; }
        public string landmark { get; set; } = string.Empty;
        public string Address { get; set; } = String.Empty;
        public int CityID { get; set; }

        public CustomerData(int id,string Name,string customerCode, string s_name, string c_name,int postalCode,string landmark,string address)
        {
            Id= id;
            this.Name= Name;
            this.CustomerCode= customerCode;
            this.s_name= s_name;
            this.c_name= c_name;
            this.PostalCode = postalCode;
            this.landmark= landmark;
            this.Address= address;
                
        }    
       
    }
}