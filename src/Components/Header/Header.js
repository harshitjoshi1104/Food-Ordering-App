import React from 'react';
import './Header.css';
// import CartImage from '../../assets/basket-cart-icon-27.png';
const Header = props=>{

    function openModal(){
        props.onchangeCartModal();
    }
    return (
        <div style={{position:"fixed",top:"0",left:"0"}} className="localClasss">
            <header className='mainHeading'>
                RocksSissor
                <div className='cart-manager' onClick={openModal}>
                    <h2 className='cart-icon'>🛒 YOUR CART</h2>
                    <p className='items-count'>{props.countObj}</p>
                </div>
            </header>
            
        </div>
    )
}

export default Header