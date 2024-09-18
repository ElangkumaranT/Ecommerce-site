import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Seller.css';

import swal from 'sweetalert2';

function Seller() {
  const location = useLocation();
  const { email } = location.state || {};

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [productName, setProductName] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [brandName, setBrandName] = useState('');
  const [yearOfUsage, setYearOfUsage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [image, setImage] = useState('');
  const likec = 0;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); 
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    axios.post('http://localhost:3001/saves', {
      name,
      email,
      phone,
      productName,
      address,
      price,
      brandName,
      yearOfUsage,
      like: likec,
      image
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error("There was an error submitting the form!", error);
    });
  };

  if (!submitted) {
    return (
      <div className="seller-form-container">
        <form onSubmit={handleSubmit}>
          <div className='form-heading'>
            <h2>Sell Your Product</h2>
          </div>
          <div className="form-group">
            <label>Owner Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Product Name:</label>
            <input type="text" value={productName} onChange={e => setProductName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Price ($):</label>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Brand Name:</label>
            <input type="text" value={brandName} onChange={e => setBrandName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Year of Usage:</label>
            <input type="text" value={yearOfUsage} onChange={e => setYearOfUsage(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Upload Image:</label>
            <input type="file" onChange={handleImageChange} accept="image/*" />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    );
  } else {
    swal.fire("Registed Successfully","","success");
  }
}

export default Seller;
