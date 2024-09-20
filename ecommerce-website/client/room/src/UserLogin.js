import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import buyerImg from './buyerimg.jpg';
import sellerimg from './sellerimg.jpg';
import './User.css';


function UserLogin() {
    const Navigate = useNavigate(); 
    const[email, setEmail] = useState('');
    const[check, setCheck] = useState(false);
    const[items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://ecommerce-site-backend-nine.vercel.app/views')
          .then(response => {
            setItems(response.data);
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
    }, []);

    function click() {
        if (email.trim()) {
            const emailExists = items.some(item => 
                item.email.toLowerCase() === email.toLowerCase()
            );
            
            if (emailExists) {
                setCheck(true);
            } else {
                swal.fire("Faild","Email not found","error");
                setCheck(false);
            }
        }
    }

    return (
      <div className="login-wrapper">
          <div className="login-box">
              {!check ? (
                  <div className="login-form">
                      <h1>User Login</h1>
                      <label>Email</label>
                      <input
                          type="text"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                      />
                      <button type="submit" onClick={click}>Submit</button>
                  </div>
              ) : (
                  <>
                   
                      <div className="seller-login-container">
                          <button className="button-seller-login" onClick={() => Navigate('/Login', { state: { email } })}>
                              Seller Login
                          </button>
                      </div>

                      
                      <div className="user-options-container">
                          <div className="option-card">
                              <img src={buyerImg} alt="Buyer"/>
                              <div className="option-content">
                                  <button className="button-user-option" onClick={() => Navigate('/Buyer/', { state: { email } })}>Buyer</button>
                              </div>
                          </div>
                          <div className="option-card">
                              <img src={sellerimg} alt="Seller" />
                              <div className="option-content">
                                  <button className="button-user-option" onClick={() => Navigate('/Seller', { state: { email } })}>Seller</button>
                              </div>
                          </div>
                      </div>
                  </>
              )}
          </div>
      </div>
  );
}

export default UserLogin;
