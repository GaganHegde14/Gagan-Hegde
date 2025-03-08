"use client";

import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import Section from "@/components/ui/Section";

export default function CertificationsPage() {
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

  return (
    <MainLayout>
      <Section className="bg-white dark:bg-gray-900 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Certifications
          </h1>
          <div className="max-w-4xl mx-auto space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {cert.title}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {cert.organization}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </MainLayout>
  );
}
