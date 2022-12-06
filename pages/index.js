import Head from 'next/head'
import Navbar from '../components/navbar'
import MainHeader from '../components/mainheader'
import ScrollMarker from '../components/scrollMarker';
import CodeBlock from '../components/CodeBlock';
import About from '../components/about';
import ProjectCards from '../components/projectcards';

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Jonsson Portfolio</title>
      </Head>

      <Navbar />

      <div class="flex flex-col h-screen -mt-24 relative">
        <div class="flex-grow flex justify-center items-center">
          <MainHeader />
        </div>
        <div class="flex justify-center items-center">
          <ScrollMarker />
        </div>
      </div>

      <div id="about" class="h-screen flex justify-center items-center bg-portfolioBlue-50">
        <div class="w-9/12 h-full">
          <h2 class="text-4xl sm:text-5xl lg:text-7xl font-bold mt-28">
            who am i?
          </h2>
          <About />
        </div>
      </div>

      <div id="projects" class=" flex justify-center items-center bg-portfolioBlue-50">
        <div class="w-9/12 h-full">
          <h2 class="text-4xl sm:text-5xl lg:text-7xl font-bold mt-28">
            projects
          </h2>
          <ProjectCards />
        </div>
      </div>

      <div id="contact" class="h-screen flex justify-center items-center bg-portfolioBlue-50">
        <div class="w-9/12 h-full">
          <h2 class="text-4xl sm:text-5xl lg:text-7xl font-bold mt-28">
            contact
          </h2>
          <CodeBlock />
        </div>
      </div>
    </>
  )
}
