import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart'
import { useState } from 'react'
 
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
    <>
      
      {showModalCart}

      <Header onClickedCartButton={showModal} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
 