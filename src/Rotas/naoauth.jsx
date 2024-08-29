import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../Pagenormal/home'
import Pagelogin from '../Pagenormal/Login'
import Cadastro from '../Pagenormal/Cadastro'
import Footer from '../Components/footer'
import Ajuda from '../Pagenormal/Ajuda'



export default function NaoAutenticados() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Login' element={<Pagelogin />} />
                <Route path='/Cadastre-se' element={<Cadastro />} />
                <Route path='/Ajudar' element={<Ajuda />} />
                <Route path='*' element={<Inicio />} />
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}