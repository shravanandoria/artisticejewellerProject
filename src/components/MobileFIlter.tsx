import React, {ChangeEvent, useState} from 'react'
import XIcon from '@heroicons/react/solid/XIcon'
import Accordion from './Accordion';
import BtnPrimary from './BtnPrimary';
import eth from '../assets/icons/eth.png';
import polygon from '../assets/icons/polygon.png';
import solana from '../assets/icons/solana.png';
interface Props {
  isSidebarOpen: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;  
  className?: string;
}

interface FilterProps {
  option : string;
}

const MobileFIlter = ({isSidebarOpen, setOpenFilter, className} : Props) => {
  
  interface HandleChangeInterface{
    id: number;
    name: string;
    isOpen: boolean;
  }

  const container= 'border-2 border-gray-500 rounded-lg p-2 text-center'

  return (
    <>
      <div className={`flex flex-col justify-between overflow-y-scroll top-0 left-0 w-full bg-white shadow-2xl  fixed h-full z-40 ease-in-out duration-300 text-black  ${isSidebarOpen ?  "translate-x-0" : "-translate-x-full"} tablet:text-xl tablet:px-10 ${className}`} >
        <div className='p-4'>
          <div className='grid grid-cols-3 items-center'>
            <h1 className='col-start-2 text-center text-xl font-bold'>Filters</h1>
            <XIcon className='h-8 w-8 justify-self-end' onClick={() => setOpenFilter(false)}/>
          </div>

          {/* Filter */}
          <div className='my-4 w-full'>
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
        <div className='sticky bottom-0 border-t-2 border-gray-300 flex justify-center space-x-3 items-center px-5 py-3 bg-white z-10 tablet:space-x-20'>
          <div className='border-2 rounded-lg font-bold text-center px-8 p-4'>Clear all</div>
          <BtnPrimary content='Done' className='w-full px-8 p-4'/>
        </div>
      </div>
    </>
  )
}
export default MobileFIlter