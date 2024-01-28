import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SingleProductCard from '../SingleProductCard/SingleProductCard';

const DrinkProducts = ({ drinkList }) => {
    return (
        <div>
            <h2>Холодные напитки</h2>

            {/* slider section start */}
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    620: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    }
                    ,
                    840: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }
                }}>
                {/* map section start */}
                {
                    drinkList?.map((data) => (
                        <SwiperSlide
                            key={data.id}>
                            <SingleProductCard data={data} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default DrinkProducts;