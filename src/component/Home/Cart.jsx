import PropTypes from "prop-types"


const Cart = ({cart}) => {
    
  
    
    return (
        <div className="mt-2 mb-4">
            <h1 className="text-xl font-bold">Course Name</h1>
            <ol className="list-decimal ml-4">
             {
                 cart.cart.map(carts=><li key={carts.id}>{carts.title}</li>)
                
             }
            </ol>
        </div>
    );
};
Cart.propTypes={
    cart:PropTypes.object.isRequired
}

export default Cart;