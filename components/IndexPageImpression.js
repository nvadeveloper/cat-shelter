

const IndexPageImpression = () => {
    return (
        <section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <p className="font-bold text-3xl">Впечатления</p>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-6 ">

                    <div className="h-48 rounded-lg bg-gradient-to-r from-cyan-100 to-blue-100 p-4 flex flex-col justify-between">
                        <p className="font-bold text-xl">Экскурсии <br />на катере</p>
                        <button className="flex hover:text-blue-600">
                            <span>Подробнее</span>
                            <svg className="mt-[7px] ml-1.5 h-2.5" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.264.293 14 5 9.264 9.707 7.84 8.293 10.148 6H0V4h10.148L7.841 1.707 9.264.293Z" fill="currentColor"></path></svg>
                        </button>
                    </div>

                    <div className="h-48 rounded-lg bg-gradient-to-r from-cyan-100 to-blue-100 p-4 flex flex-col justify-between">
                        <p className="font-bold text-xl">Свидание <br />на катере</p>
                        <button className="flex hover:text-blue-600">
                            <span>Подробнее</span>
                            <svg className="mt-[7px] ml-1.5 h-2.5" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.264.293 14 5 9.264 9.707 7.84 8.293 10.148 6H0V4h10.148L7.841 1.707 9.264.293Z" fill="currentColor"></path></svg>
                        </button>
                    </div>

                    <div className="h-48 rounded-lg bg-gradient-to-r from-cyan-100 to-blue-100 p-4 flex flex-col justify-between">
                        <p className="font-bold text-xl">Фотосессия <br />на катере</p>
                        <button className="flex hover:text-blue-600">
                            <span>Подробнее</span>
                            <svg className="mt-[7px] ml-1.5 h-2.5" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.264.293 14 5 9.264 9.707 7.84 8.293 10.148 6H0V4h10.148L7.841 1.707 9.264.293Z" fill="currentColor"></path></svg>
                        </button>
                    </div>

                    <div className="h-48 rounded-lg bg-gradient-to-r from-cyan-100 to-blue-100 p-4 flex flex-col justify-between">
                        <p className="font-bold text-xl">Развод мостов <br />на катерае</p>
                        <button className="flex hover:text-blue-600">
                            <span>Подробнее</span>
                            <svg className="mt-[7px] ml-1.5 h-2.5" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.264.293 14 5 9.264 9.707 7.84 8.293 10.148 6H0V4h10.148L7.841 1.707 9.264.293Z" fill="currentColor"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndexPageImpression
