namespace Infrastructure.Interfaces
{
    using Domain;
    using System.Collections.Generic;
    public interface IDbOperation
    {
        public IEnumerable<StudentData> GetAllStudent();
        public void add(StudentData student);
        public void updatedata(StudentData student);
        public void delete(int id);
    }
}
