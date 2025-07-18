import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="rounded-t-2xl w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>

              <div className="mt-4 flex items-center gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Details
                </Link>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-sm text-gray-500 hover:text-gray-800"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-sm text-gray-500 hover:text-gray-800"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
