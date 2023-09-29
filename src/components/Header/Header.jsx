import React, {useState} from 'react'
import s from './Header.module.css'
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const [inputValue, setInputValue] = useState('')


    const navigate = useNavigate()

    const onFormSubmit = (e) => {
        e.preventDefault();
        return navigate(`/anime?q=${inputValue}`)
    }

    return (
        <div className={s.header}>
            <h1 className={s.logo}>Anime Search App</h1>
            <form action="" onSubmit={onFormSubmit}>
                <input type="text" className={s.input} value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} placeholder='What are we looking for?' />
            </form>
        </div>
    )
}

export default Header