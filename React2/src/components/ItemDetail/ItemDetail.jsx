import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    const [isCant, setIsCant] = useState(false)

    const { agregarCarrito} = useCartContext()

    const onAdd = (cant) => {
        console.log('la cantidad seleccionada es: ',cant)
        agregarCarrito({...product, cant})
        setIsCant(true)
    }
    return (
        <div className="container border border-3 border-primary rounded">
            <div className="row">
                <div className="col">
                    <img className="w-50" src={product.foto} alt='foto producto' />
                    <h3>nombre: {product.name}</h3>
                    <h3>categoria: {product.categoria}</h3>
                    <h4>precio: {product.price}</h4>
                    <h4>stock: {product.stock} </h4>
                </div>
                <div className="col ">
                    {isCant ?

                        <>
                            <Link to="/cart">
                                <button className='btn btn-outline-primary'>Ir al carrito</button>

                            </Link>
                            <Link to="/">
                                <button className='btn btn-outline-success'>Seguir comprando </button>
                            </Link>
                        </>
                    
                    :
                    
                    <ItemCount 
                        stock={product.stock} 
                        initial={1} 
                        onAdd={onAdd} 
                    />
                    }
                </div>
            </div>
            
        </div>
)
    
}
export default ItemDetail