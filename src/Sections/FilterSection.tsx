import {FilterIcon, ViewGridIcon} from '@heroicons/react/solid';
import { FC } from 'react';
import grid from '../assets/icons/grid.png'
import Chevron from '@heroicons/react/solid/ChevronDownIcon';
import {useState} from 'react';

interface props{
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: FC<props> = ({setOpenFilter}) => {
  const [openSort, setOpenSort] = useState(false)

  return (
    <div>
        <div className='flex justify-between items-center tablet:px-10  laptop:px-2 laptop:mt-10'>
                <div>
                    <button onClick={() => setOpenFilter(state => !state)} className='flex justify-start items-center gap-x-2  rounded-full border p-2 px-5 text-sm laptop:text-lg'><FilterIcon fill='black' className='h-5 w-5'/> <h1 className='font-bold'>Filter</h1></button>
                </div>
                <div className='flex items-center '>
                        <div  className='relative flex space-x-3 items-center justify-between border-2 rounded-lg w-fit m-1 p-2 tablet:space-x-6 laptop:space-x-40 laptop:p-2 tablet:mr-4'>
                          <h1  className='text-left text-xs font-bold text-gray-400 tablet:text-md'>Sort by</h1>
                          <Chevron onClick={() => setOpenSort(!openSort)} className='h-5 w-5 tablet:h-6 tablet:w-6 cursor-pointer'/>                          
                          <div  className={`${!openSort && 'hidden'} absolute top-10 right-0 border rounded-lg shadow-xl bg-white z-10  font-bold flex flex-col space-y-3 w-full`}>
                            <div className='hover:border hover:shadow-xl w-full p-2 cursor-pointer'>Recently Listed</div>
                            <div className='hover:border hover:shadow-xl w-full p-2 cursor-pointer'>Recently Created</div>
                            <div className='hover:border hover:shadow-xl w-full p-2 cursor-pointer'>Recently Sold</div>
                            <div className='hover:border hover:shadow-xl w-full p-2 cursor-pointer'>Recently Received</div>
                            <div className='hover:border hover:shadow-xl w-full p-2 cursor-pointer'>Price low to high</div>
                            <div className='hover:border hover:shadow-xl w-full p-2 cursor-pointer'>Price high to low</div>
                          </div>
                        </div>
                    <div className='hidden rounded-full p-2 px-4  bg-white  border tablet:flex items-center gap-x-2'>
                        <ViewGridIcon fill='black' className='h-5 w-5 laptop:h-7 laptop:w-7'/>
                        <div><img src={grid} alt="grid" className='h-4 w-4 laptop:h-5 laptop:w-5'/></div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Filter