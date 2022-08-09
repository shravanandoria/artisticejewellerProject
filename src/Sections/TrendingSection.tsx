import 'swiper/css';
import userImage from '../assets/users/user.jpg'
import NFTCard from '../components/NFTCard';
import { Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Images
import j1 from '../assets/jewellery_assets/1.png'
import j2 from '../assets/jewellery_assets/2.png'
import j3 from '../assets/jewellery_assets/3.png'
import j4 from '../assets/jewellery_assets/4.png'
import j5 from '../assets/jewellery_assets/5.png'
//


const NFTCardSlider = () => {
  return <>
    <Swiper 
        slidesPerView={'auto'}
        centeredSlides={false}  
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 2,
          },
          375: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 1.6,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2.7,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20
          },
        }}        
        // spaceBetween={30}
        modules={[Pagination, FreeMode]}
        className="mySwiper laptop:px-6 laptop:mt-7"
            >
              <SwiperSlide><NFTCard nftImage={j1} nftName={'Golestan Palace (1/1)'} artistImage={userImage} artistName={'Alessio'} artistProfile={'@AlessioBoschi'} price={'0.3 ETH'} /></SwiperSlide>
              <SwiperSlide><NFTCard nftImage={j2} nftName={'Medusa Ring (1/1)'} artistImage={userImage} artistName={'Alessio'} artistProfile={'@AlessioBoschi'} price={'0.3 ETH'} /></SwiperSlide>
              <SwiperSlide><NFTCard nftImage={j3} nftName={'Four Rivers (1/1)'} artistImage={userImage} artistName={'Alessio'} artistProfile={'@AlessioBoschi'} price={'0.3 ETH'} /></SwiperSlide>
              <SwiperSlide><NFTCard nftImage={j4} nftName={'Four Rivers Ring (1/1)'} artistImage={userImage} artistName={'Alessio'} artistProfile={'@AlessioBoschi'} price={'0.3 ETH'} /></SwiperSlide>
              <SwiperSlide><NFTCard nftImage={j5} nftName={'Medusa Necklace (1/1)'} artistImage={userImage} artistName={'Alessio'} artistProfile={'@AlessioBoschi'} price={'0.3 ETH'} /></SwiperSlide>
              <SwiperSlide><NFTCard nftImage={j5} nftName={'Medusa Necklace (1/1)'} artistImage={userImage} artistName={'Alessio'} artistProfile={'@AlessioBoschi'} price={'0.3 ETH'} /></SwiperSlide>
    </Swiper>
    </>
}

const TrendingSection = () => {
  return (
    <div>
        <div className='bg-black h-72 laptop:h-96 w-full mb-60 laptop:mb-72'>
            <div className='px-5 tablet:px-11'>
                <h1 className='font-semibold text-lg tablet:text-2xl text-[#E20EF9] my-4 pt-6'>Trending Collections</h1>
                <p className='text-white tablet:text-lg '>These are some of the most trending collections on our<br/> NFJ marketplace.</p>
            </div>
            <Link to="/bidding" className='mt-5 '>
              <NFTCardSlider />
            </Link>
        </div>
    </div>
  )
}

export default TrendingSection