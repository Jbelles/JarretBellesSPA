using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VueSPA.Models
{
    public class Project
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        [NotMapped]
        public List<string> Pictures { get { return _Pictures == null ? null : JsonConvert.DeserializeObject<List<string>>(_Pictures); } set { _Pictures = JsonConvert.SerializeObject(value); } }
        public string _Pictures { get; set; }

    }
}
