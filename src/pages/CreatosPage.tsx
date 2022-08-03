import { useState } from 'react'
import UserProfileItem from '../components/UserProfileItem'
import Filter from '../Sections/FilterSection'

//userImages
import u1 from '../assets/users/u1.jpg'
import u2 from '../assets/users/u2.jpg'
import u3 from '../assets/users/u3.jpg'
import u4 from '../assets/users/u4.jpg'
import u5 from '../assets/users/u5.jpg'
import MobileFIlter from '../components/MobileFIlter'


const CreatosPage = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(true);

  return (
    <>
    <div>
      {openFilter && <MobileFIlter />}
        <div className='px-7'>
            {/* Filter */}
            <div className='mt-10' onClick={() =>setOpenFilter(!openFilter)}>
              <Filter />
            </div>
            
            <div className='flex flex-col items-center'>
                <div className={`my-6 grid grid-cols-1 tablet:grid-cols-2 tablet:gap-3 laptop:gap-6 laptop:grid-cols-4 w-full content-start`}>
                    <UserProfileItem name='shravan andoria' collections={220} followers={300} profileId={'@Shravan.a'} userImage={u1}/>
                    <UserProfileItem name='shravan andoria' collections={220} followers={300} profileId={'@Shravan.a'} userImage={u2}/>
                    <UserProfileItem name='shravan andoria' collections={220} followers={300} profileId={'@Shravan.a'} userImage={u3}/>
                    <UserProfileItem name='shravan andoria' collections={220} followers={300} profileId={'@Shravan.a'} userImage={u4}/>
                    <UserProfileItem name='shravan andoria' collections={220} followers={300} profileId={'@Shravan.a'} userImage={u5}/>
                    <UserProfileItem name='shravan andoria' collections={220} followers={300} profileId={'@Shravan.a'} userImage={u3}/>
                </div> 
                {/* Load more */}
                {/* <LoadMore /> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default CreatosPage