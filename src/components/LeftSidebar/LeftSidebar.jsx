import React, {useState} from 'react'
import s from './LeftSidebar.module.css'
import {Link} from 'react-router-dom'


const LeftSidebar = () => {

    const[numberOfActiveItem, setNumberOfActiveItem] = useState(1)



  return (
    <div className={s.LeftSidebar}>
        <ul className={s.list}>
          <Link to={'/anime'}>
            <li className={s.item}>Anime</li>
          </Link>
          <Link to={'/manga'}>
            <li className={s.item}>Manga</li>
          </Link>
        </ul>
    </div>
  )
}

export default LeftSidebar