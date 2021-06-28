import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart'
import { useState } from 'react'
 
function App() {

  const [showCart, setShowCart] = useState(false)
  
  let showModalCart = (showCart ? <Cart onClickCancel={setShowCart} /> : '' ) 

  return (
    <>
      
      {showModalCart}

      <Header onClickCartButton={setShowCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
 