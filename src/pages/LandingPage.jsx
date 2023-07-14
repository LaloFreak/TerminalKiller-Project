import s from './css/LandingPage.module.css'
import { ConnectedApps } from '../components/ConnectedApps'
import apps from '../middlewares/misc/api.json'
import { Welcome } from '../components/Welcome'

export const LandingPage = () => {
    return (
        <div className={s.contLandingPage}>
            <Welcome/>
            <ConnectedApps apps={apps.apps}/>
        </div>
    )
}