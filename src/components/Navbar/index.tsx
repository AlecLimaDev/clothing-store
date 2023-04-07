import React, { useContext } from 'react'
import { ClothingContext } from '../../../contexts/ClothingContext';
import { Logo } from '../Logo';
import * as Component from './Header';


interface NavBarProps {
    cart?: any;
    clearCart?: any;
    useContext?: any;
    accumulator?: any;
}





const Navbar:React.FC<NavBarProps> = () => {
    const { cart, clearCart } = useContext<any>(ClothingContext)
    const totalPrice = cart.reduce((accumulator: any, current: any) => accumulator + current.price, 0)


  return (
    <Component.Header>
            <nav>
                <Logo />
                <div className='nav-bar-actions'>
                    <div className='nav-bar-total'>
                        <span className='nav-bar-total-quantity'>
                            {cart.length} {cart.length === 1 ? "Peça" : "Peças"}</span>
                        <span className='nav-bar-total-price'> {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                    <button className='clean-btn' onClick={() => clearCart()}>LIMPAR</button>
                </div>
            </nav>
        </Component.Header>
  )
}

export default Navbar
