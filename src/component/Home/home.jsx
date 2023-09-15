import Cart from "./Cart";
import Credit from "./Credit";
import Remaining from "./Remaining";

const Home = (cart,times,credit) => {
   
   

    
    
    return (
        <div className='w-1/3 p-4 gap-4'>
            <div className="border-2 p-8 rounded-lg ">
                <Remaining cart={cart} times={times} ></Remaining>
                <hr />
               <Cart cart={cart}></Cart>
               
            
            <hr />
            <Credit cart={cart} credit={credit}></Credit>
            </div>

            
            
        </div>
    );
};


export default Home;