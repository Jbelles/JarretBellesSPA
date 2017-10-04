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
        [NotMapped]
        public List<string> Tasks{ get { return _Tasks == null ? null : JsonConvert.DeserializeObject<List<string>>(_Tasks); } set { _Tasks = JsonConvert.SerializeObject(value); } }
        public string _Tasks { get; set; }

        public DateTime StartDate { get; set; }
        public string logo { get; set; }
        [NotMapped]
        public List<Picture> Pictures { get { return _Pictures == null ? null : JsonConvert.DeserializeObject<List<Picture>>(_Pictures); } set { _Pictures = JsonConvert.SerializeObject(value); } }
        public string _Pictures { get; set; }
        public List<Picture> Videos { get { return _Videos == null ? null : JsonConvert.DeserializeObject<List<Picture>>(_Videos); } set { _Videos = JsonConvert.SerializeObject(value); } }
        public string _Videos { get; set; }

        [NotMapped]
        public class Picture
        {
            public string url { get; set; }
            public string description { get; set; }
        }

    }
}
