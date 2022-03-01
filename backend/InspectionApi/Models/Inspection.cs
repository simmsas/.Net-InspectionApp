using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InspectionApi.Models
{
    public class Inspection
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string Status { get; set; } = string.Empty;
        [StringLength(20)]
        public string Comments { get; set; } = string.Empty;
        public int InspectionTypeId { get; set; }
        public InspectionType? InspectionType { get; set; }

    }
}
