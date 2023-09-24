import React, {useState} from 'react'
import s from './Main.module.css'



const Main = () => {

    const[numberOfItems, setNumberOfItems] = useState(32)
    
    const arr = []


    for(let i = 1; i <= numberOfItems; i++) {
        arr.push(i)
    }
    
    console.log(arr)

  return (
    <div className={s.main}>
        <h2 className={s.title}>Trending</h2>
        <ul className={s.list}>
            {arr.map(item => <li className={s.item} key={item}> </li>)}
        </ul>
    </div>
  )
}

export default Main