/*
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from 'store/features/userSlice';
import Main from 'pages/Page/Main';
import ErrorPage from 'pages/Page/ErrorPage';
import Shop from 'pages/Page/Shop';
import Blog from 'pages/Page/Blog';
import About from 'pages/Page/About';
import Contact from 'pages/Page/Contact';
import AdminPage from 'pages/Page/AdminPage';
import ProductPage from 'pages/ProductsPages/ProductPage';
import TypePage from 'pages/ProductsPages/TypePage';
import BrandPage from 'pages/ProductsPages/BrandPage';
import LogIn from 'pages/Page/LogIn';
import Registraishen from 'pages/Page/Registraishen';

function App() {
    const user = useSelector(store => store.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user.id === -1) {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(refreshToken(token));
        }
        }
    }, [user]);

    const isAdmin = user.isAdmin;

    const PrivateRoute = ({ path, element }) => {
        if (isAdmin) {
            return <Route path={path} element={element} />;
        } else {
            return <Navigate to="/login" />;
        }
    };

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/registraishen" element={<Registraishen />} />

            <PrivateRoute path="/admin" element={<AdminPage />} />
            <PrivateRoute path="/admin/ProductPage" element={<ProductPage />} />
            <PrivateRoute path="/admin/TypePage" element={<TypePage />} />
            <PrivateRoute path="/admin/BrandPage" element={<BrandPage />} />

        </Routes>
    );
}

export default App;
*/
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

import {Routes,Route, Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshToken } from 'store/features/userSlice';


function App() {
    const user = useSelector((store)=> store.userReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(user.id == -1){
            const token = localStorage.getItem("token") 
            if(token){
                dispatch(refreshToken(token))
            }
        }
    },[user])


    //user.role => USER,ADMIN

    //Реализовать несколько ретернов
    //Отдельно для USER все роуты кроме /admin ...
    //Отдельно для ADMIN все роуты


    return (
        <Routes>
            <Route path="/" element={ <Main/> }/>
            <Route path="*" element={ <ErrorPage/> }/>

            <Route path="/shop" element={ <Shop /> }/>
            <Route path="/blog" element={ <Blog /> }/>
            <Route path="/about" element={ <About /> }/>
            <Route path="/contact" element={ <Contact /> }/>

            {
                user.role == "ADMIN" ?
                <> 
                    <Route path='/admin' element={ <AdminPage />} />
                    <Route path='admin/ProductPage' element={ <ProductPage />} />
                    <Route path='admin/TypePage' element={ <TypePage />} />
                    <Route path='admin/BrandPage' element={ <BrandPage />} />
                </>:
                <></>
            }
            
            <Route path="/login" element={ <LogIn/> }/>
            <Route path="/registraishen" element={ <Registraishen/> }/>
            
        </Routes>
    );
}

export default App;