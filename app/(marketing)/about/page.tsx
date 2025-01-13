"use server"

import { Github, Linkedin, Mail, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Passionate full-stack developer with expertise in modern web
          technologies and a strong foundation in AI/ML and data analysis.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card group rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-full bg-blue-500/10 p-3">
              <div className="size-6 rounded-full bg-blue-500" />
            </div>
            <h2 className="text-xl font-semibold">Background</h2>
          </div>
          <p className="text-muted-foreground">
            I’m a computer science graduate with experience in full-stack
            development, distributed systems, and crafting scalable solutions.
            My goal is to merge technical expertise with innovation to deliver
            impactful software.
          </p>
        </div>

        <div className="bg-card group rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-full bg-green-500/10 p-3">
              <div className="size-6 rounded-full bg-green-500" />
            </div>
            <h2 className="text-xl font-semibold">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Java",
              "Python",
              "C++",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "PostgreSQL",
              "Supabase",
              "Spark",
              "Machine Learning",
              "PySpark"
            ].map(skill => (
              <span
                key={skill}
                className="bg-secondary rounded-full px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-card group rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-full bg-purple-500/10 p-3">
              <div className="size-6 rounded-full bg-purple-500" />
            </div>
            <h2 className="text-xl font-semibold">Experience</h2>
          </div>
          <p className="text-muted-foreground">
            <strong>IBM</strong>: Refactored applications to microservices,
            optimized CI/CD pipelines, and implemented real-time data processing
            with Spark.
            <br />
            <strong>Dumadu Games Pvt. Ltd.</strong>: Developed a low-poly
            multiplayer FPS game using Unity and Photon Cloud, achieving stable
            performance on low-end hardware.
          </p>
        </div>

        <div className="bg-card group rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-full bg-yellow-500/10 p-3">
              <div className="size-6 rounded-full bg-yellow-500" />
            </div>
            <h2 className="text-xl font-semibold">Education</h2>
          </div>
          <p className="text-muted-foreground">
            <strong>University at Buffalo</strong>: Master's in Computer Science
            (GPA: 3.75)
            <br />
            <strong>New Horizon College of Engineering</strong>: Bachelor's in
            Computer Engineering (GPA: 3.7)
          </p>
        </div>

        <div className="bg-card group rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-full bg-red-500/10 p-3">
              <div className="size-6 rounded-full bg-red-500" />
            </div>
            <h2 className="text-xl font-semibold">Interests</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Open Source",
              "Game Development",
              "AI/ML",
              "Cloud Computing",
              "Distributed Systems",
              "DevOps"
            ].map(interest => (
              <span
                key={interest}
                className="bg-secondary rounded-full px-3 py-1 text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-card group rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-full bg-orange-500/10 p-3">
              <div className="size-6 rounded-full bg-orange-500" />
            </div>
            <h2 className="text-xl font-semibold">Let's Connect</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/aravind-aripaka" target="_blank">
                <Github className="mr-2 size-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://linkedin.com/in/aravind-aripaka-1077451b9"
                target="_blank"
              >
                <Linkedin className="mr-2 size-4" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://www.youtube.com/@aravinda1595/videos"
                target="_blank"
              >
                <Youtube className="mr-2 size-4" />
                YouTube
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="mailto:aaripaka@buffalo.edu">
                <Mail className="mr-2 size-4" />
                Email
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
