import NFTCard from '../components/NFTCard'
import userImage from '../assets/users/user.jpg'
import Filter from '../Sections/FilterSection'

//User images
import u1 from '../assets/users/u1.jpg'
import u2 from '../assets/users/u2.jpg'
import u3 from '../assets/users/u3.jpg'
import u4 from '../assets/users/u4.jpg'
import u5 from '../assets/users/u5.jpg'
import u6 from '../assets/users/u4.jpg'
import u7 from '../assets/users/u1.jpg'

// NFT images
import j0 from '../assets/jewellery_assets/0.png'
import j1 from '../assets/jewellery_assets/1.png'
import j2 from '../assets/jewellery_assets/2.png'
import j3 from '../assets/jewellery_assets/3.png'
import j4 from '../assets/jewellery_assets/4.png'
import j5 from '../assets/jewellery_assets/5.png'
import CreatorsFilter from '../components/CreatorsFilter'
import { useState } from 'react'

const nftFakeData = [
  {
    artistImage: u1,
    artistName: 'Alessio Boschi',
    artistProfile: '@Alessio.B',
    nftImage: j0,
    nftName:'Four RIvers',
    price: '1.5 ETH'
  },
  {
    artistImage: u2,
    artistName: 'Mark Henry',
    artistProfile: '@Mark.H',
    nftImage: j1,
    nftName:'Golestan Palace (1/1)',
    price: '2.1 ETH'
  },
  {
    artistImage: u3,
    artistName: 'Rohit Patil',
    artistProfile: '@Alessio.B',
    nftImage: j2,
    nftName:'Medusa Ring (1/1)',
    price: '1.9 ETH'
  },
  {
    artistImage: u4,
    artistName: 'James Pit',
    artistProfile: '@Pit.James',
    nftImage: j3,
    nftName:'Four RIvers',
    price: '8 ETH'
  },
  {
    artistImage: u5,
    artistName: 'Richard Downey',
    artistProfile: '@Richard.d',
    nftImage: j4,
    nftName:'Four Rivers',
    price: '3.7 ETH'
  },
  {
    artistImage: u6,
    artistName: 'Alessio Boschi',
    artistProfile: '@Alessio.B',
    nftImage: j5,
    nftName:'Four Rivers Ring (1/1)',
    price: '1.5 ETH'
  },
  {
    artistImage: u5,
    artistName: 'Richard Downey',
    artistProfile: '@Richard.d',
    nftImage: j4,
    nftName:'Four Rivers',
    price: '3.7 ETH'
  },
]

const CollectionsPage = () => {  
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  return (
    <div>
    {/* Mobile filter */}
    <CreatorsFilter className='laptop:hidden' isSidebarOpen={openFilter} setOpenFilter={setOpenFilter}/>
        <div className='px-7'>
                <Filter setOpenFilter={setOpenFilter} />
            <div className='flex flex-col items-center '>
                <div className='my-6 grid grid-cols-1 tablet:grid-cols-2 tablet:gap-3 laptop:gap-6 laptop:grid-cols-4 w-full content-start'>
                  {nftFakeData.map((item) => (
                    <NFTCard artistImage={item.artistImage} artistName={item.artistName} artistProfile={item.artistProfile} nftImage={item.nftImage} nftName={item.nftName} price={item.price}/>
                  ))}
                    
                    <NFTCard artistImage={userImage} artistName={'Mark Henry'} artistProfile={'@Henry22'} nftImage={j1} nftName={'Golestan Palace (1/1)'} price={'1.5 ETH'}/>
                    <NFTCard artistImage={userImage} artistName={'Rohit Patil'} artistProfile={'@Patil90'} nftImage={j2} nftName={'Medusa Ring (1/1)'} price={'1.5 ETH'}/>
                    <NFTCard artistImage={userImage} artistName={'James Pit'} artistProfile={'@James.Pit'} nftImage={j3} nftName={'Four Rivers'} price={'1.5 ETH'}/>
                    <NFTCard artistImage={userImage} artistName={'Richard Downey'} artistProfile={'@Rich'} nftImage={j4} nftName={'Four Rivers Ring (1/1)'} price={'1.5 ETH'}/>
                    <NFTCard artistImage={userImage} artistName={'Alexa Cuban'} artistProfile={'@Alexa44'} nftImage={j5} nftName={'Medusa Necklace'} price={'1.5 ETH'}/>
                    <NFTCard artistImage={userImage} artistName={'Williams Pitara'} artistProfile={'@Pitara'} nftImage={j1} nftName={'Golestan Palace (1/1)'} price={'1.5 ETH'}/>
                </div>                
                {/* <LoadMore /> */}
            </div>
        </div>
    </div>
  )
}

export default CollectionsPage