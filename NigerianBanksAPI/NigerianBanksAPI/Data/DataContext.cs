using Microsoft.EntityFrameworkCore;

namespace NigerianBanksAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Bank> Banks => Set<Bank>();
    }
}
