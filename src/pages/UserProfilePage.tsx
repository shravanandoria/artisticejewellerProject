import {useState, useEffect, FC} from 'react';
import user from '../assets/users/user.jpg';
import {ShareIcon, DotsHorizontalIcon} from '@heroicons/react/solid';
import {SearchIcon} from '@heroicons/react/solid'
import Cookies from 'js-cookie';
import {ChevronDownIcon} from '@heroicons/react/solid'
import nft1 from '../assets/jewellery_assets/0.png'
import nft2 from '../assets/jewellery_assets/1.png'
import nft3 from '../assets/jewellery_assets/2.png'
import nft4 from '../assets/jewellery_assets/3.png'
import nft5 from '../assets/jewellery_assets/4.png'

//Thirdweb imports
import { useAddress } from '@thirdweb-dev/react';

interface Props {
    image: string
}

const OwnedNFTCar : FC<Props> = ({image} : Props) : JSX.Element => (
    <>
    <div className='border-2 rounded-lg p-4 my-4 shadow-lg'>
        <img src={image} alt="nft" className='rounded-lg object-cover'/>
        <div className='mt-3'>
            <h1 className='font-bold'>a joker nft</h1>
            <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, placeat?</p>
        </div>
    </div>
    </>
);

const UserProfilePage = () => {
    const address = useAddress()
    const [option, setOptions] = useState<string>('collected');
    const [userName] = useState(Cookies.get('name'))
  return (
    <div>
        <div>
            <div className='w-full bg-gray-100 h-24 relative tablet:h-40'></div>
            <div className='flex justify-end my-3'>
                <div className='flex space-x-6 px-5'>
                    <ShareIcon className='h-6 w-6 tablet:h-9 tablet:w-9 ' fill={'gray'}/>
                    <DotsHorizontalIcon className='h-7 w-7 tablet:h-10 tablet:w-10 ' fill={'gray'}/>
                </div>
            </div>
            <div>
                <img src={user} alt="user" className='h-20 w-20 rounded-full absolute top-40 mx-4 border-4 shadow-xld tablet:h-32 tablet:w-32 tablet:top-48 laptop:left-20' />
            </div>
            <div className='laptop:px-8'>
                <div className='px-4 my-5 '>
                    <h1 className='heading-text font-bold text-xl tablet:text-2xl laptop:text-3xl'>{userName}</h1>
                    <div className='laptop:flex space-x-3'>
                        <p className='text-gray-500 text-sm tablet:text-lg laptop:text-black'>{address?.slice(0,8)}...</p>
                        <p className='text-gray-500 text-sm tablet:text-lg'>joined February 2022</p>
                    </div>
                </div>

                <div>
                    <div className='flex text-sm justify-evenly text-gray-600 my-5 px-4'>
                        <div className={`${option === 'collected' ? `font-bold text-black border-b-2 border-b-black`: ''} cursor-pointer tablet:text-lg`} onClick={() => setOptions('collected')}>Collected</div>
                        <div className={`${option === 'favourited' ? `font-bold text-black border-b-2 border-b-black`: ''} cursor-pointer tablet:text-lg`} onClick={() => setOptions('favourited')}>Favourited</div>
                    </div>
                    <div className='p-3 flex flex-col justify-center items-center laptop:flex laptop:flex-row laptop:justify-start space-x-4' >
                        <div className='text-center w-full p-2 border-2 rounded-lg flex items-center justify-start space-x-3 laptop:w-1/2'>
                            <SearchIcon className="h-7 w-7 " fill="gray" />
                            <input className='text-gray-500 text-left w-full outline-none'  placeholder='Search by name'/>
                        </div>
                        <div className='flex mt-4 items-center justify-between border-2 w-full laptop:w-1/4 p-2 rounded-lg laptop:my-0'>
                            <p>Recently Received</p>
                            <ChevronDownIcon className='h-7 w-7'/>
                        </div>
                    </div>
                    <div className='flex justify-between px-3 font-bold tablet:justify-evenly tablet:mt-5 laptop:justify-start laptop:space-x-4'>
                        <button className='border-2 rounded-xl p-3 px-10 text-lg'>Filter</button>
                        <button className='border-2 rounded-xl p-3 px-10 text-lg'>Sort</button>
                    </div>
                    <div className='p-4 tablet:grid tablet: grid-cols-3 tablet:p-0 tablet:px-4 gap-3 laptop:grid-cols-4'>
                        <OwnedNFTCar image={nft1}/>
                        <OwnedNFTCar image={nft2}/>
                        <OwnedNFTCar image={nft3}/>
                        <OwnedNFTCar image={nft4}/>
                        <OwnedNFTCar image={nft5}/>
                    </div>
                </div> 
            </div>         
        </div>
    </div>
  )
}

export default UserProfilePage