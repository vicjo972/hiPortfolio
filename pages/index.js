import Head from 'next/head'
import Navbar from '../components/navbar'
import MainHeader from '../components/mainheader'
import ScrollMarker from '../components/scrollMarker';
import CodeBlock from '../components/codeBlock';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
        
      </Head>

      <Navbar />

      <div class="flex flex-col h-screen -mt-28 bg-charlie-brown">

        <div class="flex-grow">
          <MainHeader />
          <div class="flex justify-center items-center">
            <ScrollMarker />
          </div>
        </div>
      </div>

      <div id="about" class="h-screen flex justify-center items-center">
        <div class="w-6/12 h-4/6">
          <CodeBlock />
        </div>
        
      </div>

      <div id="projects" class="h-screen">
        <ScrollMarker />
      </div>

      <div id="contact" class="h-screen">
        <ScrollMarker />
      </div>


    </>
  )
}
