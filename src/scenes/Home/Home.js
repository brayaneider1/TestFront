import React, { useState, useEffect, useCallback } from 'react';
import { BannerComponent } from '../../components/ContentComponents/BannerComponent';
import { Header } from '../../components/ContentComponents/Header/Header';
import hamburguerImage from '../../assets/img/hamburguer.svg'
import { FiChevronDown, FiClock } from 'react-icons/fi'
import { ProductsSection } from '../../components/ContentComponents/ProductsSection';
import { CategorySection } from '../../components/ContentComponents/CategorySection';
import { Head } from '../../components/SideComponents/Head';
import { Articles } from '../../components/SideComponents/Articles';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../common/utils/firebase";
import { Loading } from '../../components/Loading/Loading';



export const Home = () => {
  const [name, setName] = useState()

  const [user, loading] = useAuthState(auth);
  const fetchUserName = useCallback(async() => {
     
      try {
        const query = await db
          .collection("users")
          .where("uid", "==", user?.uid)
          .get();
        const data = await query.docs[0].data();
        setName(data.name);

      } catch (err) {
        console.error(err);
      }
    

  },[user])

  useEffect(() => {
    if (loading) return;
    if (!user) return;
    fetchUserName();
  }, [fetchUserName, user, loading]);




  const [menu, setMenu] = useState(true)
  return (
    <div className="container__lg">
      <div className="home">
        <div style={menu === true ? { flex: "0.7" } : null} className="home__content">
          <Header menu={menu} setMenu={setMenu} />
          <BannerComponent />
          <div className="head__restaurant" >
            <span className="title" > Restaurants <img alt="hamburguer" src={hamburguerImage} /></span>
            <button><FiClock />Delivery:<b>Now</b> <FiChevronDown />  </button>
          </div>
          <CategorySection menu={menu} />
          <ProductsSection menu={menu} />
        </div>
        {menu === true &&
          <div className="home__side">
            <Head name={name} user={user} logout={logout} menu={menu} setMenu={setMenu} />
            <Articles />
          </div>
        }
      </div>
      <Loading visible={loading} />
    </div>
  )
}