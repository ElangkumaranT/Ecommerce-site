import { useNavigate } from "react-router-dom";
import React from "react";
import './Home.css';
import back from './back.jpg';

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home-body">
            <nav className="navbar">
                <h1 className="site-title">EK Shopping</h1>
                <ul className="nav-links">
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/Contact')}>Contact</li>
                    <li onClick={() => navigate('/About')}>About</li>
                    <li onClick={() => navigate('/Register')}>Register</li>
                    <li onClick={() => navigate('/UserLogin')}>Login</li>
                </ul>
            </nav>

           
            <div className="home-content">
                <h2 className="welcome-text">Welcome to EK Shopping</h2>
                <img src={back} alt="home"/>
            </div>
        </div>
    );
}

export default Home;
