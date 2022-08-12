import timer from '../assets/icons/timer.png';
import BtnPrimary from '../components/BtnPrimary';
import eth from '../assets/icons/ethereum.png';
import XIcon from '@heroicons/react/solid/XIcon';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { nftBidding } from '../store/nft/nftSlice';
//Marketplace Imports
import { useAddress } from '@thirdweb-dev/react';
import { useMarketplace, useActiveListings } from '@thirdweb-dev/react';
import { AuctionListing } from '@thirdweb-dev/sdk';
import React, { useState, ChangeEventHandler, ChangeEvent, FC, useEffect } from 'react';
import Cookies from 'js-cookie';
import Spinner from '../components/Spinner';

//user image
import u1 from '../assets/users/u1.jpg';
import u2 from '../assets/users/u2.jpg';
import u3 from '../assets/users/u3.jpg';
import u4 from '../assets/users/u4.jpg';
import u5 from '../assets/users/u5.jpg';
import { AppDispatch } from '../store/store';


// attributes:
// createdAt: "2022-08-12T13:05:33.198Z"
// name: "dasd"
// nftId: 38
// price: 0.04
// publishedAt: "2022-08-12T13:05:33.194Z"
// updatedAt: "2022-08-12T13:05:33.198Z"
// [[Prototype]]: Object
// id: 5

interface bidderInterface {
    id: number;
    attributes: {name: string; publishedAt: string; price: string, profilePic?: string}
}

interface BidItemProps {
    profile?: string;
    id: number;
    date?: string;
    price: string;
    name: string;
}

const fakeBidData = [
    {
        profile: u1,
        id: '@Andoria',
        date: '24th june 2022'
    },
    {
        profile: u2,
        id: '@Ronit.B',
        date: '2nd aug 2022'
    },
    {
        profile: u3,
        id: '@Abhishek',
        date: '13th june 2022'
    },
    {
        profile: u4,
        id: '@Sam.Daniels',
        date: '2nd aug 2022'
    },
    {
        profile: u5,
        id: '@viki.bora',
        date: '18th jan 2022'
    },
]

//Bid Item Component
const BidItem : FC<BidItemProps> = ({date,  profile, price, name, id}) => {
    return <>
    <div className='my-6 '>
        <div>{price}</div>
        <div className='flex items-center gap-x-3 '>
            <img src={u1} alt="user" className='h-10 w-10 rounded-full' />
            <div className='text-xs laptop:text-sm'>
                <p>Listed for resell by <b>{name}</b></p>
                <p className='text-gray-500 text-sm'>22 aug</p>
            </div>
        </div>
    </div>
    </>
}

interface BidModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    reservePrice: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    onSubmit: (e: any) => void;
    loading: boolean;
    errorMessage?: string;
}

//Bid Modal Popup
const BidPopup = ({setModalOpen, reservePrice, handleChange, onSubmit, loading, errorMessage} : BidModalProps) => (
    <>
    <form onSubmit={onSubmit}>
        <div className={`fixed overflow-y-scroll top-0 h-full w-full`}>
            <div className='absolute backdrop-blur-lg w-full h-full '>
                <div className='h-full flex justify-center items-center px-5 tablet:px-28 laptop:px-96' >
                    <div className='bg-white h-fit w-fit rounded-xl shadow-xl border-2  '>
                        <div className='flex justify-end relative'>
                            <div className='m-3 absolute hover:cursor-pointer' onClick={() => setModalOpen(false)}><XIcon fill='gray'  className='h-7 w-7'/></div>
                        </div>
                        <h1 className='text-center my-4 font-bold text-lg tablet:text-xl'>Make an offer</h1> 
                        <div className='flex flex-col items-center'>
                            <div className='flex px-3 space-x-2 text-sm justify-between'>
                                <div className='flex flex-col justify-between'>
                                    <div className='font-bold text-gray-500 text-xs w-full'>amount</div>
                                    <div className='flex items-center justify-center border-2 w-full rounded-xl h-full p-3'>
                                        <img src={eth} alt="eth" className='h-5 w-5' />
                                        <div className='w-full outline-none px-2'>ETH</div>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col'>
                                    <div className='text-right text-xs text-gray-500'>Balance: 0.000 WETH</div>
                                    <div className='border-2 p-4 w-full rounded-xl'>
                                        <input type="number" placeholder={reservePrice} min={reservePrice} step="any" className='w-full outline-none' onChange={handleChange} required/>
                                    </div>
                                </div>
                            </div>
                            <div className='my-4 w-full px-4'>
                                <BtnPrimary loading={loading} content='Make Bid' className='w-full font-bold laptop:text-xl' type='submit'/>
                            </div>
                            {errorMessage && <h1 className='my-3'>{errorMessage}</h1>}
                        </div>                       
                    </div>

                </div>
            </div>
        </div>
    </form>
    </>
);

