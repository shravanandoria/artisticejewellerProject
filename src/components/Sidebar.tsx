import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useMetamask } from '@thirdweb-dev/react';
//Icons
import close from '../assets/icons/close.png';
import instagram from '../assets/icons/colored-icons/instagram.png';
import discord from '../assets/icons/colored-icons/discord.png';
import facebook from '../assets/icons/colored-icons/facebook.png';
import telegram from '../assets/icons/colored-icons/telegram.png';
import twitter from '../assets/icons/colored-icons/twitter.png';

//Thirdweb adddress
import { useAddress } from "@thirdweb-dev/react";

interface SideBarInterface {
    sideBarOpen: boolean;
    setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}
const Menu = ['Explore', 'Collections', 'Creators', 'Metaverse', 'Privacy Policy', 'Terms & Conditions', 'Community', 'Help']

const logos = [instagram, discord, facebook, telegram, twitter]

const Sidebar = ({sideBarOpen, setSideBarOpen, className}: SideBarInterface) => {
    const address = useAddress()
    const [user, setUser] = useState<string>('');
    const userToken = Cookies.get('jwt')
    const connectToMetamask = useMetamask()    
    useEffect(() => {}, [userToken])
    
  return (
    <div className={`${className} overflow-y-scroll top-0 right-0 w-64 bg-white shadow-2xl p-4 fixed h-full z-40 ease-in-out duration-300 text-black  ${sideBarOpen ?  "translate-x-0" : "translate-x-full"}`}>
        <div className='flex justify-end  w-full'>
            <div className='flex flex-col space-y-4 items-end justify-end' onClick={() => setSideBarOpen(!sideBarOpen)}>
                <img src={close} alt="close" className='h-5 w-5'/>
                <img src={user} alt="user" className='h-9 w-9 rounded-full' />
            </div>
        </div>
        <ul className='flex flex-col font-semibold items-end gap-y-3 mt-4'>
            {Menu.map((title, index) => (
                <li key={index}>{title}</li>
            ))}
        </ul>
        <div className='flex justify-end space-x-3 mt-6'>
            {logos.map((image, index) => (
                <img key={index} src={image} alt="logo" className='h-7 w-7'/>
            ))}
        </div>
        <div className='my-5'>
            {!userToken ?
            <div className='flex flex-col justify-end space-y-4'>
                <Link className='text-center border-4 border-pink-500 p-3 rounded-xl font-bold' to='/Login' onClick={() => setSideBarOpen(!sideBarOpen)}>Login</Link>
                <Link className='text-center border-4 border-pink-500 p-3 rounded-xl font-bold' to='/signup' onClick={() => setSideBarOpen(!sideBarOpen)}>Sign up</Link> </div>: <button  className='text-center border-4 border-pink-500 p-3 rounded-xl font-bold' onClick={()=>connectToMetamask()} >{address ? `${address.slice(0,15)}...`: "Connect wallet"}</button>
            }
        </div>
    </div>
  )
}

export default Sidebar