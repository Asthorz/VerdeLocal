
import React from 'react';
import { ProductListe } from '../../assets/EventCardProduto/EventListProduto';
import { Listeproduto, Liste, Imgproduto, Quadradolist } from './styles';
export default function CardVerTodos() {
  return (
    <div> <div>
    <Listeproduto>
      {ProductListe.map((item) => (
        <Quadradolist key={item.id}>
          <Liste>
            <Imgproduto src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <span>{item.describe}</span>
            <h3>Recebe até <span className='Darngervalorproduto'>{item.preco}</span></h3>
          </Liste>
        </Quadradolist>
      ))}
    </Listeproduto>
    <Listeproduto>
      {ProductListe.map((item) => (
        <Quadradolist key={item.id}>
          <Liste>
            <Imgproduto src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <span>{item.describe}</span>
            <h3>Recebe até <span className='Darngervalorproduto'>{item.preco}</span></h3>
          </Liste>
        </Quadradolist>
      ))}
    </Listeproduto>
  </div></div>
  )
}
