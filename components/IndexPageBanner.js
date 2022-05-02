import Link from "next/link"

const IndexPageBanner = () => {
    return (
        <section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="relative h-96 rounded-xl bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600">
                    <div className="absolute top-10 left-10">

                        <p className="text-white hidden sm:flex font-bold text-6xl mb-14">Откройте для себя <br />совершенно новое <br />путешествие</p>
                        <p className="text-white flex sm:hidden font-bold text-4xl mb-10">Откройте <br />для себя совершенно новое <br />путешествие</p>

                        <Link href='/boats'>
                            <a className="rounded-xl border-2 py-4 px-6 border-white text-white hover:bg-white hover:text-purple-900">
                                Подобрать катер
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndexPageBanner
