import {useState, useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'
import { gFetch } from '../../helpers/gFetch'




const ItemListContainer = ( { saludo = 'saludo por defecto' } ) => { 
    
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

            const queryFiltrada =  query(queryCollection, where('categoria','==', id))

  
            getDocs(queryFiltrada)
            .then(data => setProducts( data.docs.map(product => ({ id: product.id,...product.data()}) ) ) )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
           
            getDocs(queryCollection)
            .then(data => setProducts( data.docs.map(product => ({ id: product.id,...product.data()}) ) ) )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))   
        }      
   

    }, [id])
  
    
    return (
        <div >
        
            {   loading ? 
                    <Loading /> 
                :                   
                    <ItemList products={products} />
                        
                    
            }            
        
        </div>
    )
}

export default ItemListContainer
