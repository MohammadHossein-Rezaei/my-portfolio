import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/projects";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="rounded-xl w-full object-cover mb-8 shadow-md"
      />

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
      <p className="text-gray-600 text-lg mb-6">{project.description}</p>

      <div className="prose prose-lg text-gray-800 mb-8">
        {project.content
          .split("- ")
          .map(
            (line, index) => line.trim() && <p key={index}>• {line.trim()}</p>
          )}
      </div>

      <div className="flex gap-4">
        <a
          href={project.link}
          target="_blank"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
        >
          View Live
        </a>
        <a
          href={project.github}
          target="_blank"
          className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm"
        >
          GitHub Repo
        </a>
      </div>
    </main>
  );
}
