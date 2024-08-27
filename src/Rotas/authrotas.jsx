import { BrowserRouter, Routes, Route} from 'react-router-dom'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from '../page/Home'
import Headerdashboard from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Pagevendas from '../page/Venda'
import Marketplace from '../page/Markteple'
import CardVerTodos from '../page/PageCardTodos'
import Produto from '../page/Products'
import Financia from '../page/Financia'
import Configuracao from '../page/Configuracao'


function Authrotas() {
  

  return (
    <>
     <BrowserRouter>
     <Headerdashboard />
     <div className='main d-flex'>
      <div className='sidebarWrapper'>
      </div>
              <Sidebar/>

      <div className='content'>
      <Routes>
          <Route path='/'  element={<Dashboard/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Vendas'  element={<Pagevendas/>}/>
          <Route path='/Marketplace'  element={<Marketplace/>}/>
          <Route path='/Todos' element={<CardVerTodos/>}/>
          <Route path='/Produtos'  element={<Produto/>}/>
          <Route path='/Finanças' element={<Financia/>}/>
          <Route path='/Configuração' element={<Configuracao/>}/>
        </Routes>
      </div>
     </div>
        
     </BrowserRouter>
       
    </>
  )
}

export default Authrotas
