import React from 'react';
import "./CartItems.css"

const CartItems = props =>{

    // const [dataforThis,setData]=useState(props.datanew);

    function changingData(event){
        console.log(event.target.name,event.target.value)
        props.onChangeItem(event.target.name,event.target.value)
    }
    return (
        <div className="cart-items-main">
            <div className='cart-items-first'>
                <h1>{props.datanew[1]}</h1>
                <div className='cart-items-first-2'>
                    <pre><b>Rs. {props.datanew[2]}   X</b></pre>
                    <h3>{props.datanew[0]}</h3>
                </div>
            </div>
                
            <div>
                <button onClick={changingData} value='+' className='cart-item-btn' name={props.datanew[1]}>+</button>
                <button onClick={changingData} value='-' className='cart-item-btn' name={props.datanew[1]}>-</button>
            </div>
        </div>
    )
}

export default CartItems;