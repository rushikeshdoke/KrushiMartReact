import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import KrushiHome from './homeKrushi/KrushiHome'
import Header from './Header/Header'
import Footer from './footer/Footer'
import SingUp from './singUp/SingUp'
import SingUpFrom from './singupFrom.jsx/SingUpFrom'
import LogIn from './logIn/LogIn'

export default function Routess() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<KrushiHome />}> </Route>
                <Route path="/singup" element={<SingUp />}> </Route>
                <Route path="/login" element={<LogIn />}> </Route>
                <Route path="/singupfrom" element={<SingUpFrom />}> </Route>
            </Routes>
            <Footer />
        </div>
    )
}
