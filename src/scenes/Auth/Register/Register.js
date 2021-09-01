import React, { useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillHome } from 'react-icons/ai'
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../../common/utils/firebase";
import { Loading } from '../../../components/Loading/Loading';

export const Register = () => {
  const [user, loading] = useAuthState(auth);
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading,history]);

  const onSubmit = data => {
    registerWithEmailAndPassword(data.name, data.email, data.password);
  };
  return (
    <div className="register">
      <div className="register__content">

        <h1>¡Nos alegra tu visita!</h1>
        <p>Registrate </p>

        <div onClick={signInWithGoogle} className="flex bg-white p-2 my-3 cursor-pointer rounded-lg text-md text-black items-center shadow-lg" >
          <FcGoogle className="mx-4" />
          Ingresar con Google
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <input type="text" placeholder="Nombre de usuario" {...register("name", { required: true })} />
          {errors.name && <span>Debe llenar este campo</span>}
          <input type="email" placeholder="Correo electrónico" {...register("email", { required: true })} />
          {errors.email && <span>Debe llenar este campo</span>}
          <input type="password" placeholder="Contraseña" {...register("password", { required: true })} />
          {errors.password && <span>Debe llenar este campo</span>}
          <input type="submit" className="p-2 my-3  rounded-lg text-md text-black items-center shadow-lg" value="Entrar" />
        </form>
        ¿Ya tienes una cuenta? <Link to="/login">Ingresar</Link>
        <Link to="/" className="rounded-full text-gray-400 shadow-md mt-3 text-sm bg-gray-100 p-2">
          <AiFillHome />
        </Link>
      </div>
      <Loading visible={loading}/>
    </div>
  )
}
