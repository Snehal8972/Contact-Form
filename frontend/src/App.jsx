import React, { useState } from 'react';
import "./App.css";
import axios from 'axios';
const App = () =>
{
  const [ Values, setValues ] = useState( {
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",

  } );

  const change = ( e ) =>
  {
    const { name, value } = e.target;
    setValues( { ...Values, [ name ]: value } );
  }

  const submit = async () =>
  {
    if (
      Values.name === "" ||
      Values.email === "" ||
      Values.number === "" ||
    Values.subject===""||
    Values.message === "" )
    {
      alert( "All fields are require" );
    }
    else
    {
      await axios.post( "http://localhost:1000/api/v1/post", Values ).then( ( res ) =>
      {
        alert( res.data.message );
      })
     
      setValues( {
        name: "",
        number: "",
        message: "",
        email: "",
        subject:"",
      } );
    }
    
  }
  return (
    <div className='main d-flex justify-content-center align-items-center '>
      <div className='card-contact px-3 py-2'>
        <h1>Contact Form</h1>
        <hr />
        <div className='cont-form d-flex flex-column justify-content-between '>
          <div>
            <h5>Name:</h5>
            <input type='text'
              placeholder='Enter your Name '
              name='name'
              value={ Values.name }
              onChange={ change }>

            </input>
          </div>
          <div>
            <h5> Email:</h5>
            <input type='email'
              placeholder='xxxx@gmail.com'
              name='email'
              value={ Values.email }
              onChange={ change }
            ></input>
          </div>
          <div>
            <h5> Mobile Number:</h5>
            <input
              type='text'
              placeholder='Enter Your mobile number 10 digits only'
              name='number'
              value={ Values.number }
              onChange={ change }></input>
          </div>
          <div>
            <h5>Subject:</h5>
          <input type="text" placeholder='Enter Your Subject' name='subject' value={Values.subject}onChange={change}/>
    

             
             
          </div>
          <div>
            <h5>Message:</h5>
            <textarea placeholder='enter your message'
              name="message"
              value={ Values.message }
              onChange={ change }
            ></textarea>
          </div>
          <div>
            <button className='btn btn-primary' onClick={ submit }>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App