import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Main.css'
const Main = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] =useState([])
    console.log(cart.length);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) =>{
        const newArray = [...cart, product]
        setCart(newArray)
    }
    return (
        <div className='main-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='order-summary-container'>
                <div className='order-info'>
                    <p className='order-title'>Order Summary</p>
                    <p>Selected Items:{cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Main;