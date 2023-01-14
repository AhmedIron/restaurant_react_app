import { Container, Card, Button, Alert } from "react-bootstrap";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useContext } from "react"
import { CartContext } from "../CartContext"

const CartPage = () => {

    const cart = useContext(CartContext)
    console.log(cart.items);
    const count = cart.items.reduce((sum, product) => sum + product.quantity, 0 )

    const checkout = async () => {
        await fetch('http://localhost:8000/api/checkout', {
            method : "POST",
            headers: { "Content-Type": "multipart/form-data" },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            console.log(response);
            return response.json()
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url)
            }
        })
    }

    return(
        //////

            
        
<>
<Navbar />
<Container style={{marginTop:"200px"}}>
    
        {cart.items.map((currentProduct, idx) => {

            const id = currentProduct.id
            const quantity = currentProduct.quantity
            const productData = cart.getProductData(id)
            const totalPricePerItem = quantity * productData.price
            return(

                
                        <div key={idx}>

                <div key={idx} className="MainCartDiv">
                    <div>
                        <Card.Img
                        style={{width:"200px"}}
                        src={productData.food_image_link}/>
                    </div>

                    <div>
                        <h4>{productData.food_name}</h4>
                        <h5 style={{fontSize:"small"}}>{productData.food_ingredients}</h5>
                        <h6>Price per item : ${productData.price} * <span>{currentProduct.quantity}</span></h6>
                        <h5>total : ${totalPricePerItem}</h5>
                    </div>
                </div>


                    <hr></hr>

                </div>

                    
                        
            )
        }
        )
    }
    {
        count != 0 ? (
            <>
            <h4 style={{textAlign:"center"}}>Grand Total : ${cart.getTotalCost()}</h4>
        <Button style={{width:"100%", height:"70px", fontSize:"xxLarg", fontFamily:"almarai"}} variant="success" onClick={checkout}>
            Buy Your Delicious Food
        </Button>
        </>
        ) : (<Alert className="alertx" variant="danger" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>No Food Added</Alert>)
    }
        
</Container>
<div className="cartFooter">
<Footer />
</div>
</>


////////
    )
}

export default CartPage