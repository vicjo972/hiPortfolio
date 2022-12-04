import Head from 'next/head'
import Navbar from '../components/navbar'
import MainHeader from '../components/mainheader'
import ScrollMarker from '../components/scrollMarker';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div class="flex flex-col h-screen -mt-28">
        
        <div class="flex-grow">
          <MainHeader />
          <div class="flex justify-center items-center">
            <ScrollMarker />
          </div>
        </div>
      </div>

      <div id = "about" class="h-screen">
      <ScrollMarker />
      </div>

      <div id = "projects" class="h-screen">
      <ScrollMarker />
      </div>

      <div id = "contact" class="h-screen">
      <ScrollMarker />
      </div>


    </>
  )
}