const nftId = 11

const BiddingPage = () => {
    //Marketplace
    const dispatch = useDispatch<AppDispatch>();
    const address = useAddress();
    const marketplace = useMarketplace("0x723A0E4d2949e1Fc7aC43942FE5A9b3f14cA7991");
    const { data: listing, isLoading, error } = useActiveListings(marketplace, {tokenId: nftId});
    const { data } = useActiveListings(marketplace);
    const listingInfo = data as AuctionListing[];

    const [bidders, setBidders] = useState<bidderInterface[]>()
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [bidPrice, setBidPrice] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setError] = useState<string>('');
    const jwt = Cookies.get('jwt');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBidPrice(e.target.value)
    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>, tokenId : string) => {
        e.preventDefault();
        setError('')
        setLoading(true)
        try {
        const nftListingId = listingInfo[0].id.toString();
        const bid = await marketplace?.auction.makeBid(nftListingId, bidPrice)
        console.log({bid})
        if(!bid) return console.log('something not working');
        dispatch(nftBidding({nftName: `${listingInfo[0].asset.name}`, bidPrice, nftId: listingInfo[0].id}))
        } catch (error) {
            setError("Transaction failed")
        }
        setLoading(false)
    }

    const fetchBidsData = async () => {
            const res = await axios({
                url: `http://localhost:1337/api/nfts?filters[nftId]=${nftId}&populate=bids`,
                method: 'get'
            });
            const {data} = res;
            setBidders(data.data[0].attributes.bids.data)
    }

    useEffect(() => {
        fetchBidsData()
    }, []);

    return (
        <>
            {isLoading ? <div><Spinner/></div> : !listingInfo[0] ? "nft auction over" : 
            <div>
                {/* MODAL POPUP */}
                {modalOpen &&
                <div>
                    <BidPopup setModalOpen={setModalOpen} reservePrice={listingInfo[0].reservePriceCurrencyValuePerToken.displayValue} handleChange={handleChange} onSubmit={(e: ChangeEvent<HTMLInputElement>) => handleSubmit(e, listingInfo[0].tokenId.toString())} loading={loading} errorMessage={errorMessage}/>
                </div>
                }
                {error && <div className={`bg-red-500 text-white w-full h-1/2 text-center p-3 font-bold`}>{error}</div>}
                {isLoading ? 'loading.....' : ''}
                
                <div className='p-8 tablet:flex tablet:justify-center tablet:space-x-16 laptop:px-32'>

                    {/* LEFT CONTENT */}
                    <div className='tablet:w-1/2 laptop:mb-10'>

                        {/* NFT image */}
                        <div className='rounded-xl p-3 shadow-md border h-72 laptop:h-96 w-fit'>
                            <img src={listingInfo[0].asset.image?.toString()} alt="nftImage" className='rounded-xl h-full w-full object-contain'/>
                        </div>
                        <div className='my-3 laptop:my-5'>
                            <h1 className='font-semibold laptop:text-xl'>Description: </h1>
                            <p className='text-xs text-gray-400 laptop:text-sm'>{listingInfo[0].asset.description}</p>
                        </div>
                        <div className='flex justify-start space-x-6 w-full'>
                            {/* Left content */}
                            <div>
                                <h1>Contract address</h1>
                                <h1>Token id</h1>
                                <h1>Blockchain</h1>
                            </div>
                            <div>
                                <h1 className='flex-wrap'>{listingInfo[0].assetContractAddress.slice(0,8)+'...'}</h1>
                                <h1>{listingInfo[0].tokenId.toString()}</h1>
                                <h1>{listingInfo[0].buyoutCurrencyValuePerToken.name}</h1>
                            </div>
                        </div>
                        <div className='my-7'>
                            <BtnPrimary content='View More' className='text-sm font-semibold laptop:text-lg'/>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className='w-1/2'>
                        <div className='laptop:text-2xl '>
                            <h1 className='font-bold'>{listingInfo[0].asset.name}</h1>
                            <p className='text-xs my-2 laptop:text-lg'>{listingInfo[0].asset.description}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='text-sm my-3 laptop:text-lg'>
                                <h1 className='font-bold laptop:text-lg'>Buy out:</h1>
                                <p className='text-green-500 font-bold'>
                                    {`${listingInfo[0].buyoutCurrencyValuePerToken.displayValue} ${listingInfo[0].buyoutCurrencyValuePerToken.symbol}`}
                                </p>
                            </div>
                            <div className='text-sm my-3 laptop:text-lg'>
                                <h1 className='font-bold laptop:text-lg'>Minimum Bid:</h1>
                                <p className='text-green-500 font-bold'>
                                    {`${listingInfo[0].reservePriceCurrencyValuePerToken.displayValue} ${listingInfo[0].buyoutCurrencyValuePerToken.symbol}`}
                                </p>
                            </div>
                            {/* {listing[0].reservePriceCurrencyValuePerToken &&  */}
                            <div className='text-xs flex flex-col justify-center text-center laptop:text-lg'>
                                <div className='flex items-center space-x-2 justify-center laptop:mb-3'>
                                    <img src={timer} alt="timer" className='h-5 w-4' />
                                    <h1 className='laptop:text-md font-semibold text-[#766776] '>Auction ending in:</h1>
                                </div>
                                <div>
                                    <div className='grid grid-cols-4 text-center laptop:gap-x-2 text-md'>
                                        <p>0</p>
                                        <p>2</p>
                                        <p>25</p>
                                        <p>0</p>
                                        <p>days</p>
                                        <p>hours</p>
                                        <p>mins</p>
                                        <p>secs</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex items-center justify-between my-5 laptop:my-16'>
                            <div className='flex items-center space-x-2 text-sm laptop:text-lg '>
                                <img src={u1} alt="user" className='h-11 w-11 rounded-full object-cover'/>
                                <div>
                                    <h1 className='font-semibold laptop:text-sm'>Artist</h1>
                                    <p className='text-xs laptop:text-xs'>@AlessioBoschi</p>
                                </div>
                            </div>
                            <div>
                                <BtnPrimary onClick={() => {
                                    setError('')
                                    setModalOpen(true)
                                }} content='Place a bid' className='text-xs font-semibold rounded-full laptop:text-md '/>
                            </div>
                        </div>
                        <div className='mt-9'>
                            <div className='flex space-x-3 font-semibold my-3 laptop:text-lg laptop:space-x-7'>
                                <p className='text-[#E20EF9]'>Biddings</p>
                            </div>
                            <hr className='bg-black mt-5' style={{height: '2px'}} />
                            {bidders && bidders.length > 0 ? bidders.map((item) => (
                                <BidItem key={item.id} name={item.attributes.name} price={item.attributes.price} id={item.id}/>
                            )).reverse() : <p className='text-black'>No biddings</p>}
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default BiddingPage