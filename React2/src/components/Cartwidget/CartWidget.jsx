import  { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCartContext } from '../../context/CartContext'

export const Cartwidget = () => {

  const {cantidadTotal} = useCartContext()
   return (
    <div>
        {cantidadTotal() !== 0 && cantidadTotal()}
        <AiOutlineShoppingCart />
    </div>
  )
}
AiOutlineShoppingCart