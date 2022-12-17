import Item from "../Item/Item"


const itemList = ({products}) => {
    return(
        
            products.map( product => <Item key={product.id} product={product} />  )

    )
}

export default itemList