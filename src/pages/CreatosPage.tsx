import { useState } from 'react'
import UserProfileItem from '../components/UserProfileItem'
import Filter from '../Sections/FilterSection'
import { Link } from 'react-router-dom';
import eth from '../assets/icons/eth.png';
import polygon from '../assets/icons/polygon.png';
import solana from '../assets/icons/solana.png';

//userImages
import u1 from '../assets/users/u1.jpg'
import u2 from '../assets/users/u2.jpg'
import u3 from '../assets/users/u3.jpg'
import u4 from '../assets/users/u4.jpg'
import u5 from '../assets/users/u5.jpg'
import Accordion from '../components/Accordion'
import CreatorsFilter from '../components/CreatorsFilter';

const CreatosPage = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const userData = [
    {
      name: 'shravan andoira',
      collections: 22,
      followers: 12,
      profileId: '@Andoria',
      userImage: u1
    },
    {
      name: 'abhishek thakue',
      collections: 10,
      followers: 33,
      profileId: '@Thakur',
      userImage: u2
    },
    {
      name: 'Abhinandan vucha',
      collections: 99,
      followers: 112,
      profileId: '@Vucah',
      userImage: u3
    },
    {
      name: 'suraj chaturvedi',
      collections: 8,
      followers: 12,
      profileId: '@Suraj',
      userImage: u4
    },
    {
      name: 'Ashwin mishra',
      collections: 77,
      followers: 100,
      profileId: '@mishra',
      userImage: u5
    },
    {
      name: 'rohan dhumal',
      collections: 77,
      followers: 100,
      profileId: '@mishra',
      userImage: u5
    },
    {
      name: 'karande rohan',
      collections: 77,
      followers: 100,
      profileId: '@mishra',
      userImage: u5
    },
  ]

  return (
    <>
      {/* Mobile filter */}
      <CreatorsFilter className='laptop:hidden' isSidebarOpen={openFilter} setOpenFilter={setOpenFilter}/>
      
      <div id='container' className='my-5'>
        <div id='filter-section' className='px-4 border-b-0 pb-2'>
            <Filter setOpenFilter={setOpenFilter} />
        </div>
        
        {/* Bottom content */}
        <div className='flex mt-4'>
          {/* Desktop Filter */}
          <div className={`hidden laptop:${openFilter && 'flex'} w-1/3 p-3`}>
            <div>
                <Accordion title='Status' content={
                  <div className='my-2'>
                    <div className='flex justify-between '>
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
          <div className={`grid md:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-2 p-4 w-full ${openFilter ? 'laptop:grid-cols-3 desktop:grid-cols-3 gap-6' : ''}`}>
            {userData.filter((item) => item.name.includes('')).map((user) => (
            <Link to={'/user'}><UserProfileItem name={user.name} collections={user.collections} followers={user.followers} profileId={user.profileId} userImage={user.userImage}/></Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatosPage