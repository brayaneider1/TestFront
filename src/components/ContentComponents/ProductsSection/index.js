import React from 'react'
import ProductsDummy from '../../../common/dummy/products.json'
import { AiOutlineStar } from 'react-icons/ai'
import AliceCarousel from 'react-alice-carousel';

export const ProductsSection = ({ menu }) => {



  const items = ProductsDummy.map((i) => (
    <div key={i.id} className="box" >
      <div className="box__card">
        <div className="illustration">
          <img alt={i.name} src={i.image} />
          <div className="timer">
            <span>{i.time}
              <p>&nbsp;min</p>
            </span>
          </div>
        </div>
        <span className="name">{i.name}</span>
        <div className="description">
          <AiOutlineStar />
          <p className="qualification">
            {i.qualification}</p>
          <p className="price" >$ {i.price} </p></div>
      </div>
    </div>)
  )


  return (
    <div className={`products ${!menu? 'products--lg': 'products--xs'}`}>

      <AliceCarousel responsive={{ 0: { items: 0 }, 500: { items: 2 }, 1000: { items: 3 } }} disableButtonsControls={true} disableDotsControls={true} items={items} />

    </div>
  )
}
