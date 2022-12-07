import Image from 'next/image';
import { useCollection, useDocument} from "react-firebase-hooks/firestore";
import { doc } from 'firebase/firestore';
import { app, fireStore } from '../firebase/clientApp';

export default function About() {
  
    const [description, loading, error] = useDocument(
        doc(fireStore, 'info', 'aboutMe'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    let text;

    if (!loading && description) {
        text = description.data().description
    }
    

    return (
        <>
            <div class="grid grid-cols-12 gap-4  mt-10">
                <div class="col-span-8">
                    <span class="text-md sm:text-lg lg:text-lg">
                        {text}
                    </span>
                </div>
                <div class="col-span-4 flex items-center justify-end">
                    <Image src="/porträtt.jpg" alt="Picture of the Victor" width="250" height="300" class="rounded-md" />
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
