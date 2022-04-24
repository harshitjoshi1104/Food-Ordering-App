import React, {useState} from 'react';
import "./CartBox.css"
import CartItems from './CartItems';

const CartBox = props => {
    console.log(props.data)
    var total=0;
    const [changeState,setState]=useState(0)
    function mappingFunc(item){
        if(item[0]===0){
            return
        }
        total+=item[0]*item[2];
        return <><CartItems datanew={item} onChangeItem={changedCartItem}/><br /><hr /><br /></>
    }

    const cartData=props.data.map(mappingFunc)

    function closeModal(){
        props.onchangeCartModal();
    }

    function changedCartItem(item,change){
        props.onChangeCartItems(item,change)
        setState(changeState+1)
    }

    function someFunc(){
        if (cartData.length===0){
            
        }
        alert("Order Place. Thank You")
    }
    return (
        <>
            <div className='backdrop' onClick={closeModal} />
            <div className="cart-box" >
                {cartData}
                {/* <CartItems /> */}
                {/* <hr className='green-hr-line' /> */}
                <div className='total-bar'>
                    <h1>Total {total}</h1>
                    <div className='btn-order-cancel'>
                        <button className='OrderNow' onClick={someFunc}>Order Now</button>
                        <button onClick={closeModal} className='CancelNow'>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartBox