export default function Navbar() {
  return (
    <nav class="top-0 sticky flex justify-center py-10 px-6 bg-gradient-to-b from-portfolioBlue-50 z-50">
      <div>
        <a href="/" class=" sm:text-xl font-bold hover:text-red-900 m-5">//about</a>
        <a href="#projects" class="lg:text-xl font-bold no-underline hover:text-blue-500 m-5">//projects</a>
        <a href="#contact" class="lg:text-xl font-bold no-underline hover:text-green-700 m-5">//contact</a>
      </div>
    </nav>
  )
};
