import Cards from './component/cart/cards'
import Home from './component/Home/home'
import './App.css'
import { useCallback, useEffect, useState } from 'react'


function App() {
  const [cart,setcart]=useState([])
  const [times,settimes]=useState(20)
  const [credits,setcredits]=useState(0)
  
  
  const handlecart=(cartitems,credit)=>{
    const newitem=[...cart,cartitems];
    setcart(newitem)
    console.log(cartitems)
    const newtime=times-credit;
    const newcredit=credits+credit;
      if(newtime>=0 && newcredit<=20)
      {
        settimes(newtime)
      setcredits(newcredit)
      }
     
    
   
  }
  
  

  
  
 



 

  return (
    <>
    <h1 className="text-3xl font-semibold text-center my-8 ">
    Course Registration
    </h1>
    <div className='flex gap-4'>
      <Cards handlecart={handlecart}></Cards>
      <Home cart={cart} credits={credits} times={times} ></Home>


    </div>

    </>
  )
}

export default App
