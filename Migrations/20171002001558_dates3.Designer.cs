﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace VueSPA.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20171002001558_dates3")]
    partial class dates3
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

                    b.Property<string>("Name");

                    b.Property<DateTime>("StartDate");

                    b.Property<string>("_Pictures");

                    b.Property<string>("_Tasks");

                    b.Property<string>("_Videos");

                    b.Property<string>("logo");

                    b.HasKey("Id");

                    b.ToTable("Projects");
                });
        }
    }
}
