import Link from "next/link"

const IndexPageBanner = () => {
    return (
        <section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="relative rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white p-4 sm:p-10 pb-8 sm:pb-16">
                    {/* <img 
                    src='https://pngimg.com/uploads/boat/boat_PNG36.png'
                    className="absolute w-1/2 top-0 right-0"
                /> */}
                    <p className="hidden sm:flex font-bold text-6xl mb-14">Откройте для себя <br />совершенно новое <br />путешествие</p>
                    <p className="flex sm:hidden font-bold text-4xl mb-10">Откройте <br />для себя совершенно новое <br />путешествие</p>
                    <Link href='/boats'>
                        <a className="text-lg border px-5 py-4 rounded-xl hover:bg-white hover:text-cyan-500">
                            Подобрать катер
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default IndexPageBanner
