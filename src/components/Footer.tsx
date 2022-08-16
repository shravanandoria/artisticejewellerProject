import BtnPrimary from './BtnPrimary'
import discord from '../assets/social_icons/discord.png';
import twitter from '../assets/social_icons/twitter.png';
import instagram from '../assets/social_icons/instagram.png';
import telegram from '../assets/social_icons/telegram.png';
import facebook from '../assets/social_icons/facebook.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#181818] text-sm tablet:text-lg laptop:text-3xl'>
        <div className='tablet:flex justify-between items-center tablet:p-8 tablet:px-16'>
            <div className="p-3 tablet:p-0 text-white text-lg leading-6 tablet:leading-9 laptop:leading-10">
                <h1 className='mt-4 laptop:text-2xl font-semibold leading-10'>Learn More About Non-Fungible<br/> Jewellery  & The<br/> Artistic Jewellers!</h1>
            </div>
            <div className='px-3 tablet:px-0'>
                <a href='https://theartisticjeweller.com/' target={'_blank'} className='laptop:px-52 laptop:mt-7'>
                    <BtnPrimary content='Visit Our Website ' className='border-0 text-xs tablet:text-lg font-semibold tracking-wider px-7 my-3 laptop:text-sm laptop:p-4 laptop:px-10' />
                </a>
            </div>
        </div>
        <div className='py-3'>
            <hr className='h-3 tablet:h-4 border-0 bg-gradient-to-r from-[#4B2BE9]  via-[#E70FD1] to-[#F0F442]'/>
        </div>
        <div>
            <div className='tablet:flex justify-between items-center tablet:tablet:p-10 '>
                <div className='p-3 tablet:px-5 flex justify-between text-white  gap-x-5 laptop:gap-14 tablet:text-lg ' style={{fontWeight: '900', fontSize: '16px'}} >
                    {/* Marketplace */}
                    <div className=''>
                        <h1 className='text-[#E20EF9]  my-3'>Marketplace</h1>
                        <ul>
                            <li> <Link to="/explore">Explore</Link></li>
                            <li><Link to="/collections">Collections</Link></li>
                            <li><Link to="/creators">Creators</Link></li>
                            <li><a href="https://events.ibentos.com/ArtGallary/welcome.html" target={'_blank'}>Metaverse</a></li>
                        </ul>
                    </div>
                    {/* Company */}
                    <div>
                        <h1 className='text-[#E20EF9] my-3'>Company</h1>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Community</li>
                            <li ><a href="/contact">Contact Us</a></li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center gap-x-3 py-3 my-5 laptop:mr-56'>
                    <div className='rounded-full bg-[#707070] p-2 '><a href="https://twitter.com/jeweller_aj" target="_blank"><img src={twitter} alt="twitter" className='h-4 w-4'/></a></div>
                    <div className='rounded-full bg-[#707070] p-2 '><a href="https://www.instagram.com/theartisticjeweller/" target="_blank"><img src={instagram} alt="instagram" className='h-4 w-4'/></a></div>
                    <div className='rounded-full bg-[#707070] p-2 '><a href="https://discord.com/" target="_blank"><img src={discord} alt="discord" className='h-4 w-4'/></a></div>
                    <div className='rounded-full bg-[#707070] p-2 '><a href="https://telegram.com/" target="_blank"><img src={telegram} alt="telegram" className='h-4 w-4'/></a></div>
                    <div className='rounded-full bg-[#707070] p-2 '><a href="https://facebook.com/" target="_blank"><img src={facebook} alt="facebook" className='h-4 w-4'/></a></div>
                </div>
            </div>
            <div>
                <h1 className='text-white text-center text-xs py-3 tablet:sm'>2022 &#169; The Artistic Jewellers</h1>
            </div> 
        </div>
    </div>
  )
}

export default Footer