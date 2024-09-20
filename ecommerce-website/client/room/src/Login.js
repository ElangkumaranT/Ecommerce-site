import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Login.css';



function Buyer() {

  const location = useLocation();
  const { email } = location.state || {};

  
  const [check, setCheck] = useState();
  const [items, setItems] = useState([]);

 

  function delet(id) {
    axios.delete(`https://ecommerce-site-backend-nine.vercel.app/delete/${id}`)
      .then(response => {
        console.log(response.data.message);
        setItems(prevItems => prevItems.filter(item => item._id !== id));
      })
      
  }
  
  
  
  useEffect(() => {
    axios.get('https://ecommerce-site-backend-nine.vercel.app/view')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  function click() {
    if (email.trim()) {
      
      const filteredItems = items.filter(item => 
        item.email.toLowerCase().includes(email.toLowerCase())
      );
      setItems(filteredItems);
      setCheck(true);
    }
  }

  useEffect(() => {
    if (email) {
      click();
    }
  }, [email]);

  return (
    <>
      {/* {check === false && (
        <>
          <h1>User Login</h1>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={e => setemail(e.target.value)}
          />
          <button type="submit" className="button" onClick={click}>Submit</button>
        </>
      )} */}
      {check === true && (
        <>
          {items.length > 0 ? (
            <table className="results-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>Product Name</th>
                  <th>Address</th>
                  <th>Price</th>
                  <th>Brand Name</th>
                  <th>Year of Usage</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item._id} >
                    <td>{item.name}</td>
                    <td>{email}</td>
                    <td>{item.phone}</td>
                    <td>{item.productName}</td>
                    <td>{item.address}</td>
                    <td>{item.price}</td>
                    <td>{item.brandName}</td>
                    <td>{item.yearOfUsage}</td>
                    <td> <button type="button"className="delete" onClick={() => {  delet(item._id);  }}> Delete</button>
</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h2>No product found</h2>
          )}
        </>
      )}
    </>
  );
}

export default Buyer;
