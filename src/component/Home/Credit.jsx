import PropTypes from "prop-types"

const Credit = ({cart}) => {
    const {credits}=cart
   
    return (
        <div className="mt-2 mb-4">
            Total Credit Hour : {credits}
        </div>
    );
};
Credit.propTypes={
    cart:PropTypes.object.isRequired
    
}

export default Credit;