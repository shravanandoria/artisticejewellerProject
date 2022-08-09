import { useState } from 'react'
import Filter from '../Sections/FilterSection'
import { Link } from 'react-router-dom';
import eth from '../assets/icons/eth.png';
import polygon from '../assets/icons/polygon.png';
import solana from '../assets/icons/solana.png';
import userImage from '../assets/users/user.jpg'

//userImages
import u1 from '../assets/users/u1.jpg'
import u2 from '../assets/users/u2.jpg'
import u3 from '../assets/users/u3.jpg'
import u4 from '../assets/users/u4.jpg'
import u5 from '../assets/users/u5.jpg'

import MobileFIlter from '../components/MobileFIlter'
import Accordion from '../components/Accordion'
import NFTCard from '../components/NFTCard';

// NFT images
import j0 from '../assets/jewellery_assets/0.png'
import j1 from '../assets/jewellery_assets/1.png'
import j2 from '../assets/jewellery_assets/2.png'
import j3 from '../assets/jewellery_assets/3.png'
import j4 from '../assets/jewellery_assets/4.png'
import j5 from '../assets/jewellery_assets/5.png'
const CreatosPage = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  return (
    <>
      <MobileFIlter className='laptop:hidden' isSidebarOpen={openFilter} setOpenFilter={setOpenFilter}/>

      <div id='container' className='my-5'>
        <div id='filter-section' className='px-4 border-b-0 shadow-md pb-2'>
            <Filter setOpenFilter={setOpenFilter}/>
        </div>

        {/* Bottom content */}
        <div className='flex mt-4'>
          <div className={`hidden laptop:${openFilter && 'flex'} w-1/3 p-3`}>       
            <div>
                <Accordion title='Status' content={          
                  <div className='my-2'>
                    <div className='flex justify-between'>
                      <label htmlFor='buynow'>Buy Now</label>
                      <input type="checkbox" name="buynow" id="buynow" className='focus:ring-red-500'/>
                    </div>
                    <div className='flex justify-between '>
                      <label htmlFor='onauction'>On Auction</label>
                      <input type="checkbox" name="onauction" id="onauction" />
                    </div>
                    <div className='flex justify-between '>
                      <label htmlFor='new'>New</label>
                      <input type="checkbox" name="new" id="new" />
                    </div>
                  </div>
                }/>
                <Accordion title='Price' content={          
                  <div className='grid grid-cols-4 items-center text-center gap-3'>
                    <div className='border rounded-lg p-2 font-bold'>ETH</div>
                    <input type="number" name="min" id="min" placeholder='Min' className='border rounded-lg p-2'/>
                    <h1 className='font-bold '>To</h1>
                    <input type="number" name="max" id="max" placeholder='Max' className='border rounded-lg p-2'/>
                  </div>
                }/>
                <Accordion title='Category' content={
                  <div className='my-2'>
                  <div className='flex justify-between '>
                    <label htmlFor='necklace'>Necklace</label>
                    <input type="checkbox" name="necklace" id="necklace" className='focus:ring-red-500'/>
                  </div>
                  <div className='flex justify-between '>
                    <label htmlFor='onauction'>Pendant</label>
                    <input type="checkbox" name="onauction" id="onauction" />
                  </div>
                  <div className='flex justify-between '>
                    <label htmlFor='rings'>Rings</label>
                    <input type="checkbox" name="rings" id="rings" />
                  </div>
                </div>
                }/>
                <Accordion title='Chains' content={
                  <div className='my-2'>
                  <div className='flex justify-between '>
                    <div className='flex items-center space-x-3 my-1'><img src={eth} alt="eth" className='h-5 w-5' /> <label htmlFor='necklace'>Ethereum</label></div>
                    <input type="checkbox" name="necklace" id="necklace" className='focus:ring-red-500'/>
                  </div>
                  <div className='flex justify-between '>
                    <div className='flex items-center space-x-3 my-1'><img src={solana} alt="solana" className='h-5 w-5'/>
                    <label htmlFor='onauction'>Solana</label></div>
                    <input type="checkbox" name="onauction" id="onauction" />
                  </div>
                  <div className='flex justify-between '>
                    <div className='flex items-center space-x-3 my-1'><img src={polygon} alt="polygon" className='h-5 w-5' />
                    <label htmlFor='rings'>Polygon</label></div>
                    <input type="checkbox" name="rings" id="rings" />
                  </div>
                </div>
                }/>
            </div>
          </div>
          <div className={`grid md:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-2 p-4 w-full ${openFilter ? 'desktop:grid-cols-3 gap-6' : ''}`}>
            
          <NFTCard artistImage={userImage} artistName={'Alessio Boschi'} artistProfile={'@Alessio.B'} nftImage={j0} nftName={'Four Rivers'} price={'1.5 ETH'}/>
                    <Link to={'/bidding'}><NFTCard artistImage={userImage} artistName={'Mark Henry'} artistProfile={'@Henry22'} nftImage={j1} nftName={'Golestan Palace (1/1)'} price={'1.5 ETH'}/></Link>
                      <Link to={'/bidding'}><NFTCard artistImage={userImage} artistName={'Rohit Patil'} artistProfile={'@Patil90'} nftImage={j2} nftName={'Medusa Ring (1/1)'} price={'1.5 ETH'}/></Link>
                      <Link to={'/bidding'}><NFTCard artistImage={userImage} artistName={'James Pit'} artistProfile={'@James.Pit'} nftImage={j3} nftName={'Four Rivers'} price={'1.5 ETH'}/></Link>
                      <Link to={'/bidding'}><NFTCard artistImage={userImage} artistName={'Richard Downey'} artistProfile={'@Rich'} nftImage={j4} nftName={'Four Rivers Ring (1/1)'} price={'1.5 ETH'}/></Link>
                      <Link to={'/bidding'}><NFTCard artistImage={userImage} artistName={'Alexa Cuban'} artistProfile={'@Alexa44'} nftImage={j5} nftName={'Medusa Necklace'} price={'1.5 ETH'}/></Link>
                      <Link to={'/bidding'}><NFTCard artistImage={userImage} artistName={'Williams Pitara'} artistProfile={'@Pitara'} nftImage={j1} nftName={'Golestan Palace (1/1)'} price={'1.5 ETH'}/></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatosPage