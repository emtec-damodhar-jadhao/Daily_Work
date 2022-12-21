using Customer_Api.Model;

namespace Customer_Api.Infrastructure
{
    public interface IDataBaseOperation
    {
        public string GetAllCustomerData();
        public string getbyid(int id);
        public string getbyname(string customername);
        public string addcustomer(CustomerData newcustomer);
        public string updatecustomer(CustomerData newcustomer);
        public string deletecustomer(int id);
         
    }


    public class DataBaseOperation : IDataBaseOperation
    {
        public string GetAllCustomerData()
        {
            var GetAllCustomer = "select id, Name,customercode ,s_name, c_name, \r\npostalcode,landmark,address from state s, \r\ncity c, customer cus  where s.s_id = c.s_id and \r\nc.c_id = cus.c_id;";
            return GetAllCustomer;
        }

        public string getbyid(int id)
        {
            var getbyid = $"select id, Name,customercode ,s_name, c_name, \r\npostalcode,landmark,address from state s, \r\ncity c, customer cus  where s.s_id = c.s_id and \r\nc.c_id = cus.c_id and cus.id ={id};";
            return getbyid;
        }
        public string getbyname(string customername)
        {
            var getbyname = $"select id, Name,customercode ,s_name, c_name, \r\npostalcode,landmark,address from state s, \r\ncity c, customer cus  where s.s_id = c.s_id and \r\nc.c_id = cus.c_id and cus.Name ={customername};";
            return getbyname;
        }

        public string addcustomer(CustomerData newcustomer)
        {
            var customer = $"INSERT INTO Customer(Name,customercode,postalcode,landmark,address,c_id) values('{newcustomer.Name}','{newcustomer.CustomerCode}','{newcustomer.PostalCode}','{newcustomer.landmark}','{newcustomer.Address}','{newcustomer.CityID}')";
            return customer;
        }

        public string updatecustomer(CustomerData newcustomer)
        {
            var update_customer = $"Update customer set Name='{newcustomer.Name}',customercode='{newcustomer.CustomerCode}',postalcode='{newcustomer.PostalCode}',landmark='{newcustomer.landmark}',address='{newcustomer.Address}',c_id='{newcustomer.CityID}' where id='{newcustomer.Id}'";
            return update_customer;
        }

        public string deletecustomer(int id)
        {
            var deleteCustomer = $"delete From customer where id={id} ";
            return deleteCustomer;
        }
    }
}
