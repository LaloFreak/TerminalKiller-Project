import s from './css/LandingPage.module.css'
import laruinatvLogo from '../images/logo-estilizado-transparente.png'
import wogLogo from '../images/WoG-Icon.png'
import { Nav } from './Nav'
import { Section } from './Section'
import stLaRuinaTV from './css/LaRuinaTV.module.css'

export const LandingPage = () => {
    return (
        <div className={s.contLandingPage}>
            <div className={s.bgCanvas}>
                <Nav/>
                <ul className={s.listPages}>
                    <li className={s.pagesIcon}><img src={laruinatvLogo} alt="laruinatv" width="200px" /></li>
                    <li className={s.pagesIcon}><img src={wogLogo} alt="laruinatv" width="200px" /></li>
                    <li className={s.pagesIcon}><img src={laruinatvLogo} alt="laruinatv" width="200px" /></li>
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