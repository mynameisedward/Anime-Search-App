import React from 'react'
import s from './AboutWork.module.css'


const AboutWork = () => {
  return (
    <div className={s.RightSidebar}>
        <div className={s.backRectangle}></div>
        <div className={s.animeImg}></div>
        <div className={s.animeInfo}>
          <h3 className={s.animeName}>Anime Name</h3>
          <h4 className={s.animeGenre}>Genre</h4>
          <p className={s.animeSomeText}>text text text text text text text text text text </p>
          <p className={s.animeSomeText}>text text text text text text</p>
          <p className={s.animeSomeText}>text text text text text text text text text text </p>
          <p className={s.animeSomeText}>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
        </div>
    </div>
  )
}

export default AboutWork