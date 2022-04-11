import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

const CardWithCorusel = () => {
    return (
        <div className="">
            <Swiper 
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    el: '.swiper-pagination'
                }} 
                // navigation={{ 
                //     nextEl: '.swiper-button-next-1',
                //     prevEl: '.swiper-button-prev-1',
                // }}
                // pagination={true} 
                modules={[Pagination, Navigation]} 
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
             
                <div class="swiper-pagination style.swiper-pagination-bullet"></div>
            </Swiper>
            


        </div>
    )
}
  
export default CardWithCorusel
