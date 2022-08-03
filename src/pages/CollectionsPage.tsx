import NFTCard from '../components/NFTCard'
import userImage from '../assets/users/user.jpg'
import Filter from '../Sections/FilterSection'

// NFT images
import j0 from '../assets/jewellery_assets/0.png'
import j1 from '../assets/jewellery_assets/1.png'
import j2 from '../assets/jewellery_assets/2.png'
import j3 from '../assets/jewellery_assets/3.png'
import j4 from '../assets/jewellery_assets/4.png'
import j5 from '../assets/jewellery_assets/5.png'

const CollectionsPage = () => {
  return (
    <div>
        <div className='px-7'>
                <Filter />
            <div className='flex flex-col items-center '>
                <div className='my-6 grid grid-cols-1 tablet:grid-cols-2 tablet:gap-3 laptop:gap-6 laptop:grid-cols-4 w-full content-start'>
                    <NFTCard artistImage={userImage} artistName={'Alessio Boschi'} artistProfile={'@Alessio.B'} nftImage={j0} nftName={'Four Rivers'} price={'1.5 ETH'}/>
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