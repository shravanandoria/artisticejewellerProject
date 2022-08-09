import React, {FormEvent, useState} from 'react'
import {Link} from 'react-router-dom'
import BtnPrimary from '../components/BtnPrimary'
import {EyeIcon} from '@heroicons/react/solid';
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/store';
import {login} from '../store/user/UserActions/userActions'
import { useNavigate } from 'react-router-dom'

interface loginInterface {
    identifier: string;
    password: string;
}

const LoginPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [data , setData] = useState<loginInterface>({identifier: '', password: ''})
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(login({identifier: data.identifier, password:data.password}))
        navigate('/', {replace: true})
    }

    return (
    <div className='w-full flex justify-center'>
        <div className='p-5'>
            <form className='flex flex-col justify-between items-center space-y-3 border-2 rounded-xl shadow-2xl p-4 h-fit' onSubmit={handleSubmit}>
                <h1 className='font-bold text-xl'>Login</h1>
                        <div className='border rounded-lg border-black p-2 w-full'>
                            <input type="text" name='identifier' placeholder='enter your Email' className='outline-none' onChange={handleChange} required/>
                        </div>
                        <div className='border rounded-lg border-black p-2 mt-3 flex items-center'>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder='enter your password' className='outline-none' onChange={handleChange} required/>
                            <EyeIcon height={20} width={20} fill='black' onClick={() => setShowPassword(!showPassword)} className='cursor-pointer'/>
                        </div>
                    <div className='pt-6'>
                        <BtnPrimary type='submit' content='Login'/>
                    </div>
                    <p className='font-gray=400 text-sm'>Don't have a accout? <Link to='/signup' className='text-pink-600'>Signup</Link></p>
            </form>
    </div>
    </div>
  )
}

export default LoginPage