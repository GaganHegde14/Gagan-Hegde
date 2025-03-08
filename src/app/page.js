"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";
import MainLayout from "@/components/layout/MainLayout";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Home() {
  const heroRef = useRef(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <Section
        className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative"
        withContainer={false}
      >
        <div
          ref={heroRef}
          className="absolute inset-0 z-0 opacity-10 dark:opacity-20"
          style={{
            backgroundImage: 'url("/code-bg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                    Hi, I'm <span className="text-primary">Gagan Hegde</span>
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                    Full Stack Developer
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
                    I'm an undergraduate student pursuing a B.E. in Information
                    Science with a passion for problem-solving, DSA, and web
                    development.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button href="/projects" size="lg">
                    View My Work
                  </Button>
                  <Button href="/contact" variant="outline" size="lg">
                    Contact Me
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-4"
                >
                  <a
                    href="https://github.com/GaganHegde14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gaganhegde14/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-1/2 flex justify-center"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                  <Image
                    src="/images/profile/Linkedin_dp.jpg"
                    alt="Gagan Hegde"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* About Section Preview */}
      <Section id="about-preview" className="bg-white dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer with a strong foundation in full-stack
            development and a love for creating elegant solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <FaLaptopCode className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Web Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Experienced in building responsive and dynamic web applications
              using modern technologies.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <FaGraduationCap className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Education
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              B.E. in Information Science (4th semester) with a CGPA of 9.4.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-primary mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Problem Solving
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Passionate about DSA and competitive programming with strong
              analytical skills.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/about" variant="outline">
            Learn More About Me
          </Button>
        </div>
      </Section>

      {/* Projects Preview Section */}
      <Section id="projects-preview" className="bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects. Check out my projects page for
            more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card Placeholder 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                <Image
                  src="/images/projects/fluency.png"
                  alt="Fluency AI Language Assistant"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Fluency – AI-Powered Language Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Platform that provides interactive exercises, a generative AI
                chatbot, and engaging challenges to help users improve their
                language skills effectively.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  React
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Node.js
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Google Sheets
                </span>
              </div>
              <div className="flex gap-4">
                <Button
                  href="https://fluency1.vercel.app/"
                  size="sm"
                  variant="outline"
                >
                  View Details
                </Button>
                <Button
                  href="https://github.com/guruswarupa/fluency"
                  size="sm"
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" /> GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Project Card Placeholder 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                <Image
                  src="/images/projects/vybsync.png"
                  alt="VybSync Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Vybsync - Real-Time Chat Application
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Vybsync is a real-time chat application that allows users to
                chat with each other in real-time.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  React
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Google OAuth
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  MongoDB
                </span>
              </div>
              <div className="flex gap-4">
                <Button
                  href="https://vybsync.vercel.app/join"
                  size="sm"
                  variant="outline"
                >
                  View Details
                </Button>
                <Button
                  href="https://github.com/GaganHegde14/Vybsync"
                  size="sm"
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" /> GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Project Card Placeholder 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                <Image
                  src="/images/projects/gdg.png"
                  alt="GDG Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Google Developer Group CITech Main Website
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Website for Google Developer Group CITech Main Chapter.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Vue.js
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Express.js
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  PostgreSQL
                </span>
              </div>
              <div className="flex gap-4">
                <Button
                  href="https://gdg-citech-main.vercel.app/"
                  size="sm"
                  variant="outline"
                >
                  View Details
                </Button>
                <Button
                  href="https://github.com/GaganHegde14/GDG-CITech-Main"
                  size="sm"
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" /> GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/projects">View All Projects</Button>
        </div>
      </Section>

      {/* Contact CTA Section */}
      <Section id="contact-cta" className="bg-primary text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Button
            href="/contact"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary"
            size="lg"
          >
            Get In Touch
          </Button>
        </div>
      </Section>
    </MainLayout>
  );
}
