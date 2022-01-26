import React from 'react';
import { useGlobalContext } from './Context'

const Basket = () => {

  const {onAdd, onRemove, remove, cartItems, itemPrice, totalPrice} = useGlobalContext()
  console.log(cartItems.length)

    if (cartItems.length === 0) {
      return (
        <aside className='block col-1'>
          <h2>Cart Items</h2>
          <div>Basket is empty.</div>
        </aside>
      );
    } else {
      return (
          <aside className='block col-1'>
            <h2>Cart Items</h2>
            {cartItems.map((item) => (
              <div key={item.id} className='row'>
                <div className='col-2'>{item.title}</div>
                <div className='col-2'>
                  <button onClick={() => onRemove(item)} className='remove'>-</button>
                  <button onClick={() => onAdd(item)} className='add'>+</button> 
                </div>
                <div className='col-2 text-right'>
                  {item.amount} x ${item.price}
                </div>
              </div>
              ))}
              <>
                <hr></hr>
                <div className='row'>
                  <div className='col-2'>item price</div>
                  <div className='col-1 text-right'>${itemPrice}</div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <strong>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                    <strong>${totalPrice}</strong>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <button onClick={() => alert('Implement Checkout')}>Checkout</button>
                </div>     
              </>         
          </aside>
        )
    }
}

export default Basket;
