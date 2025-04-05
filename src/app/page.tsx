import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">School Portal</h1>
          <nav className="flex gap-4">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to the School Portal</h2>
        <p className="text-lg mb-8">
          Your one-stop solution for managing school activities, student records, and more.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#features"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
          >
            Explore Features
          </a>
          <a
            href="#contact"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded shadow hover:bg-gray-300"
          >
            Contact Us
          </a>
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} School Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
