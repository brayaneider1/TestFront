import React from 'react'
import Slider from "react-slick";
import ProductsDummy from '../../../common/dummy/products.json'
import { AiOutlineStar } from 'react-icons/ai'
export const ProductsSection = ({menu}) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ] 
  };

  return (
    <div  style={menu?{width:'calc(70vw - 80px)'}:null}  className="products">

      <Slider {...settings}>
        {ProductsDummy.map((i) => (
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
        )}
      </Slider>
    </div>
  )
}
