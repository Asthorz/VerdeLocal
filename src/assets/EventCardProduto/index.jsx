import React from 'react';
import { ProductListe } from './EventListProduto';
import { Listeproduto, Liste, Imgproduto, Quadradolist } from './styles';

export default function Cardproduto() {
  return (
    <div>
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
    </div>
  );
}
