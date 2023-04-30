import React from 'react';
import './Header.css';
import logo from'../../assets/images/Logo.svg';
const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <a href="/order">Order</a>
                <a href="/order-review">Order-Review</a>
                <a href="/manage-Inventory">Manage-Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;