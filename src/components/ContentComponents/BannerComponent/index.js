import React from 'react'
import { Link } from 'react-router-dom'
import headerImage from '../../../assets/img/headerimage.png'
import arrowLeft from '../../../assets/img/arrowLeft.svg'
import celebrateImage from '../../../assets/img/celebrate.png'
export const BannerComponent = () => {
  return (
    <div className="banner">
      <div className="banner__background" />
      <div className="banner__content">
        <div className="image">
          <img alt="headerImage" src={headerImage} />
        </div>
        <div className="description">
          <h3>$0 delivery for 30 days! <img alt="celebrateImage" src={celebrateImage} /> </h3>
          <p>$0 delivery fee for orders over $10 for 30 days </p>
          <Link to="/#" >Learn more <img alt="arrow" src={arrowLeft} /> </Link>
        </div>
      </div>
    </div>
  )
}
