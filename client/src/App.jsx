import Main from 'pages/Page/Main';
import ErrorPage from 'pages/Page/ErrorPage';

import Shop from 'pages/Page/Shop';
import Blog from 'pages/Page/Blog';
import About from 'pages/Page/About';
import Contact from 'pages/Page/Contact';

import AdminPage from 'pages/Page/AdminPage';
import ProductPage from 'pages/ProductsPages/ProductPage';
import TypePage from "pages/ProductsPages/TypePage";
import BrandPage from "pages/ProductsPages/BrandPage";

import LogIn from 'pages/Page/LogIn';
import Registraishen from 'pages/Page/Registraishen';

import {Routes,Route} from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/" element={ <Main/> }/>
            <Route path="*" element={ <ErrorPage/> }/>

            <Route path="/shop" element={ <Shop /> }/>
            <Route path="/blog" element={ <Blog /> }/>
            <Route path="/about" element={ <About /> }/>
            <Route path="/contact" element={ <Contact /> }/>

            <Route path='/admin' element={ <AdminPage />} />
            <Route path='admin/ProductPage' element={ <ProductPage />} />
            <Route path='admin/TypePage' element={ <TypePage />} />
            <Route path='admin/BrandPage' element={ <BrandPage />} />
            
            <Route path="/login" element={ <LogIn/> }/>
            <Route path="/registraishen" element={ <Registraishen/> }/>
            
        </Routes>
    );
}

export default App;
