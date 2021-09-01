import React, { useState } from 'react'
import FaceSunglass from '../../../assets/img/sunglasses.svg'
import { dummy } from '../../../common/dummy/DummyCart'
import { FiClock } from 'react-icons/fi'
import { FaCarSide } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
export const Articles = () => {
  const [quantityPerson, setquantityPerson] = useState(1)

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const onHandlePlus = () => {
    setquantityPerson(quantityPerson + 1)
  }

  const onHandleMinus = () => {
    if (quantityPerson > 0) {
      setquantityPerson(quantityPerson + -1)
    }
  }

  const plus = () => {
    let total = 0;
    dummy.cart.map(i =>
      total = total + parseFloat(i.price)
    )
    return total
  }
  return (
    <div className="articles">
      <span className="text-emoji"> My <img alt="face sunglass" src={FaceSunglass} /> </span>
      <span className="text-order"> Order</span>
      <div className="articles__card">
        <div className="content">
          <div className="flex flex-row justify-between my-2.5 ">
            <p>625 ST Marks Ave</p>
            <span>Edit</span>
          </div>
          <div className="flex justify-between items-center  ">
            <div className="content-clock" >
              <FiClock />
            </div>
            <p>35 min</p>
            <span>Edit</span>
          </div>
        </div>
      </div>
      <div className="articles__products">
        {dummy.cart.map(i =>
          <div className="item">
            <img alt={i.name} src={i.image} />
            <span className="quantity">{i.quantity}  X </span>
            <span className="name"> {i.name} </span>
            <span className="price">  {formatter.format(i.price)} </span>
          </div>
        )}
        <div className="item">
          <div className="delivery-img"><FaCarSide /></div>
          <span className="delivery">Delivery</span>
          <span className="price">  {formatter.format(0.00)} </span>
        </div>
      </div>
      <div className="articles__total">
        <span className="total-text">Total : </span>
        <span className="value">{formatter.format(plus())}</span>
      </div>
      <div className="articles__check">
        <div className="persons">
          Persons
          <div className="counter">
            <span onClick={onHandleMinus}>-</span>
            <p>{quantityPerson}</p>
            <span onClick={onHandlePlus}>+</span>
          </div>
        </div>
        <div className="check">
          Checkout <BsArrowRight/>
        </div>
      </div>
    </div>
  )
}
