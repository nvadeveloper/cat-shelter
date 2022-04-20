import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import Link from "next/link"
import Image from "next/image";

const Boat = () => {
  const images = [
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_6189-1200x800.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_5850w-1200x800.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_5725-1200x800.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_6189-1200x800.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_5850w-1200x800.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_5725-1200x800.jpg',
  ]

  const boat = {
    name: 'Chaparral',
    description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
    tag: 'Бизнес класс',
    price: '10 000 руб/час',
    people: '8 человек',
    slug: '#',
    images: [
      'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
      'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
      'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
      'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
      'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
      'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
      'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg'
    ],
  }

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Link href='/boats'>
          <a className="flex text-gray-500 hover:text-gray-700 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Вернуться к списку</span>
          </a>
        </Link>
        {/* <p className="my-4 font-bold text-3xl">{boat.name}</p> */}
        <div className="grid grid-cols-2 mt-6">
          <img src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg" className="rounded-xl" />
          <div className="flex flex-col p-6">
            <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700">
              {boat.name}
            </h1>

            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Колличество мест: 12 человек</span>
            </div>

            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              <span>Стоимость аренды: 10 000 руб/час</span>
            </div>

            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
              <span>Бизнес класс</span>
            </div>

            <div class="flex items-center -space-x-4 hover:space-x-1">

              <button
                class="z-10 block p-4 text-green-700 transition-all bg-green-100 border-2 border-white rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
                type="button"
              >
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>

              <button
                class="z-20 block p-4 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                type="button"
              >
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>

              <button
                class="z-30 block p-4 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                type="button"
              >
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>

            {/* <button className="p-4 bg-[#50A1DD] w-52 rounded-xl text-white hover:opacity-90 mb-2">Написать в Telegram</button>
            <button className="p-4 bg-[#63CB70] w-52 rounded-xl text-white hover:opacity-90">Написать в WhatsApp</button> */}
          </div>
        </div>

        {/* <div className="flex overflow-x-scroll whitespace-nowrap rounded-xl gap-4">
          {images.map((image) => (
            <img src={image} className="h-96"/>
          ))}
        </div>

        <div className="flex flex-row">
          <img src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg" className="w-2/4"/>
          <div className="">
            <img src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"/>
            <img src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"/>
          </div>
        </div>
        <p>{boat.description}</p> */}
        {/* 
              <Swiper
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    el: '.swiper-pagination',
                }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper w-1/2 rounded-xl border border-gray-300"
            >
                {
                    images.map((image, key) => (
                        <SwiperSlide key={key}>
                            <div className="h-96 w-full bg-gray-300">
                                <Image 
                                    src={image}
                                    layout='fill'
                                    alt='Rent Boat image'
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }

                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 18.2929C17.6834 18.6834 17.6834 19.3166 17.2929 19.7071C16.9024 20.0976 16.2692 20.0976 15.8787 19.7071L12.5858 16.4142C11.8047 15.6332 11.8047 14.3668 12.5858 13.5858L15.8787 10.2929C16.2692 9.90237 16.9024 9.90237 17.2929 10.2929C17.6834 10.6834 17.6834 11.3166 17.2929 11.7071L14 15L17.2929 18.2929Z" fill="#428BF9"/>
                    </svg>
                </div>

                <div className="swiper-button-next">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 11.7071C11.9024 11.3166 11.9024 10.6834 12.2929 10.2929C12.6834 9.90237 13.3166 9.90237 13.7071 10.2929L17 13.5858C17.7811 14.3668 17.7811 15.6332 17 16.4142L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L15.5858 15L12.2929 11.7071Z" fill="#428BF9"/>
                    </svg>
                </div>
            </Swiper> */}
      </div>
    </section>
  )
}

export default Boat