import React from 'react'
import Slider from "react-slick";
import ProductsDummy from '../../../common/dummy/products.json'
export const ProductsSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="products">
      <Slider {...settings}>
        {ProductsDummy.map(i=>
          <div>
            {i.name}

          </div>
          )}
      </Slider>
    </div>
  )
}
