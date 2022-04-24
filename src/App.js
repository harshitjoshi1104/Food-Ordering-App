import React, {useState} from 'react';
import './App.css';
import CartBox from './Components/CartItem/CartBox';
import Header from './Components/Header/Header';
import MealBox from './Components/MainMealComponent/MealBox';
// import foodImage from './assets/food_image.jpg';
import ShowCase from './Components/ShowCase/ShowCaseBox';
function App() {
  console.log("Page reloaded")
  const [cartModal,setCartModal]=useState(0)
  const [countingCart,setCart]=useState(0)

  function changeCartVal(item){
    const newVal=countingCart+1
    dataCart[jsonVal[item]][0]+=1;
    
    setDataCart(dataCart)
    setCart(newVal);
  }

  const dataOnCart=[[0,"Pizza",120],[0,"Spring Rolls",50],[0,"Burger",60],[0,"Sandwich",30]]
  const [dataCart,setDataCart]=useState(dataOnCart)

  function changingModal(){
    setCartModal(cartModal^1);
  }
  const jsonVal={
    "Pizza":0,
    "Spring Rolls":1,
    "Burger":2,
    "Sandwich":3
  }

  function changeItemInCart(item,change){
    if(change==="+"){
      dataCart[jsonVal[item]][0]+=1;
    }
    else if(change==="-" && dataCart[jsonVal[item]][0]>0){
      dataCart[jsonVal[item]][0]-=1;
    }
    const newVal=dataCart[0][0]+dataCart[1][0]+dataCart[2][0]+dataCart[3][0];
    // changeCartVal(newVal)
    setCart(newVal)
    setDataCart(dataCart)
    
  }
  return (
    <div className='page'>
      <Header countObj={countingCart} onchangeCartModal={changingModal}/>
      <ShowCase />
      
      <MealBox onChangeBox={changeCartVal}/>
      {cartModal && <CartBox data={dataCart} onchangeCartModal={changingModal} onChangeCartItems={changeItemInCart}/>}
    </div>
  )
}

export default App;
