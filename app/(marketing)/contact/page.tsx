"use server"

import { Github, Linkedin, Mail, Youtube } from "lucide-react"
import Link from "next/link"

export default async function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          I’d love to hear from you! Whether it's a project, collaboration, or
          just a friendly hello, feel free to reach out.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Link
          href="https://linkedin.com/in/aravind-aripaka-1077451b9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card group flex flex-col items-center gap-4 rounded-xl border p-6 text-center shadow-sm transition-all hover:shadow-md"
        >
          <div className="rounded-full bg-blue-500/10 p-4">
            <Linkedin className="size-8 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold">LinkedIn</h3>
          <p className="text-muted-foreground text-sm">
            Connect with me on LinkedIn for professional updates.
          </p>
        </Link>

        <Link
          href="https://github.com/aravind-aripaka"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card group flex flex-col items-center gap-4 rounded-xl border p-6 text-center shadow-sm transition-all hover:shadow-md"
        >
          <div className="rounded-full bg-gray-900/10 p-4">
            <Github className="size-8 text-gray-900 dark:text-gray-100" />
          </div>
          <h3 className="text-lg font-semibold">GitHub</h3>
          <p className="text-muted-foreground text-sm">
            Check out my repositories and projects on GitHub.
          </p>
        </Link>

        <Link
          href="https://www.youtube.com/@aravinda1595/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card group flex flex-col items-center gap-4 rounded-xl border p-6 text-center shadow-sm transition-all hover:shadow-md"
        >
          <div className="rounded-full bg-red-500/10 p-4">
            <Youtube className="size-8 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold">YouTube</h3>
          <p className="text-muted-foreground text-sm">
            Explore my videos and tutorials on YouTube.
          </p>
        </Link>

        <Link
          href="mailto:aaripaka@buffalo.edu"
          className="bg-card group flex flex-col items-center gap-4 rounded-xl border p-6 text-center shadow-sm transition-all hover:shadow-md"
        >
          <div className="rounded-full bg-green-500/10 p-4">
            <Mail className="size-8 text-green-500" />
          </div>
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-muted-foreground text-sm">
            Drop me an email for any inquiries or collaborations.
          </p>
        </Link>
      </div>
    </div>
  )
}
