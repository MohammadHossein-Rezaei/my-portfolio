import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          M.Rezaei
        </Link>

        <div className="flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
