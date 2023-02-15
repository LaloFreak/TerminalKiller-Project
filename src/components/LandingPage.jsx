import s from './css/LandingPage.module.css'
import laruinatvLogo from '../images/logo-estilizado-transparente.png'
import wogLogo from '../images/WoG-Icon.png'
import stLaRuinaTV from './css/LaRuinaTV.module.css'
import { Nav } from './Nav'
import { Section } from './Section'

export const LandingPage = () => {
    return (
        <div className={s.contLandingPage}>
            <div className={s.bgCanvas}>
                <Nav/>
                <div className={s.divTitle}>
                    <h1 style={{color: "white", fontFamily: "Bebas Neue", fontSize:"45px"}}>Te invitamos a conocer nuestros Proyectos</h1>
                    <h2 style={{color: "white", fontFamily: "Bebas Neue"}}>E-commerce, aplicaciones interactivas, multimedia y mucho más...</h2>
                </div>
                <ul className={s.listPages}>
                    <li className={s.pagesIcon}><img src={laruinatvLogo} alt="laruinatv" width="150px" /></li>
                    <li className={s.pagesIcon}><img src={wogLogo} alt="laruinatv" width="150px" /></li>
                    <li className={s.pagesIcon}><img src={laruinatvLogo} alt="laruinatv" width="150px" /></li>

                </ul>
                <Section
                    key={1}
                    style={stLaRuinaTV}
                    title="La Ruina TV | Plataforma Multimedia"
                />
            </div>
        </div>
    )
}