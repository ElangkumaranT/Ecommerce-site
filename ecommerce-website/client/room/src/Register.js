import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mess, setMess] = useState(false);

  const submit = (e) => {
    e.preventDefault(); 
    setMess(true);
    axios.post('https://ecommerce-site-backend-nine.vercel.app/save', { firstName, lastName, email, phone })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  if (!mess) {
    return (
      <div className="login-container">
        <div className="login-box">
          <form onSubmit={submit} className="login-form">
            <h2>Contact Information</h2>
            <label htmlFor="firstName">First Name:</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              onChange={e => setFirstName(e.target.value)} 
              required 
            />
            <label htmlFor="lastName">Last Name:</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              onChange={e => setLastName(e.target.value)} 
              required 
            />
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              onChange={e => setEmail(e.target.value)} 
              required 
            />
            <label htmlFor="phone">Phone Number:</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              onChange={e => setPhone(e.target.value)} 
              required 
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  } else {
    swal.fire("Registed Successfully","","success");
  }
}

export default Register;
