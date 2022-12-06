import Image from 'next/image'

export default function Card() {
    return (
        <>
            <div class="col-span-6">
                <div>
                    <a href="#" class="group relative block bg-black">
                        <img
                            alt="Developer"
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div class="relative p-8">
                            <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                                Frontend & UX
                            </p>

                            <p class="text-2xl font-bold text-white">Diatomic Software, Storage Handling</p>

                            <div class="mt-16">
                                <div
                                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p class="text-sm text-white">
                                    Built a storage management system for Region Östergötland. Developed a web application where hospital personnel can scan storage units with a phone to register withdrawals in storages. Included functionality such as stocktaking, placing orders, storage search. As a UX designer I designed a prototype with wireframes in Figma, and as a developer I developed order notifications and stocktaking functionality. Built with React.js, Typescript and MUI.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}