using AutoMapper;
using Contract;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace Mapper_Practice_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IMapper _mapper;
        public StudentController(IMapper mapper)
        {
            _mapper = mapper; 
        }

        private readonly List<StudentData> students = new List<StudentData>
        {
            new StudentData
            {
                Id = 1,
                Name="Damodhar",
                Education="Btech",                
                City="Aurangabad",
               College="MIT"
            },
            new StudentData
            {
                 Id = 2,
                Name="Sagar",
                Education="MBA",               
                City="Pune",
               College="MGM"
            }
        };

        [HttpGet]
        public ActionResult<List<StudentData>> GetAllStudents()
        {
            return Ok(students.Select(student => _mapper.Map<StudentDataDto>(student)));
        }

        [HttpPost]        
        public ActionResult<List<StudentData>> AddStudent(StudentDataDto student)
        {
            var stuDto=_mapper.Map<StudentData>(student);
            students.Add(stuDto);
            return Ok(students.Select(student => _mapper.Map<StudentDataDto>(student)));
        }
    }
}
