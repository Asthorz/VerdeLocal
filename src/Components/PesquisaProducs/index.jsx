
import { InputSeach, Seachbox } from './styles'
import { IoSearch } from "react-icons/io5";

const PesquisaProduct = ()=> {
  return (
    <Seachbox >
        <IoSearch className='mr-2'/>
      <InputSeach type="text" placeholder='Buscar'/>
    </Seachbox>
  )
}

export default PesquisaProduct
