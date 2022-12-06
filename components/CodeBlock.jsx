"use client";
import Typed from 'typed.js'
import { useEffect, useRef } from "react";


export default function CodeBlock() {
    const TypedElement = useRef(null);

    useEffect(() => {

        if (!TypedElement.current) return;

        const typed = new Typed(TypedElement.current, {
            strings: ["<span style='color:#569BEC'>export default</span> <span style='color:#DB7CD7'>Function</span> <span style='color:#375EAA'>Victor() {</span> <br>    <span style='color:#DB7CD7'>return</span><span style='color:#569BEC'>(</span><br>        <span style='color:#922E82'><</span><span style='color:#922E2E'>SoftwareDeveloper</span><br>            <span style='color:#DB7CD7'>name</span> <span style='color:#569BEC'>= \"</span><span style='color:#47B859'>victor jonsson</span><span style='color:#569BEC'>\"</span><br>            <span style='color:#DB7CD7'>email</span> <span style='color:#569BEC'>= \"</span><a href='mailto: victjon@gmail' style='color:#47B859'>victjon@gmail.com</span><span style='color:#569BEC'>\"</span><br>            <span style='color:#DB7CD7'>linkedIn</span> <span style='color:#569BEC'>= \"</span><a href='https://www.linkedin.com/in/carl-victor-jonsson/' target='_blank' style='color:#47B859'>https://www.linkedin.com/in/carl-victor-jonsson/</a><span style='color:#569BEC'>\"</span><br>            <span style='color:#DB7CD7'>onHire</span> <span style='color:#569BEC'>=</span> <span style='color:#DAA235'>{</span><span style='color:#375EAA'>()</span> <span style='color:#DB7CD7'>=></span> <span style='color:#375EAA'>writeQualityCode(🍪)</span><span style='color:#DAA235'>}</span><br>        <span style='color:#922E82'>/></span><br>    <span style='color:#569BEC'>)</span><br><span style='color:#375EAA'>}</span><span style='color:#569BEC'>;</span>"],
            //light blue #569BEC, pink #DB7CD7, dark blue #375EAA, purple #922E82, red #922E2E, green #47B859, yellow #DAA235
            startDelay: 300,
            typeSpeed: 10,
            showCursor: false,
            fadeOut: true,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div class="mt-12">
            <pre><code class="text-xs sm:text-2xl min-w-full" ref={TypedElement}>
                { }
            </code></pre>

        </div>)

}