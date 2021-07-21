using API.Data;
using API.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class RepositoryExtensions
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<ILikesRepository, LikesRepository>();

            return services;
        }
    }
}