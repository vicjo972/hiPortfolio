import Link from "next/link"

export default function Navbar() {
  return (
    <nav class="top-0 sticky flex justify-center py-10 px-6 bg-gradient-to-b from-portfolioBlue-50 z-50">
      <div>
        <Link href="#about" class=" sm:text-xl font-bold hover:text-red-900 m-5">//about</Link>
        <Link href="#projects" class="lg:text-xl font-bold no-underline hover:text-blue-500 m-5">//projects</Link>
        <Link href="#contact" class="lg:text-xl font-bold no-underline hover:text-green-700 m-5">//contact</Link>
      </div>
    </nav>
  )
};
