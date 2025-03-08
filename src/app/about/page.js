"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDownload,
  FaInstagram,
  FaPhone,
  FaLink,
} from "react-icons/fa";
import MainLayout from "@/components/layout/MainLayout";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  const skills = [
    {
      category: "Languages",
      items: ["C/C++", "Java", "HTML/CSS", "JavaScript"],
    },
    {
      category: "Frameworks",
      items: ["React", "Express", "Redux", "Bootstrap", "Tailwind", "MUI Joy"],
    },
    {
      category: "Runtime & Databases",
      items: ["Node.js", "MySQL", "MongoDB"],
    },
    {
      category: "Developer Tools",
      items: ["Visual Studio", "Git & GitHub", "Linear"],
    },
  ];

  const education = {
    degree: "B.E in Information Science",
    institution: "Cambridge Institute of Technology",
    location: "Bangalore, India",
    duration: "2023 - 2027",
    cgpa: "9.4/10",
  };

  const secondaryEducation = {
    degree: "12th with Physics, Chemistry, Mathematics and Biology",
    institution: "MES PU College",
    location: "Sirsi, Karnataka",
    duration: "2021 - 2022",
  };

  const certifications = [
    {
      title: "Google Cloud Skill Badges",
      organization: "Google Cloud",
      date: "Nov 2024",
      description:
        "Earned 15+ Google Cloud skill badges, gaining hands-on experience in cloud services, AI, and data analytics. Developed expertise in generative AI, cloud monitoring, and API-driven image and speech analysis, showcasing the ability to build scalable, innovative solutions on Google Cloud.",
    },
    {
      title: "Event Planning, Marketing and Management",
      organization: "Udemy",
      date: "Dec 2023",
      description:
        "Event Series Management: Gained expertise in organizing and managing successful event series by increasing attendance and engagement through effective monetization strategies, while leveraging digital marketing techniques, social media, SEO, and press coverage to enhance visibility and promotion.",
    },
  ];

  const projects = [
    {
      title: "Fluency – AI-Powered Language Assistant",
      date: "Mar 2025",
      description: [
        "Hackathon AI Project With a team size of 5 members we developed Fluency, an AI-driven language assistant during a 5 hour hackathon, focusing on conversational practice and exercises to enhance user learning. Implemented LLaMA-3.3-70B-SpecDec for personalized chatbot interactions and Whisper-Large-v3 for voice-enabled learning.",
        "Interactive Learning Experience: Designed and integrated diverse language exercises, including structured challenges and real-time conversation scenarios, providing users with an engaging and adaptive learning environment within a feature-rich Mern stack application.",
        "Next.js Frontend Implementation: Spearheaded the creation of an intuitive and visually appealing UI in Next.js, ensuring seamless user navigation, real-time chatbot interactions, and accessibility across devices, enhancing the overall user experience.",
      ],
    },
    {
      title: "VybSync Chat Application",
      date: "Mar 2025",
      description: [
        "Real-Time Communication Framework: Led the development of a robust real-time chat application with features like group chats, direct messaging, and typing indicators using Node.js, Express, Socket.IO, and MongoDB, ensuring seamless user interaction and scalability.",
        "Interactive UI/UX Design: Designed and implemented an intuitive interface with responsive layouts, dynamic message animations, and user-friendly navigation menus using React, Vite, and Material-UI (MUI Joy), enhancing user engagement and accessibility across devices.",
        "Feature Implementation: Built key functionalities including user authentication (Google OAuth), message persistence, seen/unseen status tracking, and group management, creating a feature-rich platform for real-time collaboration.",
      ],
    },
    {
      title: "Google Developer Group-CIT Main Campus Website",
      date: "Dec 2024",
      description: [
        "Interactive Design: Led the creation of an immersive interface with animations, hover effects, and a responsive navigation menu using HTML, CSS, and JavaScript.",
        "Showcasing Content: Designed and implemented key features like event highlights, project showcases, and a horizontally scrollable team section with detailed member profiles.",
      ],
    },
  ];

  const socialLinks = {
    github: "https://github.com/GaganHegde14",
    email: "gbhegde14@gmail.com",
    linkedin: "https://www.linkedin.com/in/gaganhegde14/",
    instagram: "https://instagram.com/gagan_.hegde",
    twitter: "https://x.com/Gaganhede",
    phone: "+918310960257",
    linktree: "#", // Add your linktree URL here
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <Section className="bg-white dark:bg-gray-900 pt-28">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <div className="relative w-64 h-64 md:w-75 md:h-75 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <Image
                src="/images/profile/IMG_2457.JPG"
                alt="Gagan Hegde"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/3 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Gagan Hegde
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm an undergraduate student pursuing a B.E. in Information
              Science with a passion for problem-solving, DSA, and web
              development. Currently maintaining a CGPA of 9.4, I'm dedicated to
              creating innovative solutions and continuously expanding my
              knowledge in the tech field.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                href="https://gaganhegde14.github.io/Resume/"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<FaDownload />}
              >
                Download Resume
              </Button>
              <div className="flex gap-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <FaEnvelope className="h-6 w-6" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a
                  href={`tel:${socialLinks.phone}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <FaPhone className="h-6 w-6" />
                </a>
                <a
                  href={socialLinks.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <FaLink className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Education Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Education
        </h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {education.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {education.institution}, {education.location}
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-gray-500 dark:text-gray-400">
                {education.duration}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                CGPA
              </p>
              <p className="text-gray-900 dark:text-white font-semibold text-lg">
                {education.cgpa}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {secondaryEducation.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {secondaryEducation.institution},{" "}
                  {secondaryEducation.location}
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-gray-500 dark:text-gray-400">
                {secondaryEducation.duration}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section className="bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Licenses & Certifications
        </h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {cert.organization}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-500 dark:text-gray-400">
                  {cert.date}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Featured Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="mt-2 md:mt-0 text-gray-500 dark:text-gray-400">
                  {project.date}
                </div>
              </div>
              <ul className="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </MainLayout>
  );
}
