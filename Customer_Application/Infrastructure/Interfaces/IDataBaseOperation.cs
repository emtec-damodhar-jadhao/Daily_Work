namespace Infrastructure.Interfaces
{
    using Domain;
    public interface IDataBaseOperation
    {
        public Task<IEnumerable<CustomerData>> GetAllCustomerData();
        public Task<IEnumerable<CustomerData>> GetCustomerByID(int id);
        public Task<IEnumerable<CustomerData>> GetCustomerByName(string name);  
        public Task<int> CreateNewCustomer(CustomerData customer);
        public Task<int> UpdateCustomer(CustomerData customer);       
        public Task<int> DeleteCustomer(int id);
    }
}
