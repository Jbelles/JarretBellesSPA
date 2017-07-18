using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace VueSPA.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        private static string[] RandomShit = new[]
        {
            "Lul", "xd", "pogchamp", "feelsbadman", "notlikethis"
        };

        [HttpGet("[action]")]
        public IEnumerable<CheckThisShitOut> TestEndpoint()
        {
            var rng = new Random();
            return Enumerable.Range(1, 25).Select(index => new CheckThisShitOut
            {
                RandomNumber = rng.Next(0, 1000),
                RandomString = RandomShit[rng.Next(RandomShit.Length)]
            });
        }

        public class CheckThisShitOut
        {
            public int RandomNumber { get; set; }
            public string RandomString { get; set; }
        }
    }
}
