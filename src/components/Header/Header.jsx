import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <div className={s.header}>
            <h1 className={s.logo}>Anime Search App</h1>
            <input type="text" className={s.input} placeholder='What are we looking for?' />
    </div>
  )
}

export default Header