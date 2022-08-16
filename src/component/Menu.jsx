import { Routes, Route } from 'react-router-dom'
import { All } from './pages/All'
import { Css } from './pages/Css'
import { Html } from './pages/Html'
import { JavaScript } from './pages/JavaScript'

export const Menu = () => {
    


    return (
            <Routes>
                <Route path='/'  element={<All/>} />
                <Route path='/html' element={<Html/>} />
                <Route path='/css'  element={<Css/>} />
                <Route path='/javascript' element={<JavaScript/>}/>
            </Routes>
    )
}