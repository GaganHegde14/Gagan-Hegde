"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import MainLayout from "@/components/layout/MainLayout";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = {
    fullstack: [
      {
        title: "Fluency – AI-Powered Language Assistant",
        date: "Mar 2025",
        image: "/images/projects/fluency.png",
        description: [
          "Hackathon AI Project With a team size of 5 members we developed Fluency, an AI-driven language assistant during a 5 hour hackathon, focusing on conversational practice and exercises to enhance user learning. Implemented LLaMA-3.3-70B-SpecDec for personalized chatbot interactions and Whisper-Large-v3 for voice-enabled learning.",
          "Interactive Learning Experience: Designed and integrated diverse language exercises, including structured challenges and real-time conversation scenarios, providing users with an engaging and adaptive learning environment within a feature-rich Mern stack application.",
          "Next.js Frontend Implementation: Spearheaded the creation of an intuitive and visually appealing UI in Next.js, ensuring seamless user navigation, real-time chatbot interactions, and accessibility across devices, enhancing the overall user experience.",
        ],
        tech: ["Next.js", "Node.js", "MongoDB", "LLaMA", "Whisper"],
        githubUrl: "https://github.com/guruswarupa/fluencyy",
      },
      {
        title: "VybSync Chat Application",
        date: "Mar 2025",
        image: "/images/projects/vybsync.png",
        description: [
          "Real-Time Communication Framework: Led the development of a robust real-time chat application with features like group chats, direct messaging, and typing indicators using Node.js, Express, Socket.IO, and MongoDB, ensuring seamless user interaction and scalability.",
          "Interactive UI/UX Design: Designed and implemented an intuitive interface with responsive layouts, dynamic message animations, and user-friendly navigation menus using React, Vite, and Material-UI (MUI Joy), enhancing user engagement and accessibility across devices.",
          "Feature Implementation: Built key functionalities including user authentication (Google OAuth), message persistence, seen/unseen status tracking, and group management, creating a feature-rich platform for real-time collaboration.",
        ],
        tech: ["React", "Node.js", "Socket.IO", "MongoDB", "MUI Joy"],
        githubUrl: "https://github.com/GaganHegde14/VybSync",
      },
      {
        title: "Google Developer Group-CIT Main Campus Website",
        date: "Dec 2024",
        image: "/images/projects/gdg.png",
        description: [
          "Interactive Design: Led the creation of an immersive interface with animations, hover effects, and a responsive navigation menu using HTML, CSS, and JavaScript.",
          "Showcasing Content: Designed and implemented key features like event highlights, project showcases, and a horizontally scrollable team section with detailed member profiles.",
        ],
        tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/GaganHegde14/gdg-cit",
      },
    ],
    frontend: [
      {
        title: "Internet Speed Tester",
        image: "/images/projects/internet.png",
        description:
          "A web application to test internet speed using modern web technologies.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/GaganHegde14/Speed_test",
      },
      {
        title: "Simon Says Game",
        image: "/images/projects/Simon.png",
        description:
          "Interactive memory game built with modern web technologies.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/GaganHegde14/Simon-Game",
      },
      {
        title: "BMI Calculator",
        image: "/images/projects/BMI.png",
        description:
          "A user-friendly BMI calculator with instant results and health insights.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/GaganHegde14/BMI",
      },
      {
        title: "Spotify Clone",
        image: "/images/projects/Spotify_clone.png",
        description:
          "A responsive Spotify interface clone with modern design principles.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/GaganHegde14/Spotify-Clone",
      },
    ],
  };

  // Get unique categories
  const categories = ["All", "Frontend", "Full Stack"];

  // Filter projects based on search term and category
  const getFilteredProjects = () => {
    const projectsList =
      selectedCategory === "All"
        ? [...projects.fullstack, ...projects.frontend]
        : selectedCategory === "Frontend"
        ? projects.frontend
        : projects.fullstack;

    return projectsList.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (typeof project.description === "string"
          ? project.description.toLowerCase().includes(searchTerm.toLowerCase())
          : project.description.some((desc) =>
              desc.toLowerCase().includes(searchTerm.toLowerCase())
            ))
    );
  };

  const filteredProjects = getFilteredProjects();

  return (
    <MainLayout>
      {/* Hero Section */}
      <Section className="bg-white dark:bg-gray-900 pt-28">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and learning experience.
          </p>
        </div>
      </Section>

      {/* Filters Section */}
      <Section className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section className="bg-white dark:bg-gray-900">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {Array.isArray(project.description)
                      ? project.description[0]
                      : project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            I'm always looking for new challenges and opportunities to
            collaborate on interesting projects.
          </p>
          <Button
            href="/contact"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary"
            size="lg"
          >
            Let's Discuss
          </Button>
        </div>
      </Section>
    </MainLayout>
  );
}
