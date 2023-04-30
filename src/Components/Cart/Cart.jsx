import react from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0 
    let totalShipping = 0
    console.log(cart)
    for(const product of cart){
       total = total + product.price
       totalShipping  = totalShipping + product.shipping
    }
    return (
        <div>
            <div className='order-info'>
                    <p className='order-title'>Order Summary</p>
                    <p>Selected Items:{cart.length}</p>
                    <p>Total Price:{total} </p>
                    <p>Total Shipping Charge: $ {totalShipping}</p>
                    <p>Tex:</p>
                    <h4>Grand Total:</h4>
                </div>
        </div>
    );
};

export default Cart;