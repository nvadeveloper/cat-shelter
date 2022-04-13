import Link from "next/link"

import CardWithCorusel from "../components/CardWithCorusel"
import Impression from "../components/Impression"
import IndexPageCover from "../components/IndexPageCover"


const Home = () => {
  return (
    <> 
      
      <main>
        <IndexPageCover />
        <Impression />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8mt-8">
          <p className="font-bold text-3xl">Аренда катера</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 px-4 sm:px-0">
            <div className="flex flex-col justify-between">
              <img 
                className="rounded-xl h-64 border border-gray-300"
                src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <p className="text-2xl font-bold">Chaparral</p>
                  <p>Бизнес класс</p>
                </div>
                <div>
                  <p>5000 р/час</p>
                  <p>8 человек</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <img 
                className="rounded-xl h-64 border border-gray-300"
                src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <p className="text-2xl font-bold">Chaparral</p>
                  <p>Бизнес класс</p>
                </div>
                <div>
                  <p>5000 р/час</p>
                  <p>8 человек</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <img 
                className="rounded-xl h-64 border border-gray-300"
                src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
              />
              <div className="flex justify-between mt-2">
                <div>
                  <p className="text-2xl font-bold">Chaparral</p>
                  <p>Бизнес класс</p>
                </div>
                <div>
                  <p>5000 р/час</p>
                  <p>8 человек</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="my-10 flex justify-center">
            <Link href='/boats'>
              <a className="rounded-xl py-3 px-5 bg-black text-white  hover:bg-stone-800">Загрузить еще</a>
            </Link>
          </div>
        </div>

        
      </main>
      <div className="flex">
        {/* <CardWithCorusel />
        <CardWithCorusel />
        <CardWithCorusel /> */}
      </div>
      
    </>
  )
}

export default Home