import React, { useEffect } from 'react'
import BgBlue from '../../../assets/img/blueGradient.jpg'
import { FcGoogle } from 'react-icons/fc'
import { AiFillHome } from 'react-icons/ai'
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../../common/utils/firebase";
import { Loading } from '../../../components/Loading/Loading';

export const Login = () => {
  const [user, loading] = useAuthState(auth);
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) history.replace("/");
  }, [user, loading,history]);


  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
  }

  return (
    <div style={{ backgroundImage: `url(${BgBlue})` }} className="login">
      <div className="login__content">

        <h1>¡Bienvenido de nuevo!</h1>
        <p>Inicia sesión </p>

        <div  onClick={signInWithGoogle}  className="flex bg-white p-2 my-3 cursor-pointer rounded-lg text-md text-black items-center shadow-lg" >
          <FcGoogle className="mx-4" />
          Ingresar con Google
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <input type="email" placeholder="Correo electrónico" {...register("email", { required: true })} />
          {errors.email && <span>Debe llenar este campo</span>}
          <input type="password" placeholder="Contraseña" {...register("password", { required: true })} />
          {errors.password && <span>Debe llenar este campo</span>}
          <input type="submit" className="p-2 my-3  rounded-lg text-md text-black items-center shadow-lg" value="Entrar" />
        </form>

        ¿Aún no tienes una cuenta? <Link to="/register">Registrate</Link>

        <Link to="/" className="rounded-full text-gray-400 shadow-md mt-3 text-sm bg-gray-100 p-2">
          <AiFillHome />
        </Link>
      </div>
      <Loading visible={loading}/>
    </div>
  )
}
