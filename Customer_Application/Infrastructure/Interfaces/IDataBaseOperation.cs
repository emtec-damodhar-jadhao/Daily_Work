namespace Infrastructure.Interfaces
{
    using Contract;
    using Domain;
    public interface IDataBaseOperation
    {
        public Task<IEnumerable<Customer>> GetAllCustomerData();
        public Task<IEnumerable<Customer>> GetCustomerByID(int id);
        public Task<IEnumerable<Customer>> GetCustomerByName(string name);  
        public Task<int> AddCustomer(Customer customer);
        public Task<int> UpdateCustomer(Customer customer);

        public Task<int> UpdateCustomerByCustomerCode(Customer customer);
        public Task<int> DeleteCustomer(int id);
    }
}
