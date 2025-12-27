import { useEffect, useState } from "react";
import './Cart.css'

function Cart() {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);
    return (
        <div className="cart-page">
            <h1>Cart</h1>

            {cart.length === 0 && <p>Cart is empty</p>}

            <div className="cart-grid">
                {cart.map((item, index) => (
                    <div className="cart-card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                        <p>₹ {item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Cart;
