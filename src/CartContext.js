import { createContext } from "react";
import { useState, useEffect } from "react";

//context
export const CartContext = createContext({
  items: [],
  getProductData: () => {},
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
});

//Provider
export function CartProvider({children}){

    const [cartProducts, setCartProducts] = useState([])

    //Products Data
    const [personsData, changedData] = useState([]);

    

    const fetchData = async () => {
      try{
        await fetch("http://localhost:8000/api/products", {
          method: "GET",
        })
          .then((data) => data.json())
          .then((persons) => {
            changedData(persons.data);
          });
      }catch (error){
        console.error("Cartcontext")
      }
    };

    function getProductData(id){
        let productData = personsData.find(product => product.id === id)
        if(productData == undefined){
            return undefined
        }
        return productData
    }
    
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity
        if(quantity === undefined){
            return 0
        }else{
            return quantity
        }
    }

    function addOneToCart (id) {
        const quantity = getProductQuantity(id)
        if(quantity === 0) {
            setCartProducts([
                ...cartProducts,
                {
                    id : id,
                    quantity : 1
                }
            ])
        }else{
            setCartProducts(
                    cartProducts.map((product) => 
                        product.id === id 
                        ?
                        {...product, quantity : product.quantity + 1}
                        :
                        product
                    )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity (id)
        if(quantity == 1) {
            deleteFromCart(id)
        }else{
            setCartProducts(
                    cartProducts.map(
                    product => 
                    product.id === id
                    ?
                    {...product, quantity : product.quantity - 1}
                    :
                    product
                    )
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts.filter((currentProduct) => {
                return currentProduct.id !== id
            })
        )
        
    }

    

    function getTotalCost() {
        let totalCost = 0
        cartProducts.map((cartItems) => {
            const productData = getProductData(cartItems.id)
            totalCost += (productData.price * cartItems.quantity)
        })
        return totalCost
    }

  const contextValue = {
    getProductData,
    allItems: personsData,
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartContext.Provider data={personsData} value={contextValue}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
