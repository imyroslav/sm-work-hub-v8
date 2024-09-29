import Home from "../Home/Home"
import { Routes, Route, NavLink } from "react-router-dom";
import Vacancy from "../Vacancy/Vacancy";
import css from './App.module.css';

export default function App() {

    return (
        <>
            
            <nav className={css.nav}>
        <NavLink to="/">
          Домашняя страница
        </NavLink>
        <NavLink to="/form">
          Заполнить анкету
        </NavLink>
        <NavLink to="/vacancy">
          Посмотреть вакансии
        </NavLink>
            </nav>
            

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vacancy" element={<Vacancy />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            
    
            
        </>
    )    
        
}