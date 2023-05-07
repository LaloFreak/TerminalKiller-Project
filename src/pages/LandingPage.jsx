import s from './css/LandingPage.module.css'
import { Nav } from '../components/Nav'
import { ConnectedApps } from '../components/ConnectedApps'
import apps from '../middlewares/misc/api.json'
import { Welcome } from '../components/Welcome'

export const LandingPage = () => {
    return (
        <div className={s.contLandingPage}>
            <Nav/>
            <Welcome/>
            <ConnectedApps apps={apps.apps}/>
        </div>
    )
}