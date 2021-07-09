import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart'
import { useState } from 'react'
import CartProvider from './store/CartProvider';
 
function App() {

  const [cartIsShown, setCartIsShown] = useState(false)
  

  const hideModal = () =>{
    setCartIsShown(false)
  }

  const showModal = () =>{
    setCartIsShown(true)
  }

  let showModalCart = (cartIsShown && <Cart onCloseModal={hideModal} /> ) 


  return (
    <CartProvider>
      
      {showModalCart}

      <Header onClickedCartButton={showModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
 