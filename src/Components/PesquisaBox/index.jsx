
import { InputSeach, Seachbox } from './styles'
import { IoSearch } from "react-icons/io5";

const Pesquisa = ()=> {
  return (
    <Seachbox >
        <IoSearch className='mr-2'/>
      <InputSeach type="text" placeholder='Pesquisa'/>
    </Seachbox>
  )
}

export default Pesquisa
