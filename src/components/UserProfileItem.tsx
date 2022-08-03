import background from '../assets/users/background_image.jpg'
import BtnPrimary from "./BtnPrimary";

interface UserInfo {
    userImage: string;
    name: string;
    profileId: string;
    collections: number;
    followers: number;
    outerClassName?: string;
    innerClassName?: string;
    imagePadding?: string;
}

const UserProfileItem = ({name, profileId, collections, followers, innerClassName, outerClassName, imagePadding, userImage}: UserInfo) => {
  return (
    <div className={`p-4 md:px-12 lg:px-16 tablet:px-16 laptop:px-0 ${outerClassName}`}>    
        {/* <div className={`container p-4 rounded-3xl bg-white shadow-3xl border ${className}`}> */}
        <div className={`container rounded-lg p-4 bg-white border ${innerClassName}`}>
            <div className={`flex flex-col justify-center items-center w-full relative  ${imagePadding}`}>
                <img src={background} alt="background" className="rounded-xl w-full h-28 laptop:h object-cover" />
                <img src={userImage} alt="userImage" className="rounded-full h-12 w-12 absolute -bottom-5" />
            </div>
            <div className="mt-6 text-center">
                <h1 className="font-semibold">{name}</h1>
                <p className="text-xs text-gray-400">{profileId}</p>
            </div>
            <div className="flex justify-between text-xs mt-3 ">
                <div className='flex gap-x-1 font-semibold'>{collections}  <p className='font-normal'> collections</p></div>
                <div className='flex gap-x-1 font-semibold'>{followers} <p className='font-normal'> Followers</p></div>
            </div>
            <div className="w-full mt-3">
                <BtnPrimary content="Follow" className="w-full font-semibold rounded-xl text-xs"/>
            </div>
        </div>
    </div>
  );
}

export default UserProfileItem