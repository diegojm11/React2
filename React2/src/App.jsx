import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'
import CartContainer from './containers/CartContainer/CartContainer'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  CartContextProvider } from './context/CartContext'


function App() { 
    
    let saludo = 'saludo' // estado
   


    return (
        <div 
            className='border border-5 border-primary'
            // onClick={()=> alert('soy evento de app')}    
        >
            <BrowserRouter>
                <CartContextProvider>
                    <NavBar />

                    <Routes >
                        <Route path='/' element={ <ItemListContainer saludo={saludo}  /> } />
                        <Route path='/category/:id' element={ <ItemListContainer saludo={saludo}  /> } />
                        <Route path='/detail/:productId' element={
                                // <TextComponent user={true} >
                                    <ItemDetailContainer /> 
                                // </TextComponent>
                            } />
                        <Route path='/cart' element={ <CartContainer /> } />
                        {/* <Route path='/404' element={ <Componente404 /> } /> */}
                        
                        {/* 
                        <CartContainer />                                     */}
                        <Route path='*' element={<Navigate to='/' />}/>
                    </Routes>       
                </CartContextProvider>               
            </BrowserRouter>

        </div>
        
    )
}

export default App
