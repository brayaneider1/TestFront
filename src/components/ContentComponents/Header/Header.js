import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import searchIcon from '../../../assets/img/search.svg'
 export const Header = ({menu,setMenu}) => {
  return (
    <div className="header">
      <HiMenuAlt4  onClick={()=>setMenu(!menu)} />
      <span>Chukwudi</span>
      <div className="header__search">
        <img alt="search" src={searchIcon}/>
        <input placeholder="Search" />
      </div>

    </div>
  )
}
