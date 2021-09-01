import React from 'react';
import { useSelector } from 'react-redux'
import { Private } from '../scenes/Layout/Private/Private'
import { Public } from '../scenes/Layout/Public/Public'

export const App = () => {
  
  const { authentication } = useSelector(state => state.auth)

  return (
    <>
      {!authentication && <Public />}
      { authentication && <Private/>}
    </>
  );
}
