import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Buyer.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Sample() {
  const location = useLocation();
  const { email } = location.state || {};
  const navigate = useNavigate();  // For navigation

  const [items, setItems] = useState([]);
  const [productName, setProductName] = useState('');
  const [visibleDetails, setVisibleDetails] = useState(null);

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
    if (productName.trim()) {
      const filteredItems = items.filter(item =>
        item.productName.toLowerCase().includes(productName.toLowerCase())
      );
      setItems(filteredItems);
    }
  }

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  const change = (id, like) => {
    axios.put('https://ecommerce-site-backend-nine.vercel.app/update', { id, "like": like + 1 })
      .then(response => {
        setItems(items.map(item => 
          item._id === id ? { ...item, like: like + 1 } : item
        ));
      })
      .catch(error => {
        console.error('Error updating like count:', error);
      });
  };

  return (
    <div className="buyer-container">
      {/* Seller Button at the top */}
      <div className="option-content">
        <button className="button-user-option" onClick={() => navigate('/Seller', { state: { email } })}>
          Seller
        </button>
      </div>

      <form className="search-form">
        <h1>Product Search</h1>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={e => setProductName(e.target.value)}
        />
        <button type="button" className="search-button" onClick={click}>Search</button>
      </form>

      <div className="cards-container">
        {items.map(item => (
          <div className="card" key={item._id}>
            <img src={item.image} alt={item.productName} className="product-image" />
            <h2>{item.productName}</h2>
            <div className="button-container">
              <button className="interested-button" onClick={() => toggleDetails(item._id)}>Interested</button>
              <button className="like-button" onClick={() => change(item._id, item.like)}>❤️ Like</button>
              <span className="like-count">{item.like}</span>
            </div>
            {visibleDetails === item._id && (
              <div className="product-details">
                <p><strong>Owner Name:</strong> {item.name}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Phone No:</strong> {item.phone}</p>
                <p><strong>Address:</strong> {item.address}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Brand Name:</strong> {item.brandName}</p>
                <p><strong>Year of Usage:</strong> {item.yearOfUsage}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sample;
