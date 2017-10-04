using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VueSPA.Models;
using static VueSPA.Models.Project;
using Newtonsoft.Json;
using System.Threading;

namespace VueSPA.Controllers
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        private ApplicationDbContext _context;
        public ProjectsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("Add")]
        public async Task<IActionResult> AddProject([FromBody] Project project)
        {
            _context.Add(project);
            project.StartDate = DateTime.Parse("12/26/1995");
            await _context.SaveChangesAsync();
            return Ok(project);
        }

        [HttpPost("Delete")]
        public async Task<IActionResult> DeleteProject([FromBody] string Id)
        {
            var proj = _context.Projects.SingleOrDefault(p => p.Id == Id);
            if(proj != null)
            {
                _context.Projects.Remove(proj);
                await _context.SaveChangesAsync();
            }
            return Ok(proj);
        }

        [HttpPost("Update")]
        public async Task<IActionResult> UpdateProject([FromBody] Project project)
        {
            var proj = _context.Projects.SingleOrDefault(p => p.Id == project.Id);
            proj.Name = project.Name != null ? project.Name : proj.Name;
            proj.Description = project.Description != null ? project.Description : proj.Description;
            proj.Pictures = project.Pictures != null ? project.Pictures : proj.Pictures;
            proj.Tasks = project.Tasks != null ? project.Tasks : proj.Tasks;


            _context.Update(proj);
            await _context.SaveChangesAsync();
            return Ok(proj);
        }

        [HttpGet("Get")]
        public IEnumerable<Project> GetProjects()
        {
            var rng = new Random();
            var pics = new List<string>();

            List<Project> Projects = _context.Projects.OrderByDescending(u => u.StartDate).ToList();

            return Projects;
        }
    }
}
