namespace Infrastructure
{
    using Infrastructure.Interfaces;
    using Microsoft.Extensions.Configuration;
    using System.Data.SqlClient;
    public class DbConnection : IDbConnection
    {
        private readonly string _connectionString;
        private IConfiguration _configuration;  
        public DbConnection( IConfiguration configuration)
        {           
            _configuration = configuration;
            _connectionString = @"server=PUN-NB-LE3B6ND; database=DapperAdvance; Integrated Security=True;";
        }
        public SqlConnection DatabaseConnection()
        {
            return new SqlConnection(_connectionString);
        }
    }
}
