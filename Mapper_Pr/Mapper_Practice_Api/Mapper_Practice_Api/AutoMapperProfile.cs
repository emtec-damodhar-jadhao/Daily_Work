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
            CreateMap<StudentData, StudentDataDto>().ForMember(dest => dest.CityName, src => src.MapFrom(src => src.City)) ;
            CreateMap<StudentDataDto, StudentData>();
        }
    }
}
