import React, {useState} from 'react'
import s from './Header.module.css'
import { useLocation, useNavigate } from 'react-router-dom'


const Header = () => {

    const [inputValue, setInputValue] = useState('')

    let submitValue = ''

    const location = useLocation()

    const navigate = useNavigate()

    const onFormSubmit = (e) => {
        e.preventDefault();
        submitValue = inputValue
        setInputValue('')
        return navigate(`${location.pathname}?q=${submitValue}`) 
    }

    window.pname = location.pathname

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