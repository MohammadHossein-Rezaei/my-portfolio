export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  content: string;
  link: string;
  github: string;
};

export const projects: Project[] = [
  {
    slug: "store",
    title: "Online Store",
    description:
      "An online store built with React.js, TypeScript, and Tailwind CSS.",
    image: "/images/store.png",
    content:
      "- Developed with Vite + React.js + TypeScript\n- UI designed with Tailwind CSS\n- State management using Zustand\n- Routing handled by React Router\n- Implemented modern, responsive components\n- Focus on clean architecture and optimized code",
    link: "https://mohammadhossein-rezaei.github.io/online-store/",
    github: "https://github.com/MohammadHossein-Rezaei/online-store",
  },
  {
    slug: "todo-app",
    title: "ToDo App",
    description:
      "A task management application built with React and TypeScript.",
    image: "/images/todo.png",
    content:
      "- Developed with Vite + React.js + TypeScript\n- UI designed with Tailwind CSS and Framer Motion\n- Routing handled by React Router\n- Implemented modern, responsive components\n- Focus on clean architecture and optimized code",
    link: "https://mohammadhossein-rezaei.github.io/Todos-list/",
    github: "https://github.com/MohammadHossein-Rezaei/Todos-list",
  },
  {
    slug: "my-resume",
    title: "My Resume",
    description: "My personal resume hosted on a website.",
    image: "/images/resume.png",
    content: "",
    link: "https://mohammadhossein-rezaei.github.io/my-resume/",
    github: "https://github.com/MohammadHossein-Rezaei/my-resume",
  },
];
