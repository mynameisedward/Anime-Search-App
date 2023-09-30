import React, { useEffect, useState } from 'react'
import s from './Main.module.css'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Main = (props) => {

    
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q')

    const[items, setItems] =  useState([])
    const [isLoading, setIsLoading] = useState(true)

    const skeletonRenderArr = []
    for(let i = 0; i <= 10; i ++) skeletonRenderArr.push(i)


    const renderTopItems = (name) => {
        setIsLoading(true)
        axios.get(`https://api.jikan.moe/v4/top/${name}`)
            .then(response => {
                console.log(response)
                setItems(response.data.data)
                setIsLoading(false)
        })
    }
    
    

    useEffect(() => {
        if(q) {
            setItems([])
            setIsLoading(true)
            location.pathname == '/anime' ?
                axios.get(`https://api.jikan.moe/v4/anime?q=${q}&rating=pg13`) 
                    .then(response => {
                        setItems(response.data.data) 
                        setIsLoading(false)
                    }):
                axios.get(`https://api.jikan.moe/v4/manga?q=${q}&sfw=true`) 
                    .then(response => {
                        setItems(response.data.data)
                        setIsLoading(false)
                    })
        } 
        else if(location.pathname == '/anime') {
            setItems([])
            renderTopItems('anime')
        } 
        else if(location.pathname == '/manga') {
            setItems([])
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
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    
                    <ul className={s.list}>
                        {!isLoading && items.map(item => <li className={s.item} key={item.url}> 
                            <img alt='Anime Cover' src={item.images.webp.large_image_url} className={s.animeCover} /> 
                        </li>)}
                        {isLoading && skeletonRenderArr.map(item => <Skeleton width={200} height={312}/>)}
                    </ul>
                    
            </SkeletonTheme>
        </div>
    )
}

export default Main