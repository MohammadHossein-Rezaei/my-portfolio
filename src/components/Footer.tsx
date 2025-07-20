import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600">
        <div className="text-center md:text-left">
          <p className="font-semibold">Contact</p>
          <p>
            Email:
            <a
              href="mohammadhossein.r423@gmail.com"
              className="text-blue-600 hover:underline"
            >
              rezaei.dev@gmail.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <Link
              href="https://github.com/MohammadHossein-Rezaei"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              MohammadHossein-Rezaei
            </Link>
          </p>
          <p>
            LinkedIn:{" "}
            <Link
              href="https://linkedin.com"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              linkedin.com/in/yourprofile
            </Link>
          </p>
          <p>phone number: 09928957247</p>
        </div>

        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Mohammad Hossein Rezaei</p>
        </div>
      </div>
    </footer>
  );
}
