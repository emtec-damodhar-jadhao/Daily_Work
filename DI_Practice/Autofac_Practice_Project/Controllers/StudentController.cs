namespace Autofac_Practice_Project.Controllers
{
    using Domain;
    using Infrastructure.Interfaces;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IDbOperation _operation;        
        public StudentController(IDbOperation operation)
        {
            _operation = operation;          
        }
        [HttpGet]
        public IActionResult getallStudent()
        {
            var students = _operation.GetAllStudent();
            return Ok(students);
        }
        [HttpPost]
        public void AddStudent([FromBody] StudentData student)
        {
            if (ModelState.IsValid)
            {
                _operation.add(student);
            }
        }
        [HttpPut]
        public void updatestudent([FromBody] StudentData student)
        {
            if (ModelState.IsValid)
            {
                _operation.updatedata(student);
            }
        }
        [HttpDelete]
        public void deletestudent(int id)
        {
            _operation.delete(id);
        }
    }
}
