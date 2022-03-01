using InspectionApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InspectionApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        { 
        }
        public DbSet<Inspection> Inspections { get; set; }
        public DbSet<InspectionType> InspectionTypes { get; set; }
        public DbSet<Status> Statuses { get; set; }
    }
}
