"use client";

import Link from "next/link";
import Container from "../ui/Container";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <FaGithub className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <FaLinkedin className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <FaTwitter className="h-5 w-5" />,
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: <FaEnvelope className="h-5 w-5" />,
    },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Certifications", href: "/certifications" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Portfolio
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              A full-stack developer passionate about creating beautiful and
              functional web applications.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Contact
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out to me for any questions or opportunities.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Email: your.email@example.com
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Location: Your City, Country
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Built with Next.js, React, Node.js, Express, and MongoDB
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
