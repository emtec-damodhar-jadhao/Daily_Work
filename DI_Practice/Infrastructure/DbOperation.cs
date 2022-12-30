namespace Infrastructure
{
    using Dapper;
    using Domain;
    using Infrastructure.Interfaces;
    using Microsoft.Extensions.Configuration;
    using System.Data.SqlClient;
    public class DbOperation : IDbOperation
    {     
        private readonly IDbConnection _dbConnection;
        private SqlConnection _connection;
       
        public DbOperation( IDbConnection dbConnection)
        {
           _dbConnection = dbConnection;
            _connection = _dbConnection.DatabaseConnection();
        }
        public IEnumerable<StudentData> GetAllStudent()
        {

            var student = _connection.Query<StudentData>("select * from DapperCrud");
            return student;
        }
        public void add(StudentData student)
        {
            var AddStudent = _connection.Execute("insert into DapperCrud (Name,Education,City) values(@Name,@Education,@City)", student);

        }
        public void updatedata(StudentData student)
        {
            var update = _connection.Query("update DapperCrud set Name=@Name , Education=@Education,City=@City where ID=@ID", student);
        }
        public void delete(int id)
        {
            var delete = _connection.Query("Delete from DapperCrud where ID=@Id", new { Id = id });
        }
    }
}