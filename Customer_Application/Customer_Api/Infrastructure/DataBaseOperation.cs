namespace Customer_Api.Infrastructure
{
    public interface IDataBaseOperation
    {
        public string GetAllCustomerData();
    }
    public class DataBaseOperation : IDataBaseOperation
    {
        public string GetAllCustomerData()
        {
            var GetAllCustomer = "SELECT * from Customer";
            return GetAllCustomer;
        }
    }
}
