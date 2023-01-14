import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../CartContext"

const Cart = () => {

    const cart = useContext(CartContext)
    const count = cart.items.reduce((sum, product) => sum + product.quantity, 0 )

    return(
        
        <div className="mainDivCart">
            <Link to="/cart"><img src="cart.png" alt="cart" /><div className="counter">{count}</div></Link>
        </div>
    )
}

export default Cart