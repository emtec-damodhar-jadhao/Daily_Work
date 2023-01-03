using Domain;

namespace Infrastructure.Interfaces
{
    public interface IDataBaseOperation
    {
        public IEnumerable<CustomerData> GetAllCustomerData();  
        public Task<int> CreateNewCustomer(CustomerData customer);
        public Task<int> UpdateCustomer(CustomerData customer);       
        public Task<int> DeleteCustomer(int id);

        //public string GetById(int id);
        //public string GetByName(string CustomerName);
     
    }
}
