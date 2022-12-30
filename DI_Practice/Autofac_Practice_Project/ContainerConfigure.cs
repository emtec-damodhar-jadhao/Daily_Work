namespace Autofac_Practice_Project
{
    using Autofac;
    using Infrastructure;
    using Infrastructure.Interfaces;
    public class ContainerConfigure : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<DbOperation>().As<IDbOperation>().InstancePerLifetimeScope();
            builder.RegisterType<DbConnection>().As<IDbConnection>().InstancePerDependency(); //Transient
        }
    }
}
