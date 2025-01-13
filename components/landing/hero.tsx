"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import {
  Linkedin,
  Github,
  Youtube,
  Mail,
  Code,
  Database,
  Layout,
  Sparkles
} from "lucide-react"
import Link from "next/link"
import AnimatedGradientText from "../magicui/animated-gradient-text"
import HeroVideoDialog from "../magicui/hero-video-dialog"
import { useState, useEffect } from "react"

const profiles = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/aravind-aripaka-1077451b9/"
  },
  {
    icon: Github,
    link: "https://github.com/aravind-aripakaaravind-aripaka"
  },
  {
    icon: Youtube,
    link: "https://www.youtube.com/@aravinda1595/videos"
  },
  {
    icon: Mail,
    link: "mailto:aaripaka@buffalo.edu"
  }
]

const skills = [
  {
    icon: Code,
    title: "Programming Languages",
    description: "Java, Python, C++, TypeScript, Kotlin"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "PostgreSQL, Supabase, Node.js, Drizzle ORM"
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "React.js, Next.js, TailwindCSS, Framer Motion"
  },
  {
    icon: Sparkles,
    title: "AI & ML Integration",
    description: "Machine Learning, PySpark, LLMs, Data Analysis"
  }
]

const projects = [
  {
    title: "Buffalo Crime Analysis",
    description:
      "Analysis of crime patterns in Buffalo using data science and visualization techniques",
    github:
      "https://github.com/aravind-aripakaaravind-aripaka/Buffalo_crime_analysis",
    tech: ["Python", "Data Science", "Visualization"]
  },
  {
    title: "Stocks RAG LLM",
    description:
      "LLM-powered system for stock analysis using RAG (Retrieval Augmented Generation)",
    github: "https://github.com/aravind-aripakaaravind-aripaka/stocks_rag_llm",
    tech: ["LLM", "RAG", "Finance"]
  },
  {
    title: "FPS Shooter Game",
    description:
      "First-person shooter game developed with modern gaming technologies",
    github:
      "https://github.com/aravind-aripakaaravind-aripaka/FPS_SHOOTER-dumadu",
    tech: ["Game Dev", "Unity", "C#"]
  },
  {
    title: "Crypto Ecosystem",
    description:
      "Comprehensive cryptocurrency ecosystem with various blockchain features",
    github:
      "https://github.com/aravind-aripakaaravind-aripaka/Crypto-EcoSystem",
    tech: ["Blockchain", "Crypto", "Web3"]
  },
  {
    title: "Ethereum Transfer App",
    description: "Application for seamless Ethereum transfers and transactions",
    github:
      "https://github.com/aravind-aripakaaravind-aripaka/Ethereum-transfer-App",
    tech: ["Ethereum", "Smart Contracts", "DApp"]
  }
]

export const HeroSection = () => {
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center px-8 pt-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        <AnimatedGradientText>
          🚀 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
          <span
            className={cn(
              `animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Welcome to Aravind's Portfolio
          </span>
        </AnimatedGradientText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-8 flex max-w-2xl flex-col items-center justify-center gap-6"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-balance text-6xl font-bold"
        >
          Master's Student in Computer Science Developer | Engineer
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="max-w-xl text-balance text-xl"
        >
          Experienced in building scalable software, microservices, and
          interactive web applications with a strong foundation in AI/ML and
          data analysis.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          <div className="flex gap-4">
            {profiles.map((profile, index) => {
              const Icon = profile.icon
              return (
                <Link
                  key={index}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <Icon className="size-6" />
                </Link>
              )
            })}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4 rounded-xl border bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:bg-gray-800/50"
            >
              <Icon className="size-8 text-blue-500" />
              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-16 w-full"
      >
        <h2 className="mb-8 text-center text-2xl font-bold">
          Featured Projects
        </h2>
        <div className="relative mx-auto max-w-md overflow-hidden">
          <div className="relative">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  opacity: index === currentProject ? 1 : 0.3,
                  scale: index === currentProject ? 1 : 0.95,
                  x: `${(index - currentProject) * 100}%`,
                  zIndex: index === currentProject ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 w-full"
                style={{
                  position: index === currentProject ? "relative" : "absolute"
                }}
              >
                <div className="group relative h-[300px] overflow-hidden rounded-xl border bg-white/50 shadow-sm backdrop-blur-sm dark:bg-gray-800/50">
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/80 p-6 text-white opacity-0 group-hover:opacity-100"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                      <Github className="size-5" />
                      <span>View on GitHub</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
