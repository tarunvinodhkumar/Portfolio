// import classes from './Home.module.scss'
// import { motion } from 'framer-motion'
// import { useNavigate } from 'react-router-dom'
// import {
//   filmAnimation,
//   backWords,
//   h3Animation,
//   opacityPage,
//   h2anim,
//   xAnimNeg,
//   xAnimPos,
// } from '../../Animations/Animations'
// import Footer from '../../components/Footer/Footer'
// import { Button } from '../../components/Buttons/Button'
// import { Links } from '../../components/Links/Links'

// const Home = () => {
//   const navigate = useNavigate()
//   return (
//     <>
//       <motion.main
//         variants={opacityPage}
//         animate='show'
//         exit='hide'
//         className={classes.hero}
//       >
//         <section className={classes.hero_wrapper}>
//           <div className={classes.hero_text}>
//             <motion.h1
//               variants={xAnimNeg}
//               animate='show'
//               exit='hide'
//               className={classes.hero_title}
//             >
//               Hi! I'm{' '}
//               <motion.span variants={filmAnimation} animate='show' exit='hide'>
//                 Tarun Vinodh Kumar
//               </motion.span>
//             </motion.h1>
//             <motion.h2
//               variants={h2anim}
//               animate='show'
//               exit='hide'
//               className={classes.hero_description}
//             >
//               Full-stack Developer
//             </motion.h2>
//             <motion.p
//               variants={xAnimPos}
//               animate='show'
//               exit='hide'
//               className={classes.hero_message}
//             >
//               Crafting seamless digital experiences from code to cloud – bringing your ideas to life with full-stack finesse.
//             </motion.p>
            
      
//             <motion.a
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   exit={{ opacity: 0, scale: 0 }}
//                   className={classes.buttonLink}
//                   href='./images/about/TarunVinodhKumar-CV.pdf'
//                   download
//                 >
//                   <div>
//                     Download CV
//                   </div>
//                 </motion.a>
//           </div>

//           {/* links  */}
//           <motion.div
//             variants={h3Animation}
//             animate='show'
//             exit='hide'
//             className={classes.hero_links}
//           >
//             <Links />
//           </motion.div>
//         </section>
//         <motion.section
//           variants={backWords}
//           animate='show'
//           className={classes.background_text}
//         >
//           <h2>FULL</h2>
//           <h2>STACK</h2>
//         </motion.section>
//       </motion.main>
//     </>
//   )
// }

// export default Home


import classes from './Home.module.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  filmAnimation,
  backWords,
  h3Animation,
  opacityPage,
  h2anim,
  xAnimNeg,
  xAnimPos,
} from '../../Animations/Animations'
import Footer from '../../components/Footer/Footer'
import { Button } from '../../components/Buttons/Button'
import { Links } from '../../components/Links/Links'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <motion.main
        variants={opacityPage}
        animate='show'
        exit='hide'
        className={classes.hero}
      >
        <section className={classes.hero_wrapper}>
          <div className={classes.hero_text}>
            <motion.h1
              variants={xAnimNeg}
              animate='show'
              exit='hide'
              className={classes.hero_title}
            >
              Hi! I'm{' '}
              <motion.span variants={filmAnimation} animate='show' exit='hide'>
                Tarun Vinodh Kumar
              </motion.span>
            </motion.h1>
            <motion.h2
              variants={h2anim}
              animate='show'
              exit='hide'
              className={classes.hero_description}
            >
              Full-stack Developer
            </motion.h2>
            <motion.p
              variants={xAnimPos}
              animate='show'
              exit='hide'
              className={classes.hero_message}
            >
              Crafting seamless digital experiences from code to cloud – bringing your ideas to life with full-stack finesse.
            </motion.p>

            {/* Button Container */}
            <div className={classes.buttonContainer}>
              {/* Contact Me Button */}
              <Button
                onClick={() => navigate('/contact')}
                type='button'
                className={classes.buttonLink}
              >
                Contact Me
              </Button>

              {/* Download CV Button */}
              <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, scale: 0 }}
                className={classes.buttonLink}
                href='./images/about/TarunVinodhKumar-CV.pdf'
                download
              >
                <div>
                  Download CV
                </div>
              </motion.a>
            </div>
          </div>

          {/* links  */}
          <motion.div
            variants={h3Animation}
            animate='show'
            exit='hide'
            className={classes.hero_links}
          >
            <Links />
          </motion.div>
        </section>
        <motion.section
          variants={backWords}
          animate='show'
          className={classes.background_text}
        >
          <h2>FULL</h2>
          <h2>STACK</h2>
        </motion.section>
      </motion.main>
    </>
  )
}

export default Home
