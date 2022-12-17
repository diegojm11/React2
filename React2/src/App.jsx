import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import itemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/cartContainer/cartContainer.jsx'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() { 
    
    let saludo = 'saludo'
   


    return (
        <div 
            className='border border-5 border-primary'
            // onClick={()=> alert('soy evento de app')}    
        >
            <BrowserRouter>
              
                <NavBar />

                <Routes >
                    <Route path='/' element={ <ItemListContainer saludo={saludo}  /> } />
                    <Route path='/category/:id' element={ <ItemListContainer saludo={saludo}  /> } />
                    <Route path='/detail/:productId' element={<ItemDetailContainer /> } />
                    <Route path='/cart' element={ <CartContainer /> } />
                    {/* <Route path='/404' element={ <Componente404 /> } /> */}
                    
                    {/* 
                    <CartContainer />                                     */}
                    <Route path='*' element={<Navigate to='/' />}/>
                </Routes>       
                
            </BrowserRouter>

        </div>
        
    )
}

export default App


