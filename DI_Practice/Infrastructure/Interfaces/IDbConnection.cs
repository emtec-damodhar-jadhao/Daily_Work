namespace Infrastructure.Interfaces
{
    using System.Data.SqlClient;
    public interface IDbConnection
    {
        public SqlConnection DatabaseConnection();
    }
}
