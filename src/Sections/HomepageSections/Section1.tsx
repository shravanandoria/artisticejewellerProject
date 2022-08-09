import BtnPrimary from '../../components/BtnPrimary'
import eth from '../../assets/icons/eth.png'
import polygon from '../../assets/icons/polygon.png'
import tether from '../../assets/icons/tether.png'
import Card from '../../assets/Card.png'
import nightMode from '../../assets/icons/moon.png'
import Bell from "@heroicons/react/solid/BellIcon"
import twitter from '../../assets/social_icons/twitter.png';
import insta from '../../assets/icons/instagram.png';

const Section1 = () => {
  return (
    <div className='text-black mb-24 laptop:px-5 laptop:mt-14'>
      <div className='container flex flex-col tablet:flex-row justify-between mt-8'>
        {/* LEFT CONTENT */}
        
        <div className='tablet:text-2xl pl-9'>
          <h1 className='font-semibold text-4xl laptop:text-5xl' style={{lineHeight: '1.5'}}>Collect <br /> Non-Fungible <br />Jewellery 💎.</h1>
          <p className='mt-4 text-[#766767] text-sm laptop:text-lg'>Artistic Jewellers seeks to establish a bridge between the jewellery <br/> industry and the NFT world.</p>
            <a href="https://theartisticjeweller.com/wp-content/uploads/2022/06/The-Artistic-Jeweller-Investor-Pitch-Deck.pdf" target={'_blank'}> <BtnPrimary content='Download Pitch-Deck' className='my-3 mt-6 tablet:text-base tablet:px-6 laptop:py-3 laptop:text-md font-semibold px-5 p-2 laptop:px-6 laptop:mt-3'/></a>        
          <div className='flex flex-col justify-center items-start'>
            <div className='flex'>            
              <p className='mr-3 text-sm text-[#766767] font-semibold'>We accept: </p>
                <img src={eth} alt="eth" className='h-5 ' />
                <img src={polygon} alt="polygon" className='h-5 mx-1' />
                <img src={tether} alt="tether" className='h-5' />
            </div>
          </div>
        </div>
        {/* NFT MIDDLE image */}
        <div className='sm:mt-8 tablet:m-0 flex justify-center'>
            <img src={Card} alt="nftCard" className='h-80 w-80 laptop:mr-12 laptop:h-96 laptop:w-96'/>
          
          {/* RIGHT CONTENT  */}
          <div className='hidden tablet:visible tablet:flex flex-col gap-y-5  items-center justify-center'>
            <img src={nightMode} alt="night-image" className='h-5 laptop:h-7'/>
            <Bell className='h-5 laptop:h-7'/>
            <a href="https://www.instagram.com/theartisticjeweller/" target="_blank"><img src={insta} alt="" className='h-5 laptop:h-7'/></a>
            <a href="https://twitter.com/jeweller_aj" target="_blank"><img src={twitter} alt="" className='h-6 laptop:h-7'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1