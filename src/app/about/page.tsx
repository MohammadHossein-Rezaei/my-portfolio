// src/app/about/page.tsx
import Link from "next/link";

export const metadata = {
  title: "About Me | Mohammad Hossein Rezaei",
  description: "Learn more about my background, skills, and experience.",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-gray-700 leading-relaxed">
          I'm a self-taught and passionate front-end developer who has
          diligently learned skills like JavaScript, TypeScript, HTML, CSS and
          libraries such as React.js. I have experience working with tools like
          Redux Toolkit, React Router, and Tailwind CSS, and I'm familiar with
          Responsive Design principles. While I'm still at the beginning of my
          journey and haven't mastered these technologies completely, my strong
          enthusiasm and quick learning ability make me ready to expand my
          knowledge inaprofessional environment. As a detail-oriented and
          committed individual, I always strive to write clean and efficient
          code.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">🛠️ Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>HTML / CSS / Sass</li>
          <li>JavaScript / TypeScript</li>
          <li>React.js (Functional Components, Hooks)</li>
          <li>
            Next.js (v15) — App Router, Dynamic Routing, generateStaticParams
          </li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>Zustand</li>
          <li>Git & GitHub</li>
          <li>Responsive Design & Clean Code</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">🌐 Languages</h2>
        <p className="text-gray-700">
          Persian (Native), English (Intermediate)
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">📁 Portfolio</h2>
        <p className="text-gray-700">
          You can check out my main projects on the{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            homepage
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
