import React, { useEffect, useState } from 'react'
import s from './AboutTitle.module.css'
import { useLocation } from 'react-router'
import axios from 'axios'


const AboutTitle = () => {

    
    const [itemInfo, setItemInfo] = useState()    
    const location = useLocation()


    const splitPathname = location.pathname.split('/')
    const titleId = splitPathname[3]

    useEffect(() => {
        setItemInfo()
        axios.get(`https://api.jikan.moe/v4/${splitPathname[1]}/${titleId}`)
            .then(response => {
                setItemInfo(response.data.data)
            })
    }, [titleId])



    window.itemInfo = itemInfo

    // Картинка,  // Название, Название на японском, Когда выходит, Жанры, Продолжительность, Студии
    // ..............Краткий обзор 
    return (
        <div className={s.aboutTitle}>
            {itemInfo && 
                <>
                <div className={s.firstRow}>
                    <div className={s.imageDiv}>
                        { itemInfo && <img src={itemInfo.images.jpg.image_url} alt="Title cover image" className={s.image} /> }
                    </div>
                    <div className={s.info}>
                        <h1 className={s.title}>{itemInfo.title}</h1>
                        <ul className={s.list}>
                            <li className={s.item}>Оценка: <span>{itemInfo.score}</span></li>
                            <li className={s.item}>Количество эпизодов: <span>{itemInfo.episodes}</span></li>
                            {/* <li className={s.item}>Период выхода: <span>{itemInfo.aired.string ? itemInfo.aired.string : "something"}</span></li> */}
                            <li className={s.item}>Жанры: <span>{itemInfo.genres.map(genre => <span>{genre.name}, </span>)}</span></li>
                            <li className={s.item}>Продолжительность эпизода: <span>{itemInfo.duration}</span></li>
                            <li className={s.item}>Студии: <span>{itemInfo.studios.map(studio => <span>{studio.name}, </span>)}</span></li>
                        </ul>
                    </div>
                </div>
                <div className={s.synopsisDiv}>
                    <h3 className={s.synopsisTitle}>Описание</h3>
                    <p className={s.synopsis}>{itemInfo.synopsis}</p>
                </div>
                </>
            }
        </div>
    )
}

export default AboutTitle