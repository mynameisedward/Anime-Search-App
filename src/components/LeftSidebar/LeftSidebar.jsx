import React, {useState} from 'react'
import s from './LeftSidebar.module.css'

const LeftSidebar = () => {

    const[numberOfActiveItem, setNumberOfActiveItem] = useState(1)



  return (
    <div className={s.LeftSidebar}>
        <ul className={s.list}>
            <li className={s.item}>Anime</li>
            <li className={s.item}>Manga</li>
        </ul>
    </div>
  )
}

export default LeftSidebar