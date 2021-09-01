import React from 'react'
import { dummy } from '../../../common/dummy/DummyCart'
import { Popover } from 'antd';
import UserIcon from '../../../assets/img/user.svg'
import { Link } from 'react-router-dom';
import { BiLogOutCircle } from 'react-icons/bi'
import { AiOutlineRight } from 'react-icons/ai'

export const Head = ({ user, logout, name,menu,setMenu }) => {
  const content = (
    <div>
      <p className="font-bold text-md my-2">{name && name}</p>
      <p onClick={logout} className="cursor-pointer  flex text-md font-weight-400 items-center" ><BiLogOutCircle className="text-yellow mr-2" /> Cerrar Sesión</p>
    </div>
  );


  return (
    <div className="head">
      <AiOutlineRight onClick={() => setMenu(!menu)} />


      {user ?
        <Popover content={content} title="">
          <img alt="user" src={UserIcon} />
        </Popover> : <div className="head__auth">
          <Link to="/login" >Iniciar</Link>
          <Link to="/register" >Registro</Link>
        </div>

      }
      <div className="dot">
        {dummy.cart.length}

      </div>
    </div>
  )
}
