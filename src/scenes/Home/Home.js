import React from 'react';
import { BannerComponent } from '../../components/ContentComponents/BannerComponent';
import { Header } from '../../components/ContentComponents/Header/Header';
import hamburguerImage from '../../assets/img/hamburguer.svg'
import { FiChevronDown, FiClock } from 'react-icons/fi'
import { ProductsSection } from '../../components/ContentComponents/ProductsSection';
export const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <Header />
        <BannerComponent />
        <div className="head__restaurant" >
          <span className="title" > Restaurants <img alt="hamburguer" src={hamburguerImage} /></span>
          <button><FiClock />Delivery:<b>Now</b> <FiChevronDown />  </button>
        </div>
        <ProductsSection/>
      </div>
      <div className="home__side">
        adadF
      </div>
    </div>
  )
}