import s from "./css/Nav.module.css"
import terminalkillerLogo from "../images/terminalkiller-logo.png"
import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <div className={s.refNav}>
            <section className={s.navSectionCont}>
                <div className={s.navCont}>
                    <div className={s.divNav}>
                        <ul className={s.ulNav}>
                            <Link to="/">
                                <img className={s.terminalkillerLogo} src={terminalkillerLogo} alt="Logo" height="80px" />
                            </Link>
                            <ul className={s.ulMenu}>
                                <li><Link to="/">Inicio</Link></li>
                                <li>
                                    <Link to="/about" rel="noreferrer">
                                        Quiénes somos
                                    </Link>
                                </li>
                                <li><a href="https://getexpert.netlify.app">GetExpert</a></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}