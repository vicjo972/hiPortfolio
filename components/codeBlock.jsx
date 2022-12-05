"use client";

import Typewriter from 'typewriter-effect';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default function CodeBlock() {
    return (
        <div class="flex items-center justify-center h-5/6">
                <h1>
            <Typewriter 
                options={{delay: 20, strings: ['Software <br/> Dev', 'Data Science', 'Tech Nerd😎'], autoStart: true, loop: true,}}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('export default Function Victor() {')
                            .typeString('<br/>')
                            .typeString('    return (')
                            .typeString('<br/>')
                            .typeString('         <SoftwareDeveloper')
                            .typeString('<br/>')
                            .typeString('            name= ”victor jonsson”')
                            .typeString('<br/>')
                            .typeString('            contact= “victjon@gmail.com”')
                            .typeString('<br/>')
                            .typeString('            occupation = “student”')
                            .typeString('<br/>')
                            .typeString('            onHire = {() => writeQualityCode(🍪)}')
                            .typeString('<br/>')
                            .typeString('         />')
                            .typeString('<br/>')
                            .typeString('    )')
                            .typeString('<br/>')
                            .typeString('};')
                            .pauseFor(2500)
                            .start();
                            
                        
                    }}
                /> 
                </h1>
       

        </div>
    )
};

{/* <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('export default Function Victor() {')
                            .typeString('<br/>')
                            .typeString('    return (')
                            .typeString('<br/>')
                            .typeString('         <SoftwareDeveloper')
                            .typeString('<br/>')
                            .typeString('            name= ”victor jonsson”')
                            .typeString('<br/>')
                            .typeString('            contact= “victjon@gmail.com”')
                            .typeString('<br/>')
                            .typeString('            occupation = “student”')
                            .typeString('<br/>')
                            .typeString('            onHire = {() => writeQualityCode(🍪)}')
                            .typeString('<br/>')
                            .typeString('         />')
                            .typeString('<br/>')
                            .typeString('    )')
                            .typeString('<br/>')
                            .typeString('};')

                            .pauseFor(2500)
                            .start();
                    }}
                /> */}