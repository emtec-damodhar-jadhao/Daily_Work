namespace Infrastructure
{
    using Microsoft.Extensions.Configuration;
    using System.Data.SqlClient;
    public class DbConnection 
    {
        private readonly string _connectionString;
        private IConfiguration _configuration;
        public DbConnection(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("DefaultConnection");
        }
        public SqlConnection DatabaseConnection()
        {
            return new SqlConnection(_connectionString);
        }
    }
}
