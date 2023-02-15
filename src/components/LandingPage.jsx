import s from './css/LandingPage.module.css'
import laruinatvLogo from '../images/logo-estilizado-transparente.png'
import wogLogo from '../images/WoG-Icon.png'
import { Nav } from './Nav'

export const LandingPage = () => {
    return (
        <div className={s.contLandingPage}>
            <div className={s.bgCanvas}>
                <Nav/>
                <div className={s.divTitle}>
                    <h1 style={{color: "white", fontFamily: "Bebas Neue", fontSize:"45px"}}>Aplicaciones Conectadas</h1>
                    <ul className={s.listPages}>
                        <li className={s.pagesIcon}><img src={laruinatvLogo} alt="laruinatv" width="120px" /></li>
                        <li className={s.pagesIcon}><img src={wogLogo} alt="laruinatv" width="120px" /></li>
                        {/* <li className={s.pagesIcon}><img src={laruinatvLogo} alt="laruinatv" width="120px" /></li> */}
                    </ul>
                    <h2 style={{color: "white", fontFamily: "Bebas Neue", fontSize:"15px"}}> Aplicaciones interactivas, multimedia, E-commerce y mucho más...</h2>
                </div>
            </div>
        </div>
    )
}