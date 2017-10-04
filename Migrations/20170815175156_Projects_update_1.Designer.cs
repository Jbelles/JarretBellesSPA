using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace VueSPA.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20170815175156_Projects_update_1")]
    partial class Projects_update_1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("VueSPA.Models.Project", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("EndDate");

                    b.Property<string>("Name");

                    b.Property<string>("StartDate");

                    b.Property<string>("_Pictures");

                    b.Property<string>("_Tasks");

                    b.HasKey("Id");

                    b.ToTable("Projects");
                });
        }
    }
}
