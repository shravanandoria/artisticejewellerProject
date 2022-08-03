import UserProfileItem from '../components/UserProfileItem';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import u1 from '../assets/users/u1.jpg'
import u2 from '../assets/users/u2.jpg'
import u3 from '../assets/users/u3.jpg'
import u4 from '../assets/users/u4.jpg'

const TopArtistSection = () => {
  return (
    <div>
      <div className='text-right px-5 w-full laptop:px-20'>
        <h1 className='font-bold tablet:text-2xl'>Top Artists</h1>
        <p className='text-xs text-right tablet:text-lg text-gray-600 font-semibold mb-3'>The best artists in the world in one place, handpicked and curated <br/> pieces just the way out client like it.</p>
      </div>
      <div>
          <Swiper
          centeredSlides={false}    
          navigation={false}      
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -50
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 80,
            },
          }}
          modules={[Navigation]}
          className="mySwiper laptop:px-6"
          >
            <SwiperSlide><UserProfileItem userImage={u1} name='Alessio Boschi' collections={100} followers={60} profileId={'@Alessio.B'} innerClassName={'rounded-2xl py-2'} imagePadding={'py-2'} /></SwiperSlide>
            <SwiperSlide><UserProfileItem userImage={u2} name='Mark Henry' collections={40} followers={120} profileId={'@Henry22'} innerClassName={'rounded-2xl py-2 '} imagePadding={'py-2'} /></SwiperSlide>
            <SwiperSlide><UserProfileItem userImage={u3} name='Rohit Patil' collections={10} followers={8} profileId={'@Patil90'} innerClassName={'rounded-2xl py-2 '} imagePadding={'py-2'} /></SwiperSlide>
            <SwiperSlide><UserProfileItem userImage={u4} name='James Pit' collections={300} followers={276} profileId={'@James.Pit'} innerClassName={'rounded-2xl py-2 '} imagePadding={'py-2'} /></SwiperSlide>
          </Swiper>
      </div>
    </div>
  )
}

export default TopArtistSection