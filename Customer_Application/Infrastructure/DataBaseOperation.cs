using Domain;
using Infrastructure.Interfaces;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using IDbConnection = Infrastructure.Interfaces.IDbConnection;

namespace Infrastructure;

public class DataBaseOperation : IDataBaseOperation
{
    private readonly IDbConnection _connect;
    private SqlConnection _connection;
    //private IDbConnection _connection => new SqlConnection(_config.GetConnectionString("DefaultConnection"));

    public DataBaseOperation(IDbConnection connect)
    {
        _connect = connect;
        _connection = _connect.DatabaseConnection();
    }
    public string GetAllCustomerData()
    {
        _connection.Open();
        var GetAllCustomer = "select id, Name,customercode ,s_name, c_name, \r\npostalcode,landmark,address from state s, \r\ncity c, customer cus  where s.s_id = c.s_id and \r\nc.c_id = cus.c_id;";
        _connection.Close();
        return GetAllCustomer;
    }
    //public string GetById(int id)
    //{
    //    var getbyid = $"select id, Name,customercode ,s_name, c_name, \r\npostalcode,landmark,address from state s, \r\ncity c, customer cus  where s.s_id = c.s_id and \r\nc.c_id = cus.c_id and cus.id ={id};";
    //    return getbyid;
    //}
    //public string GetByName(string CustomerName)
    //{
    //    var getbyname = $"select id, Name,customercode ,s_name, c_name, \r\npostalcode,landmark,address from state s, \r\ncity c, customer cus  where s.s_id = c.s_id and \r\nc.c_id = cus.c_id and cus.Name ={CustomerName};";
    //    return getbyname;
    //}
    //public string AddCustomer(CustomerData NewCustomer)
    //{
    //    var customer = $"INSERT INTO Customer(Name,customercode,postalcode,landmark,address,c_id) values('{NewCustomer.Name}','{NewCustomer.CustomerCode}','{NewCustomer.PostalCode}','{NewCustomer.landmark}','{NewCustomer.Address}','{NewCustomer.CityID}')";
    //    return customer;
    //}
    //public string UpdateCustomer(CustomerData NewCustomer)
    //{
    //    var update_customer = $"Update customer set Name='{NewCustomer.Name}',customercode='{NewCustomer.CustomerCode}',postalcode='{NewCustomer.PostalCode}',landmark='{NewCustomer.landmark}',address='{NewCustomer.Address}',c_id='{NewCustomer.CityID}' where id='{NewCustomer.Id}'";
    //    return update_customer;
    //}
    //public string DeleteCustomer(int id)
    //{
    //    var deleteCustomer = $"delete From customer where id={id} ";
    //    return deleteCustomer;
    //}

}
