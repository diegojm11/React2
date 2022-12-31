import {useState, useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'
import { gFetch } from '../../helpers/gFetch'


// acciones  api -> resultado (asincrónico)



const ItemListContainer = ( { saludo = 'saludo por defecto' } ) => { // componente 
    
    const [bool, setBool] = useState(true)
    const [ products, setProducts ] = useState([])

    const [ product, setProduct ] = useState({})

    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    console.log('itemListContainer')
    
    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')


        if (id) {

            const queryFiltrada =  query(queryCollection, where('categoria','==', id), where('isActive', '==', true))

            getDocs(queryFiltrada)
            .then(data => setProducts( data.docs.map(product => ({ id: product.id,...product.data()}) ) ) )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
           
            getDocs(queryCollection)
            .then(data => setProducts( data.docs.map(product => ({ id: product.id,...product.data()}) ) ) )
            .catch(err => console.log())
            .finally(()=> setLoading(false))   
        }      
   

    }, [id])

   
    

    

    //ejemplo de evento
   const handleClick=(e)=>{
    e.preventDefault() 
    setBool(!bool)
}

    const handleAgregar=()=>{
        setProducts([
            ...products,
            { id: products.length + 1, name: "Gorra 7", url: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera" , price: 2 }
        ])
    }
    
    console.log(products)
    {/*  [1,2,3,4,5] => 1 [ <li>1</li>, <li>2</li>, <li>3</li>, .... ]  */}

    return (
        <div >
            
            <button onClick={ handleClick }>Cambiar estado </button>           
            <button onClick={handleAgregar}>Agregar Item </button>  
        
            {   loading ? 
                    <Loading /> 
                :                   
                    <ItemList products={products} />
                        
                    
            }            
        
        </div>
    )
}

export default ItemListContainer
