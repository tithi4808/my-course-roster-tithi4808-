import Cards from './component/cart/cards'
import Home from './component/Home/home'
import './App.css'
import { useCallback, useEffect, useState } from 'react'
// import '@sweetalert2/themes/dark/dark.scss';
// import Swal from 'sweetalert2/src/sweetalert2.js'
import swal from 'sweetalert';

function App() {
  const [cart,setcart]=useState([])



  const [times,settimes]=useState(20)
  const [credits,setcredits]=useState(0)
  
  
  const handlecart=(cartitems,credit)=>{

    const isexist=cart.find(item=>item.id==cartitems.id)
    if(isexist)
    {
      swal("You Have already added this in the cart");
    }
    else{
     
      const newtime=times-credit;
    const newcredit=credits+credit;
      if(newtime<0 && newcredit>20)
      {
        swal("You have reached the credit hour limit");
      }
      else{
        settimes(newtime)
        setcredits(newcredit)
        const newitem=[...cart,cartitems];
       setcart(newitem)
      }

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
