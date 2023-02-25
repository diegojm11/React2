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



  const addOrder = (e) => {
    e.preventDefault()
    const order = {}
    order.buyer = dataForm
    order.price = precioTotal()
    order.items = cartList.map( ( { id, price, name } ) => ( {id, price, name} ) )
    
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')

    
       const name = dataForm.name
       const email = dataForm.email
       const phone = dataForm.phone
 
       console.log("name" + name)
       console.log("email" + email)
       console.log("phone" + phone)

       if (name.length == 0 )
       { return alert ("agregar nombre")
       }

     if ( email.length == 0 )
       { return alert ("agregar email ")
       }
    if (  !email.includes("@") )
       { return alert ("formato email")
       }
    if ( phone.length == 0)
       { return alert ("telefono")
       }
     
    
      


    addDoc(queryCollection, order)
    .then(resp => alert('la orden de compra generada es: ' + resp._key.path.segments[1]))
    .catch(err => alert('error: ' + err))
    .finally(() => vaciarCarrito())


    console.log('se actualizo')
  }

  const handleOnChange = (e) => {
    setFormData( {
      ...dataForm,
      [e.target.name]: e.target.value
    } )
  }
  
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