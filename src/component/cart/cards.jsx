import { useEffect, useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types"


const Cards = ({handlecart}) => {
    const [cards,setcards]=useState([])

    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setcards(data))
        
    },[])

    return (
        <div className="w-2/3 grid grid-cols-3 gap-4 ">
            {
                cards.map(card=><Card key={card.id} handlecart={handlecart}  card={card}></Card>)
            }
            
            
            
        </div>
    );
};
Cards.prototype={
    handlecart:PropTypes.func,
    handlesettime:PropTypes.func
}

export default Cards;