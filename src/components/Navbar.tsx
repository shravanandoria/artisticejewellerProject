import {useState, useEffect} from 'react'
import logo from '../assets/logo.png'
import Menuicon from '../assets/icons/Menu_icon.png'
import SearchIcon from '@heroicons/react/solid/SearchIcon'
import { gradient1 } from './GradientColors'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Cookies  from 'js-cookie'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import user from '../assets/users/user.jpg'

//THirdweb imports
import { useAddress } from '@thirdweb-dev/react'
import { useMetamask } from '@thirdweb-dev/react'
const Menu = ['Explore', 'Creators', 'Collections']

const SearchBar = () : JSX.Element => {
  return (
    <>
      <div className='text-left flex laptop:ml-margin-left-6'>
        <input type="text" name="search" id="search" placeholder='Search Here...' className='border-2 font-semibold text-gray-600 border-r-0 border-[#E20EF9] hover:border-purple-600 outline-none rounded-md rounded-r-none laptop:h-10 tablet:pl-3 laptop:pr-12 tablet:text-sm laptop:text-xs' />
        <SearchIcon fill="white" className={`${gradient1} h-9 p-2 rounded-md rounded-l-none px-1 laptop:h-10 laptop:px-2`}/>
      </div>
    </>
  )
}

const Navbar = () => {
  const connectWallet = useMetamask()
  const address = useAddress()
  const {isLoading} = useSelector((store: RootState) => store.user)
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const jwt = Cookies.get('jwt')
  
  return (
    <>
    <div className={`flex shadow-md relative px-6 laptop:px-14 mt-3 h- ${sideBarOpen && 'overflow-hidden'} `} >
      <nav className='w-full py-3 mb-3'>
        <div className=' flex justify-evenly items-center w-full laptop:px-10'>
          <div className='flex items-center justify-between laptop:'>
            <Link to={'/'}>
              <img src={logo} alt="logo"  className='h-9 w-9 mr-4 laptop:h-11 laptop:w-11 laptop:mr-7'/>
            </Link>
              <ul className='hidden tablet:flex text-sm font-semibold tablet:visible tablet:items-center laptop:mr-5 laptop:ml-6 laptop:text-lg laptop:gap-x-5'>
                {Menu.map((item, index) => (
                  <Link key={index} to={`/${item}`} className='text-sm'>{item}</Link>
                ))}
                <li className='tablet:mr-3 text-sm'><a href="https://events.ibentos.com/ArtGallary/welcome.html" target={'_blank'}>Metaverse</a></li>
              </ul>
            <div className='hidden tablet:flex tablet:visible'>
              <SearchBar />
            </div>
        </div>
              
          {/* MOBILE DIV */}
          <div onClick={() => setSideBarOpen(!sideBarOpen)} className={`tablet:hidden p-2 rounded-lg`}>
            <img src={Menuicon} alt="menu" className='h-6 w-6'/>
          </div>

          <div className='hidden tablet:visible tablet:flex items-center'>      
            <div className='flex items-center text-sm laptop:text-lg '>
              {!isLoading && jwt ? 
                <div className='flex items-center space-x-5'> 
                  <button className='font-semibold border-2 rounded-md px-4 py-2 laptop:py-2 laptop:px-5 border-[#E20EF9]' onClick={() => connectWallet()}>{address ? <p className='text-xs'>{address.slice(0,15)+'...'} </p> : <p className='text-sm'>Connect Wallet</p>}</button>
                  <Link to={'/user'} className="laptop:px-1">
                    <img src={user} alt="userProfile" className='h-11 w-11 rounded-full  hover:cursor-pointer' />
                  </Link>
                </div> :
                <div>
                  <Link to={'/login'}><button className='font-semibold mx-3 laptop:mx-11'>Log in</button></Link>
                  <Link to={'/signup'}> <button className='font-semibold border-2 rounded-md px-4 py-2 laptop:py-3 laptop:px-9 border-[#E20EF9]'>Sign Up</button></Link>
                </div>
              }
            </div>
          </div>
        </div>
      </nav>
      <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
    </div>
  </>
  )
}

export default Navbar