import s from './css/ConnectedApps.module.css'
import { RenderDriveImg } from '../functions/RenderDriveImages'
import { motion } from 'framer-motion'

export const ConnectedApps = (props) => {
  const { apps } = props
  return (
    <div className={s.bgCanvas}>
      <div className={s.divTitle}>
        <div className={s.contApps}>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: false}}
            transition={{duration: 1}}
            >
            <h1 style={{color: "white", fontFamily: "Helvetica", fontSize:"45px"}}>Aplicaciones Conectadas</h1>
          </motion.div>
            <ul className={s.listPages}>
              {
                apps?.map((e, index)=>{
                  console.log(e)
                  return(
                    <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: false}}
                    transition={{duration: 1.5}}
                    >
                    <li className={s.pagesIcon} key={`app${index}`}>
                      <a rel="noreferrer" target='_blank' href={e.url}>
                        <img src={RenderDriveImg(e.idImg)} alt={e.name} width="120px" />
                      </a>
                    </li>
                  </motion.div>
                  )
                })
              }
            </ul>
          <h2 style={{color: "white", fontFamily: "Helvetica", fontSize:"15px"}}>Aplicaciones interactivas, multimedia, E-commerce y mucho más...</h2>
        </div>
      </div>
    </div>
  )
}