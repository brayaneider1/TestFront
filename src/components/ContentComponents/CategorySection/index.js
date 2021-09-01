import React, { useState } from 'react'
import CategoriesDummy from '../../../common/dummy/categories.json'
import AliceCarousel from 'react-alice-carousel';

export const CategorySection = ({ menu }) => {
  const [active, setActive] = useState()


  const items = CategoriesDummy.map((i) => (
    <div className="box" >
      <div key={i.id} onClick={() => handleActive(i.id)} className={`box__card ${active === i.id ? "active" : null}`}>
        <div className="illustration">
          <img alt={i.name} src={i.icon} />
        </div>
        <span className="name">{i.name}</span>
      </div>
    </div>)
  )



  const handleActive = (e) => {
    setActive(e)
  }

  return (
    <div className={`categories ${!menu? 'categories--lg': 'categories--xs'}`} >
      <AliceCarousel  responsive={{ 0: { items: 3 }, 500: { items: 5 }, 1000: { items: 8 } }}  disableButtonsControls={true} disableDotsControls={true} items={items}  />
    </div>
  )
}
