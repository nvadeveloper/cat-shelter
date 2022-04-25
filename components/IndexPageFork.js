import Image from "next/image"
import Link from "next/link"


const IndexPageFork = () => {
    return (
        <section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                {/* <p className="font-bold text-3xl">Впечатления</p> */}

                <div className="grid grid-cols-2 grid-row-2 gap-6 h-[70vh]">

                    <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 row-span-2 rounded-xl p-12 flex flex-col justify-between">
                        <p className="font-bold text-white text-5xl">Найти катера</p>
                        <Link href='/boats'>
                            <a className="text-center border rounded-xl bg-white w-40 py-4">
                                Начать поиск
                            </a>
                        </Link>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 rounded-xl p-12 flex flex-col justify-between">
                        <p className="font-bold text-white text-5xl">Найти яхту</p>
                        <Link href='/boats'>
                            <a className="text-center border rounded-xl bg-white w-40 py-4">
                                Начать поиск
                            </a>
                        </Link>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 rounded-xl p-12 flex flex-col justify-between">
                        <p className="font-bold text-white text-5xl">Найти теплоход</p>
                        <Link href='/boats'>
                            <a className="text-center border rounded-xl bg-white w-40 py-4">
                                Начать поиск
                            </a>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default IndexPageFork



{/* <div className="lg:grid lg:grid-cols-2 lg:gap-6 h-[600px]">
                    <div className="relative">
                        <Image
                            src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg'
                            layout='fill'
                            objectFit='cover'
                            alt='Rent Boat image'
                            className="rounded-xl"
                        />
                    </div>
                    <div className="lg:grid lg:grid-rows-2 lg:gap-6">
                        <div className="relative">
                            <Image
                                src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg'
                                layout='fill'
                                objectFit='cover'
                                alt='Rent Boat image'
                                className="rounded-xl"
                            />
                        </div>
                        <div className="relative">
                            <Image
                                src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg'
                                layout='fill'
                                objectFit='cover'
                                alt='Rent Boat image'
                                className="rounded-xl"
                            />
                        </div>
                    </div>

                </div> */}

{/* <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-row-2 gap-6 lg:h-[600px]">

                    <div className="h-64 sm:h-96 lg:h-full lg:row-span-2 relative">
                        <div>
                            <Image
                                src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg'
                                layout='fill'
                                objectFit='cover'
                                alt='Rent Boat image'
                                className="rounded-xl"
                            />
                            <span className="bg-yellow-500 z-100">HEADER</span>
                        </div>
                    </div>

                    <div className="h-64 sm:h-96 lg:h-full relative">
                        <Image
                            src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg'
                            layout='fill'
                            objectFit='cover'
                            alt='Rent Boat image'
                            className="rounded-xl"
                        />
                    </div>

                    <div className="h-64 sm:h-96 lg:h-full relative">
                        <Image
                            src='https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg'
                            layout='fill'
                            objectFit='cover'
                            alt='Rent Boat image'
                            className="rounded-xl"
                        />

                    </div>
                </div> */}