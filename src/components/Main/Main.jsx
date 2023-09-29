import React, { useEffect, useState } from 'react'
import s from './Main.module.css'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const Main = (props) => {

    
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q')

    const[items, setItems] =  useState([])

    const renderTopItems = (name) => {
        axios.get(`https://api.jikan.moe/v4/top/${name}`)
            .then(response => {
                console.log(response)
                setItems(response.data.data)
        })
    }
    
    

    useEffect(() => {
        if(q) {
            location.pathname == '/anime' ?
                axios.get(`https://api.jikan.moe/v4/anime?q=${q}&rating=pg13`) :
                axios.get(`https://api.jikan.moe/v4/manga?q=${q}&sfw=true`) 
            .then(response => {
                console.log(response)
                setItems(response.data.data)
        })
        } else if(location.pathname == '/anime') {
            renderTopItems('anime')
        } else if(location.pathname == '/manga') {
            renderTopItems('manga')
        }
    }, [window.location.href] )

    window.urll = window.location.href

    return (
        <div className={s.main}>
            {q ? 
                <h2 className={s.title}>Search {location.pathname}/ by query: {q}</h2> : 
                <h2 className={s.title}>{props.name}</h2>
            }
            <ul className={s.list}>
                {items.map(item => <li className={s.item} key={item.mal_id}> 
                    <img alt='Anime Cover' src={item.images.webp.large_image_url} className={s.animeCover} /> 
                </li>)}
            </ul>
        </div>
    )
}

export default Main