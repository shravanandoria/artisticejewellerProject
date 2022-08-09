import React, {ChangeEvent, FormEvent, useState} from 'react';
import BtnPrimary from '../components/BtnPrimary';
import { SignupInterface } from '../store/user/UserTypes/userInterface';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/user/UserActions/userActions';
import { AppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [data, setData] = useState<SignupInterface>({name: '', username: '',email: '', dob: '', password: '', confirmPassword: ''});
    const [error, setError] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('')
        if(data.password !== data.confirmPassword) return setError('Please confirm your password')
        dispatch(signUp(data))
        navigate('/', {replace: true})
    }

  return (
    <div className='my-5'>  
        {error && <div className='text-red-600 font-bold my-5 w-full h-full text-center'>{error}</div>}
        <div className='flex justify-center' >
            <form className='flex flex-col space-y-3 items-center border-2 rounded-xl shadow-2xl p-4 w-fit' onSubmit={handleSubmit}>
                {/* <div className='border-2 rounded-xl  border-pink-500 p-3 text-center w-full'>
                    <label htmlFor="profileImage" className='text-sm text-gray-500'>{selectedImage ? selectedImage.name :  'Select an Image'}</label>
                    <input type="file" name="profileImage" id="profileImage" required className='hidden' onChange={(e: any) => {
                        setSelectedImage(e.target.files[0])
                    }}/>
                </div> */}
                <div className='border rounded-lg border-black p-2 '>
                    <input type="text" name='name' placeholder='enter your name' className='outline-none' onChange={handleChange}/>
                </div>
                <div className='border rounded-lg border-black p-2 '>
                    <input type="text" name='username' placeholder='enter your username' className='outline-none' onChange={handleChange}/>
                </div>
                <div className='border rounded-lg border-black p-2 '>
                    <input type="text" name='email' placeholder='joedoe@gmail.com' className='outline-none' onChange={handleChange} />
                </div>
                <div className='border rounded-lg border-black p-2 '>
                    <input type="text" name='password' placeholder='Enter password' className='outline-none' onChange={handleChange} />
                </div>
                <div className='border rounded-lg border-black p-2 '>
                    <input type="text" name='confirmPassword' placeholder='Confirm password' className='outline-none' onChange={handleChange} />
                </div>
                <div className='border rounded-lg border-black p-2 px-7 '>
                    <input type="date" name='dob' placeholder='Enter your DOB' className='outline-none' onChange={handleChange} />
                </div>
                <div className='pt-5'>
                    <BtnPrimary type='submit' content='Signup' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignupPage