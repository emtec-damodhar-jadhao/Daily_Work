using Dapper;
using Domain;
using Infrastructure.Interfaces;
using System.Data.SqlClient;
namespace Infrastructure;
public class DataBaseOperation : IDataBaseOperation
{
    private readonly IDbConnection _connect;
    private SqlConnection _connection;
    public DataBaseOperation(IDbConnection connect)
    {
        _connect = connect;
        _connection = _connect.DatabaseConnection();
    }
    public async Task<IEnumerable<CustomerData>> GetAllCustomerData()
    {
        var GetAllCustomer =await _connection.QueryAsync<CustomerData>("select id,Name,customercode,s_name, c_name,postalcode,landmark,address from state s,city c,customer cus where s.s_id = c.s_id and c.c_id = cus.c_id;").ConfigureAwait(false);
        return GetAllCustomer;
    }
    public async Task<IEnumerable<CustomerData>> GetCustomerByID(int id)
    {
        var getbyid = $"select id, Name,customercode ,s_name, c_name, \r\npostalcode,landmark,address from state s, \r\ncity c, customer cus  where s.s_id = c.s_id and \r\nc.c_id = cus.c_id and cus.id ={id};";
        var getdata =await  _connection.QueryAsync<CustomerData>(getbyid);
        return getdata;
    }
    public async Task<IEnumerable<CustomerData>> GetCustomerByName(string CustomerName)
    {
        var sql = $"select id, Name,customercode ,s_name, c_name, \r\npostalcode,landmark,address from state s, \r\ncity c, customer cus  where s.s_id = c.s_id and \r\nc.c_id = cus.c_id and cus.Name ={CustomerName};";
        var getdata =await _connection.QueryAsync<CustomerData>(sql);
        return getdata;
    }
    public async Task<int> CreateNewCustomer(CustomerData NewCustomer)
    {
        var AddStudent =await _connection.ExecuteAsync($"INSERT INTO Customer(Name,customercode,postalcode,landmark,address,c_id) values('{NewCustomer.Name}','{NewCustomer.CustomerCode}','{NewCustomer.PostalCode}','{NewCustomer.landmark}','{NewCustomer.Address}','{NewCustomer.CityID}')", NewCustomer).ConfigureAwait(false);
        return AddStudent;
    }
    public async Task<int> UpdateCustomer(CustomerData customer)
    {
        var update =await  _connection.ExecuteAsync($"Update customer set Name='{customer.Name}',customercode='{customer.CustomerCode}',postalcode='{customer.PostalCode}',landmark='{customer.landmark}',address='{customer.Address}',c_id='{customer.CityID}' where id='{customer.Id}'", customer).ConfigureAwait(false);
        return update;
    }
    public async Task<int> DeleteCustomer(int id)
    {
        var delete =await  _connection.ExecuteAsync($"delete From customer where id={id} ").ConfigureAwait(false);
        return delete;
    }
}






