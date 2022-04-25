import Image from "next/image"


const IndexPageFork = () => {
    return (
        <section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                {/* <p className="font-bold text-3xl">Впечатления</p> */}

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

                <div className="grid grid-cols-2 grid-row-2 gap-6">
                    <div className="bg-red-100 h-full row-span-2"></div>
                    <div className="bg-red-100 h-96"></div>
                    <div className="bg-red-100 h-96"></div>
                </div>

            </div>
        </section>
    )
}

export default IndexPageFork
