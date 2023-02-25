import { useContext, createContext,useState } from 'react'


const CartContext = createContext( [] )

export const useCartContext = () =>  useContext(CartContext)



export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])


   

    const agregarCarrito = (product) => {
      
        const idx = cartList.findIndex(prod => prod.id === product.id) 
        
        if (idx !== -1) {
            
            cartList[idx].cant +=  product.cant
            setCartList( [ ...cartList ] ) 
        } else {
            setCartList([...cartList, product]) 
        }  
        

    }

   
    
    const precioTotal = () => cartList.reduce((contador, producto) => contador += (producto.price * producto.cant) , 0)
    

    const cantidadTotal = () => cartList.reduce((contador, producto) => contador += producto.cant , 0)


 
    const vaciarCarrito = () => {
        setCartList([])
    }


    const eliminarPorItem = (id) =>  {
        setCartList( cartList.filter(prod => prod.id !== id ) )
    }
    


    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarPorItem
        }}>
            { children  }
        </CartContext.Provider>
    )
}