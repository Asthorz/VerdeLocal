import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../Pagenormal/home'
import Pagelogin from '../Pagenormal/Login'
import Cadastro from '../Pagenormal/Cadastro'



export default function NaoAutenticados() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Login' element={<Pagelogin />} />
                <Route path='/Cadastre-se' element={<Cadastro />} />
                <Route path='*' element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}