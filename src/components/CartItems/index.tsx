import { ClothingContext } from '../../../contexts/ClothingContext'
import Item from '../Item';
import React, { useContext } from 'react'
import * as Component from './Footer';

interface CartItemsProps {
    children?: React.ReactNode;
    useContext?: any;
    cart?: any;
}

const CartItems:React.FC<CartItemsProps> = () => {
    const { cart } = useContext<any>(ClothingContext)

    return (
        <Component.Footer>
            <ul>
                {cart.map((cartItem: any, index: any) =>
                    <Item 
                    key={index} 
                    itemIndex={index}
                    name={cartItem.name} 
                    price={cartItem.price}  
                    />
                )}
            </ul>
        </Component.Footer>
    )
}

export default CartItems