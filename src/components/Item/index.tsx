import { ClothingContext } from "../../../contexts/ClothingContext"
import { useContext } from 'react'
import * as Component from "./LI";


interface ItemProps {
    handleRemoveItemFromCart?: any;
    name?: any;
    price?: any;
    itemIndex?: any;
    url?: any;
    img?: any;
}

const Item:React.FC<ItemProps> = ({ name, price, img, itemIndex }) => {
    const { handleRemoveItemFromCart } = useContext<any>(ClothingContext)
    

    return (
        <Component.LI>
            <img className="remove-item" src={img}  /> 
            <h2 className='list-title'>{name}</h2>
            <span className='list-price'>R$ {price}</span>
            <button
                className="remove-btn"
                onClick={() => handleRemoveItemFromCart(itemIndex)}
            >
                REMOVER
            </button>
        </Component.LI>
    )
}

export default Item