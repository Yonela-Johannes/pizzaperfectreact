import { useState } from "react";
import { AiOutlineDown} from "react-icons/ai";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Cart = ({cartItems}) => {
  console.log({cartItems})
  const [hide, setHide] = useState(true)

    const total = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)

  return (
    <div className="cart">

      <div className='cartContainer'>
        <p className="total">Grand Total: R {total.toFixed(2)}</p>
        {hide ? (
            <p className="smallButton" onClick={() => setHide(false)}>Show cart<AiOutlineDown /></p>
                    ): (
            <p className="smallButton" onClick={() => setHide(true)}>Hide cart<MdOutlineKeyboardArrowUp /></p>
        )}
        
      </div>
      {!hide ? (
        <>
          <div className='cartHead'>
                <div className='head'>
          <p>Name</p>
          <p>Item</p>
          <p styles='font-weight: bold;'>Total</p>
          <p styles='font-weight: bold;'>Remove</p>
        </div>
        {cartItems.map((item) => {
          return(
            <div id={item.id} key={item.key}>
              <div className='shoppingCart'>
                <div>{item.quantity}x</div>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <button>Remove</button>
              </div>
            </div>
          )
        })}
        <p>Total:</p> 
        <p>{total.toFixed(2)}</p>
      </div>    
        </>

      ) : ""}

    </div>
  )
}

export default Cart