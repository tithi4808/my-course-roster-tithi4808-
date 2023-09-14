import PropTypes from "prop-types"
import { FaDollarSign,FaBookOpen } from 'react-icons/fa';

const Card = ({card}) => {
    const {image,title,details,price,credits}=card
    return (
        <div className="border-2 mb-10 p-4 rounded-lg">
           
           <img src={image} alt="" />
           <h1 className="font-bold my-2">{title}</h1>
           <p className="text-sm  mb-2" >{details}</p>
           <div className="flex gap-2 " >
            <FaDollarSign className="mt-1"></FaDollarSign>
            <p >Price: {price}</p>
            <FaBookOpen className="mt-1"></FaBookOpen>
            <p>Credit: {credits}hr</p>

           </div>
           <div className="flex justify-center mt-4 ">
            <button className="bg-sky-400 text-white w-full my-2 py-1 rounded">Select</button>
           </div>
           
            
        </div>
    );
};
Card.propTypes={
    card:PropTypes.object.isRequired
}

export default Card;