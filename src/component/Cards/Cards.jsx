import { useEffect,useState } from "react";
import Card from "../Card/Card";
import { useLoaderData, useParams } from "react-router-dom";
const Cards = () => {
    const {category} = useParams();
   
    const[cards, setCards] = useState([]);
    const data = useLoaderData();
    useEffect(() => {


       

        if(category && category !== "all" )
        {
            const filteredProducts = data.filter(d => d.category === category);
            setCards(filteredProducts);
        }

        else if(category ==undefined || category ==null ) {

           setCards(data);

        }

        else{
            setCards(data);
        }
       
    }, [data,category])
    
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mr-40">
            {
              cards.map(card => <Card key={card.id} card={card} category={category}></Card>)
            }
        </div>
        </>
        
    );
};

export default Cards;