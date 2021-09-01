import React,{useState} from 'react'
import Slider from "react-slick";
import CategoriesDummy from '../../../common/dummy/categories.json'

export const CategorySection = ({menu}) => {
  const [active, setActive] = useState()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
     responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ] 
  };

const handleActive=(e)=>{
    setActive(e)
  

}

  return (
    <div style={menu?{width:'calc(70vw - 80px)'}:null} className="categories">
      <Slider {...settings}>
        {CategoriesDummy.map((i) => (
          <div className="box" >
            <div  key={i.id} onClick={()=>handleActive(i.id)} className={`box__card ${active===i.id?"active":null}`}>
              <div className="illustration">
                <img alt={i.name} src={i.icon} />
              </div>
              <span className="name">{i.name}</span>
            </div>
          </div>)
        )}
      </Slider>
    </div>
  )
}
