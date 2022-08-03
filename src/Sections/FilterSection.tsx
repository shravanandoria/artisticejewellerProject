import {FilterIcon, ViewGridIcon} from '@heroicons/react/solid';
import grid from '../assets/icons/grid.png'
const Filter = () => {
  return (
    <div>        
        <div className='flex justify-between items-center tablet:px-10  laptop:px-2 laptop:mt-10 '>
                <div>
                    <button className='flex justify-start items-center gap-x-2  rounded-full border p-2 px-5 text-sm laptop:text-lg'><FilterIcon fill='black' className='h-5 w-5'/> <h1 className='font-bold'>Filter</h1></button>
                </div>
                <div>
                    <div className='rounded-full p-2 px-4  bg-white  border flex items-center gap-x-2'>
                        <ViewGridIcon fill='black' className='h-5 w-5 laptop:h-7 laptop:w-7'/>
                        <div><img src={grid} alt="grid" className='h-4 w-4 laptop:h-5 laptop:w-5'/></div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Filter