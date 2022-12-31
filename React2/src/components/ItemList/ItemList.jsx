import { memo } from 'react'
import Item from '../Item/Item'

// memo(componente, funcion comparadora)
const ItemList = memo( ({ products }) => {
        console.log('itemList')
        
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                {products.map( product =>   <Item key={product.id} product={product} />                 ) }
            </div>
        )
    }
 ) 

export default ItemList