import React from 'react'
import { useState, Fragment } from 'react';
import axios from 'axios';
const Appointment = () => {

    const [name, setName] = useState('');
    const [location,setLocation] = useState("");
    const [phone_number,setPhone_number] = useState("");
    const [email,setEmail] = useState("");

    const handleSubmit =
     async (e) => {
        e.preventDefault();
        console.log(name,location,phone_number,email)
    
        let data = {
            "name": name,
            "location":location,
            "phone_number":phone_number,
            "email":email
        }

        axios
      .post("http://localhost:4000/appointments", data)
      .then(res => {
        if (!name  || !location
            || !phone_number) return;
        
      })
      .catch(error => {
            console.log(error);
      })
    }

  return (
    <Fragment>
    <h1 className="text-center my -5">Make Appointment</h1>
    <form className='form' onSubmit={handleSubmit}>
    <div className='form-row'>
        <label htmlFor='name' className='form-label'>
            Name
        </label>
        <input 
         type="text" 
         id="name" 
         placeholder="name" 
         className="form-input"
         value = {name}
         onChange={(e) => setName(e.target.value)}
         />
         </div>
          <div className='form-row'>
</div>

 <div className='form-row'>
        <label htmlFor='location' className='form-label'>
            Location
        </label>
        <input 
         type="text" 
         id="location"
         placeholder="Location" 
         className="form-input"
         value = {location}
         onChange={(e) => setLocation(e.target.value)}/>
 </div>
 <div className='form-row'>
        <label htmlFor='phone' className='form-label'>
            Phone Number
        </label>
        <input 
         type="text" 
         id="phone"
         placeholder="Phone Number" 
         className="form-input"
         value = {phone_number}
         onChange={(e) => setPhone_number(e.target.value)}/>
 </div>
 <div className='form-row'>
        <label htmlFor='email' className='form-label'>
            Email
        </label>
        <input 
         type="text" 
         id="email" 
         placeholder="email" 
         className="form-input"
         value = {email}
         onChange={(e) => setEmail(e.target.value)}
         />
         </div>
          <div className='form-row'>
</div>

      
        <button className="btn-success btn-block form-control my -10">Submit</button>    
    </form>
</Fragment>
  )
}

export default Appointment