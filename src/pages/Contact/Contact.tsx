import React, {ChangeEvent, FormEvent, useState} from "react";
import "./style.css";
import { contact } from "../../store/user/UserActions/userActions";
import { AppDispatch } from "../../store/store";
import { useNavigate } from 'react-router-dom';
import { ContactInterface } from '../../store/user/UserTypes/userInterface';
import { useDispatch } from 'react-redux';
import axios from "axios";
import BtnPrimary from "../../components/BtnPrimary";


const Contact = () => {
  const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [data, setData] = useState<ContactInterface>({firstName: '', lastName: '',email: '', inquiry: ''});
    const [error, setError] = useState<string>('')
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({...data, [e.target.name] : e.target.value});
    }
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('')
        dispatch(contact(data))
        console.log(contact(data))
        // navigate('/', {replace: true})
    }
  return (
    <>
    <div className="contactUsBox">
      <div className="leftBox">
        <h2 className="headText">Contact Us</h2>
        <p className="paraText">Need to get in touch with us? Fill out the form with your inquiry</p>
      </div>
      <div className="rightBox">
        <form onSubmit={handleSubmit}>
          <div className="inputDiv">
            <p>First Name*</p>
            <input type="text" name="firstName" required onChange={handleChange}/>
          </div>
          <div className="inputDiv">
            <p>Last Name*</p>
            <input type="text" name="lastName" required onChange={handleChange}/>
          </div>
          <div className="inputDiv emailDiv">
            <p>Email*</p>
            <input className="emailInput" name="email"  required onChange={handleChange}/>
          </div>
          <div className="inputDiv emailDiv">
            <p>What can we help you with?</p>
            <textarea className="emailInput" name="inquiry" onChange={handleChange}></textarea>
          </div>
          <BtnPrimary type='submit' content='Submit' />
        </form>
      </div>
    </div>
    </>
  )
};

export default Contact;
