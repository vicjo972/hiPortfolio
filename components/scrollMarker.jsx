import { ArrowLongDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ScrollMarker() {


    return (
        <>
            <a href="#about" class="animate-bounce hover:bg-gray-400 w-12 h-20 bg-portfolioWhite-50 rounded-full flex items-center justify-center mb-12">
                <ArrowLongDownIcon class="w-8 h-8 text-portfolioBlue-50" />
            </a>

        </>
    )
};
