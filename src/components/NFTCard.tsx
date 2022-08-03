interface NFTInfo {
    nftImage: string;
    nftName: string;
    price: string;
    artistName: string;
    artistImage: string;
    artistProfile: string;
    className?: string;
}


const NFTCard = ({nftImage, nftName, price, artistName, artistImage, artistProfile, className }: NFTInfo) => {
  return (    
    <div className={`lg:px-8 tablet:px-10 ${className} `} style={{padding: '7px'}}>    
        <div className="container p-3 rounded-2xl bg-white border shadow-lg">
            <div className="flex flex-col justify-center items-center w-full relative">
                <img src={nftImage} alt="background" className="rounded-xl h-52 laptop:h-72 w-full object-cover" />
            </div>
            <div className="mt-2 text-left tablet:text-sm">
                <h1 className="font-semibold text-sm">{nftName}</h1>
                <p style={{fontWeight: '600', fontSize: '10px'}}>{artistName}</p>
            </div>
            <div className="flex justify-between tablet:text-sm mt-3 text-[#707070]" style={{fontSize: '10px'}}>
                <div> 
                  <h1 className='font-semibold '>Price</h1>
                  <div className='text-[#2cbc08] font-semibold'>{price}</div>
                </div>
                <div className='flex items-center gap-x-2'>
                  <img src={artistImage} alt="user" className='h-7 w-7 rounded-full'/>
                  <div >
                    <h1 className='font-semibold'>Artist</h1>
                    <p className='font-semibold text-black'>{artistProfile}</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default NFTCard











