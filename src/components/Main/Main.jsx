import React, { useEffect, useState } from 'react'
import s from './Main.module.css'
import { useLocation } from 'react-router'
import axios from 'axios'


const Main = (props) => {


    const location = useLocation()

    const[items, setItems] =  useState([])

    useEffect(() => {
        if(location.pathname == '/anime') {
            axios.get('https://api.jikan.moe/v4/top/anime')
            .then(response => {
                console.log(response)
                setItems(response.data.data)
            })
            console.log('рендерим аниме')
        } else if(location.pathname == '/manga') {
            axios.get('https://api.jikan.moe/v4/top/manga')
            .then(response => {
                console.log(response)
                setItems(response.data.data)
            })
            console.log('рендерим мангу')
        }
    }, location.pathname)


    return (
        <div className={s.main}>
            <h2 className={s.title}>{props.name}</h2>
            <ul className={s.list}>
                {items.map(item => <li className={s.item} key={item}> 
                    <img alt='Anime Cover' src={item.images.jpg.large_image_url} className={s.animeCover} />
                </li>)}
            </ul>
        </div>
    )
}

export default Main