import NFTCard from '../../components/NFTCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//NFT images
import j1 from '../../assets/jewellery_assets/a.jpg'
import j2 from '../../assets/jewellery_assets/b.jpg'
import j3 from '../../assets/jewellery_assets/c.jpg'
import j4 from '../../assets/jewellery_assets/d.jpg'

//User Images
import u1 from '../../assets/users/u1.jpg'
import u2 from '../../assets/users/u2.jpg'
import u3 from '../../assets/users/u3.jpg'
import u4 from '../../assets/users/u4.jpg'
import u5 from '../../assets/users/u5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const FeaturedNFTSection = () => {
  return (
    <>
      <div className='relative h-16 tablet:h-32'>
        <div className='bg-black h-80 tablet:h-96 absolute w-full flex items-end p-3 laptop:px-10 -top-64'>
            <h1 className='text-[#E20EF9] font-semibold text-lg tablet:text-2xl'>Featured NFTs</h1>            
        </div>
      </div>
    <div className='px-3 laptop:px-10 laptop:my-5 mt-3 font-semibold text-gray-500 tablet:text-lg z-10'>These are some of the most trending collections on our NFJ marketplace.</div>
      <div className='w-full mb-8'>
          <Swiper
          // centeredSlides={true}
          // loop={true}
          breakpoints={{
            375: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              // spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 80,
            },
          }}
          className="mySwiper laptop:px-6"
          >
            <SwiperSlide><NFTCard nftImage={j1} artistName='Alessio Boschi' artistImage={u1} artistProfile={'@Alessio'} nftName="Golestan Palace " price='0.5 ETH'/></SwiperSlide>
            <SwiperSlide><NFTCard nftImage={j2} artistName='Mark Henry' artistImage={u2} artistProfile={'@Alessio'} nftName="Qajar Cufflinks" price='3 ETH'/></SwiperSlide>
            <SwiperSlide><NFTCard nftImage={j3} artistName='Rohit Patil' artistImage={u3} artistProfile={'@Alessio'} nftName="The Shark" price='0.9 ETH'/></SwiperSlide>
            <SwiperSlide><NFTCard nftImage={j4} artistName='James Pit' artistImage={u4} artistProfile={'@Alessio'} nftName="The Tree of Lift" price='6 ETH'/></SwiperSlide>
            <SwiperSlide><NFTCard nftImage={j2} artistName='Alessio Boschi' artistImage={u5} artistProfile={'@Alessio'} nftName="Dolce Vita" price='0.6 ETH'/></SwiperSlide>
            </Swiper>
      </div>
    </>
  )
}

export default FeaturedNFTSection