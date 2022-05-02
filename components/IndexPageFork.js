import Image from "next/image"
import Link from "next/link"
import WhiteButton from "./elements/WhiteButton"


const IndexPageFork = () => {
    return (
        <section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 md:grid-row-2">
                    <div className="md:row-span-2 h-80 md:h-full relative">
                        <img
                            src='https://peacepalacelibrary.nl/sites/default/files/styles/featured_image/public/2020-07/Law%20of%20the%20Sea_0.jpg?itok=l6tllHxz'
                            className="rounded-xl w-full h-full object-center object-cover brightness-50"
                        />
                        <div className="absolute top-10 left-10">
                            <p className="font-bold text-white text-4xl sm:text-5xl mb-10">Найти катер</p>
                            <Link href='/boats'>
                                <a className="rounded-xl bg-white py-4 px-6 hover:bg-gray-200">
                                    Начать поиск
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="h-80 relative">
                        <img
                            src='https://ksassets.timeincuk.net/wp/uploads/sites/46/2021/06/GettyImages-1163560314.jpg'
                            className="rounded-xl w-full h-full object-center object-cover brightness-50"
                        />
                        <div className="absolute top-10 left-10">
                            <p className="font-bold text-white text-4xl sm:text-5xl mb-10">Найти яхту</p>
                            <Link href='/yachts'>
                                <a className="rounded-xl bg-white py-4 px-6 hover:bg-gray-200">
                                    Начать поиск
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="h-80 relative">
                        <img
                            src='https://media.wired.com/photos/5bb6accf0abf932caf294b18/master/pass/waves-730260985.jpg'
                            className="rounded-xl w-full h-full object-center object-cover brightness-50"
                        />
                        <div className="absolute top-10 left-10">
                            <p className="font-bold text-white text-4xl sm:text-5xl mb-10">Найти теплоход</p>
                            <Link href='/ships'>
                                <a className="rounded-xl bg-white py-4 px-6 hover:bg-gray-200">
                                    Начать поиск
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndexPageFork