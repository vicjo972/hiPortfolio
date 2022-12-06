import Typewriter from 'typewriter-effect';


export default function MainHeader() {
    return (
        <div class="flex items-center justify-center h-5/6 w-8/12">
            <h1 class="text-4xl sm:text-6xl lg:text-8xl font-bold min-w-full">
                Hi, I&apos;m Victor.
            <Typewriter 
                options={{
                    strings: ['Fullstack dev💻', 'UX-designer🎨', 'Tech Nerd😎'],
                    autoStart: true,
                    delay: 80,
                    loop: true,
                }}
            />
            </h1>

        </div>
    )
};
