import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);
    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 && <p>Cart is empty</p>}

            {cart.map((item, index) => (
                <div key={index}>
                    <h4>{item.title}</h4>
                    <p>₹ {item.price}</p>
                    <img src={item.image} alt={item.title} width="100" />
                </div>
            ))}
        </div>
    );
}

export default Cart;
