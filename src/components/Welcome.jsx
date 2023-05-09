import s from "./css/Welcome.module.css"
import { motion } from "framer-motion"
import aiImg from "../images/ia-image.png"

export const Welcome = () => {
  return (
    <div className={s.welcomeCont}>
      <ul className={s.welcomeText}>
        <div className={s.textAlign}>
          <motion.div
            initial={{opacity:0, x:-15}}
            transition={{duration: 1.5}}
            animate={{opacity:1, x:0}}
          >
            <h2>¡Hola,</h2>
          </motion.div>
          <motion.div
            initial={{opacity:0, x:-15}}
            transition={{duration: 1.5, delay: .15}}
            animate={{opacity:1, x:0}}
          >
            <h1>Bienvenido/a!</h1>
          </motion.div>
          <motion.div
            initial={{opacity:0, x:-15}}
            transition={{duration: 1.5, delay: .3}}
            animate={{opacity:1, x:0}}
          >
            <h3>Únete a nuestra Cooperativa de Programadores</h3>
          </motion.div>
          <motion.div
            initial={{opacity:0, x:-15}}
            transition={{duration: 1.5, delay: .45}}
            animate={{opacity:1, x:0}}
          >
            <a href="http://ai-testing.terminalkiller.site/#/"><button className={s.buttonIA}>Visita nuestra IA en desarrollo</button></a>
            <button disabled className={s.buttonContact}>Contactar</button>
          </motion.div>
        </div>
        <div className={s.widthWrapper}>
          <div className={s.wrapper}>
            <div className={s.imageContainer}>
              <img className={s.aiImg} src={aiImg} alt="" />
            </div>
          </div>      
        </div>
      </ul>
    </div>
  )
}