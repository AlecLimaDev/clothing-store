import React from 'react'
import CartItems from './components/CartItems'
import Clothing from './components/Clothing'
import Navbar from './components/Navbar'

import GlobalStyle from './../Style/GlobalStyle'


const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Clothing />
    <CartItems />
  </>
)

export default App