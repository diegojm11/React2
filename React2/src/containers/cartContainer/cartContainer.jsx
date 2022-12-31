import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"


const CartContainer = () => {
  const [ dataForm, setFormData ] =  useState({
    name: '',
    email: '',
    phone: ''
  })
  const { cartList, vaciarCarrito, precioTotal, eliminarPorItem } = useCartContext()
  console.log(cartList)


  // Descripción de la actividad
  // Usa tu tus ítems del cart para modelar tu orden al siguiente formato:
  // { buyer: { name, phone, email }, items: [ {id, title, price} ] , total  }, si todavía no creaste el formulario de compra puedes usar un objeto hardcodeado de tipo { name, phone, email }. 
  

  const addOrder = (e) => {
    e.preventDefault()
    // armar la orden de un formulario
    const order = {}
    order.buyer = dataForm
    order.price = precioTotal()
    order.items = cartList.map( ( { id, price, name } ) => ( {id, price, name} ) )
    
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')

    // muchas ordenes 

    // productos.forEach(async prod => {
    //   await addDoc()
    // });
    
    addDoc(queryCollection, order)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => vaciarCarrito())


    // update 
    // const queryDoc = doc(db, 'productos', 'LZgs8H5DuqMOdTwQKxRp')
    // updateDoc(queryDoc, {
    //   stock: 100
    // })

    // borrado lógico
    // const queryDoc = doc(db, 'productos', 'LZgs8H5DuqMOdTwQKxRp')
    // updateDoc(queryDoc, {
    //   isActive: false
    // })


    console.log('se actualizo')
  }

  const handleOnChange = (e) => {
    // console.log('npmbre del input: ',e.target.name)
    // console.log('valor del input',e.target.value)
    setFormData( {
      ...dataForm,
      [e.target.name]: e.target.value
    } )
  }
  console.log(dataForm)

  return (
    <div>
      { cartList.length !== 0 ? 
      <>
        {cartList.map(prod => <div key={prod.id}>
                                <div className="w-50">
                                <img src={prod.foto} alt="" className='w-25' /> 

                                </div>
                              Nombre: { prod.name} - Categoria: {prod.categoria} - precio: {prod.price} - cantidad: {prod.cant}
                                  <button onClick={() => eliminarPorItem(prod.id)} className="btn btn-danger"> X </button>
                                </div>
                                ) 
          }
                              <h4>El precio total es: { precioTotal() } </h4>

                              <form onSubmit={addOrder} >
                                <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='name' 
                                  value={dataForm.name}
                                  placeholder="ingrese el nombre" 
                                />
                                <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='phone' 
                                  value={dataForm.phone}
                                  placeholder="ingrese el phone" 
                                />
                                <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='email' 
                                  value={dataForm.email}
                                  placeholder="ingrese el email" 
                                />

                                <button className="btn btn-outline-success" >Terminar Compra</button>
                              </form>

                              <button className="btn btn-danger" onClick={vaciarCarrito} >Vaciar carrito</button>
                              
                              
                          
      </>
      
      : 
        <>
          <h2>Carrito vacio</h2>
          <Link to= '/' > Ir home </Link>
        </>
}
    </div>
  )
}

export default CartContainer