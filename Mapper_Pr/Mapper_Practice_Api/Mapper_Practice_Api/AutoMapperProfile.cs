using AutoMapper;
using Contract;
using Domain;

namespace Mapper_Practice_Api
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            //Configure Automapper
            CreateMap<StudentData, StudentDataDto>();
            CreateMap<StudentDataDto, StudentData>();
        }
    }
}
