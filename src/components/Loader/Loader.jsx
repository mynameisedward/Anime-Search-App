import React from 'react'
import s from './Loader.module.css'
import loader from '../../assets/loader.gif'



const Loader = () => {
  return (
    <div className={s.loader}>
        <img src={loader} alt="" />
    </div>
  )
}


export default Loader