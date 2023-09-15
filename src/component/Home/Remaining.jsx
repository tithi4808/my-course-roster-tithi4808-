import PropTypes from "prop-types"

const Remaining = ({cart}) => {
    
        
        const {times}=cart
    

    return (
        <div className="mt-2 mb-4">

             Credit Hour Remaining : {times}hr
            
        </div>
    );
};
Remaining.propTypes={
    times:PropTypes.object.isRequired
}

export default Remaining;