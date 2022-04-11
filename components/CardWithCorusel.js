import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

import { Navigation, Pagination } from "swiper";

const CardWithCorusel = () => {
    return (
        <div className="">
            <Swiper 
                navigation={{
                    nextEl: '.swiper-button-next-u',
                    prevEl: '.swiper-button-prev-u',
                }}
                pagination={true} 
                modules={[Navigation, Pagination]} 
                className="mySwiper w-96"
    
            >
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        className="rounded-xl h-64 border border-gray-300"
                        src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"
                    />
                </SwiperSlide>
                <div className="swiper-button-next-u ">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="#ECF1F7"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 18.2929C17.6834 18.6834 17.6834 19.3166 17.2929 19.7071C16.9024 20.0976 16.2692 20.0976 15.8787 19.7071L12.5858 16.4142C11.8047 15.6332 11.8047 14.3668 12.5858 13.5858L15.8787 10.2929C16.2692 9.90237 16.9024 9.90237 17.2929 10.2929C17.6834 10.6834 17.6834 11.3166 17.2929 11.7071L14 15L17.2929 18.2929Z" fill="#428BF9"/>
                    </svg>
                </div>
            <div className="swiper-button-prev-u">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#ECF1F7"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 18.2929C17.6834 18.6834 17.6834 19.3166 17.2929 19.7071C16.9024 20.0976 16.2692 20.0976 15.8787 19.7071L12.5858 16.4142C11.8047 15.6332 11.8047 14.3668 12.5858 13.5858L15.8787 10.2929C16.2692 9.90237 16.9024 9.90237 17.2929 10.2929C17.6834 10.6834 17.6834 11.3166 17.2929 11.7071L14 15L17.2929 18.2929Z" fill="#428BF9"/>
                </svg>
            </div>
            </Swiper>
            


        </div>
    )
}
  
export default CardWithCorusel
