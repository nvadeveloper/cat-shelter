

const IndexPageCover = () => {
    return (
        <>  
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="relative rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-10 h-96 text-white">
                {/* <img 
                    src='https://pngimg.com/uploads/boat/boat_PNG36.png'
                    className="absolute w-1/2 top-0 right-0"
                /> */}
                <p className="font-bold text-6xl">Откройте для себя <br/>совершенно новое <br/>путешествие</p>
                <button className="text-lg border px-5 py-3 rounded-xl hover:bg-white hover:text-cyan-500 mt-10 ">
                <span>Подобрать катер</span>
                </button>
            </div>  
        </div>
        </>
    )
}
  
export default IndexPageCover
