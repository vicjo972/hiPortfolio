import Typewriter from 'typewriter-effect';


export default function MainHeader() {
    return (
        <div class="flex items-center justify-center h-5/6">
            <h1 class="text-4xl sm:text-6xl lg:text-8xl font-bold">
                Hi, I&apos;m Victor .
            <Typewriter 
                options={{
                    strings: ['Software Dev', 'Data Science', 'Tech Nerd😎'],
                    autoStart: true,
                    loop: true,
                }}
            />
            </h1>

        </div>
    )
};
