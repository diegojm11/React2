import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'
import CartContainer from './containers/CartContainer/CartContainer'

import 'bootstrap/dist/css/bootstrap.min.css';
import {  CartContextProvider } from './context/CartContext'


function App() { 
    
    let saludo = 'saludo' 
   


    return (
        <div 
            className='border border-5 border-primary'
                
        >
            <BrowserRouter>
                <CartContextProvider>
                    <NavBar />

                    <Routes >
                        <Route path='/' element={ <ItemListContainer saludo={saludo}  /> } />
                        <Route path='/category/:id' element={ <ItemListContainer saludo={saludo}  /> } />
                        <Route path='/detail/:productId' element={
                                    <ItemDetailContainer /> 
                                
                            } />
                        <Route path='/cart' element={ <CartContainer /> } />
                        
                        
                        <Route path='*' element={<Navigate to='/' />}/>
                    </Routes>       
                </CartContextProvider>               
            </BrowserRouter>

        </div>
        
    )
}

export default App
