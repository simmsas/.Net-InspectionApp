using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InspectionApi.Models
{
    public class Status
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string StatusOption { get; set; } = string.Empty;
    }
}
