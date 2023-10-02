import React from 'react'
import s from './Header2.module.css'


const Header2 = () => {
  return (
    <div className={s.header2}>
        <div className={s.container}>
            <h3 className={s.title}>Anime Search App</h3>
        </div>
    </div>
  )
}

export default Header2