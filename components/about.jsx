import Image from 'next/image'


export default function About() {
    return (
        <>
            <div class="grid grid-cols-12 gap-4  mt-10">
                <div class="col-span-8">
                    <p class="text-md sm:text-lg lg:text-lg">
                        I&apos;ve loved technology my whole life, from playing video games and learning to write python pig latin translators in primary school, building computers in high school, and studying engineering at Linköping university. I am both intrigued and excited about all kinds of tech, but as I&apos;m graduating from university in 2023 I know that I want to build great software products for a living. I have project experience in frontend and backend development, and I&apos;ve done my fair share of statistical data analysis in Matlab. I want to help build the software of tomorrow.
                    </p>
                </div>
                <div class="col-span-4 flex items-center justify-end">
                    <Image src="/porträtt.jpg" alt="Picture of the Victor" width="250" height="300" class="rounded-md"/>
                </div>
                <div class="col-span-12">
                    <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold mt-6">
                        some tools i&apos;ve worked with:
                    </h3>
                </div>
                <div class="col-span-12">
                    <div class="grid grid-cols-12 gap-4 mt-4">
                        <div class="col-span-2 flex justify-center items-center animate-spin-slow">
                            <Image
                                src="/react-2.svg"
                                alt="react.js"
                                width="90"
                                height="300"
                            >
                            </Image>
                        </div>
                        <div class="col-span-2 flex justify-center items-center">
                            <Image
                                src="/Next.js_Logotype_Light_Background (1).svg"
                                alt="next.js"
                                width="150"
                                height="300"
                            >
                            </Image>
                        </div>
                        <div class="col-span-2 flex justify-center items-center">
                            <Image
                                src="/typescriptabbrlogo.svg"
                                alt="typescript"
                                width="80"
                                height="300"
                            >
                            </Image>
                        </div>
                        <div class="col-span-2 flex justify-center items-center">
                            <Image
                                src="/sqlitelogo.svg"
                                alt="sqlite"
                                width="160"
                                height="300"
                            >
                            </Image>
                        </div>
                        <div class="col-span-2 flex justify-center items-center">
                            <Image
                                src="/flasklogo.svg"
                                alt="flask"
                                width="80"
                                height="300"
                            >
                            </Image>
                        </div>

                        <div class="col-span-2 flex justify-center items-center">
                            <Image
                                src="/figma-5 (1).svg"
                                alt="figma"
                                width="150"
                                height="300"
                            >
                            </Image>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
};
