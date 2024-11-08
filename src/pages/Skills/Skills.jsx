import classes from './Skills.module.scss'
import Webs from '../../components/SkillsWeb/Webs'
import Designs from '../../components/SkillsWeb/Designs'
import { motion } from 'framer-motion'
import {
  backWords,
  h3Animation,
  messageAnimation,
  opacityPage,
  paragraphs,
  work,
} from '../../Animations/Animations'
import { Titlepage } from '../../components/Titlepage/Titlepage'

const Skills = () => {
  return (
    <>
      <motion.main
        variants={opacityPage}
        animate="show"
        exit="hide"
        className={classes.hero_page_wrapper}
        transition={{ duration: 2 }} // Increase the duration here for a slower effect
      >
        <section className={classes.heropage}>
          <div className={classes.heropage_content}>
            <div className={classes.heropage_content_wrapper}>
              <Titlepage text={'Skills'} />
              <div className={classes.heropage_message}>
                <motion.p
                  variants={messageAnimation}
                  animate="show"
                  exit="hide"
                  transition={{ duration: 1.5 }} // Set a slower transition for the text
                >
                  This is my go-to set of technologies, empowering me to craft high-quality web applications as a full-stack developer.
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={h3Animation}
              animate="show"
              exit="hide"
              className={classes.heropage_links}
              transition={{ duration: 1.5 }} // Slower animation for h3 elements
            >
            </motion.div>
          </div>

          <motion.div
            variants={paragraphs}
            animate="show"
            exit="hide"
            className={classes.heropage_work}
            transition={{ duration: 1.8 }} // Slow animation for paragraphs
          >
            <div className={classes.heropage_line}></div>
            <motion.p variants={work} animate="show" exit="hide" transition={{ duration: 1.8 }}>
              Development
            </motion.p>
            <div className={classes.heropage_line}></div>
          </motion.div>
          <Webs />

          <motion.div
            variants={paragraphs}
            animate="show"
            exit="hide"
            className={classes.heropage_work}
            transition={{ duration: 1.8 }} // Slow animation for paragraphs
          >
            <div className={classes.heropage_line}></div>
            <motion.p variants={work} animate="show" exit="hide" transition={{ duration: 1.8 }}>
              Tools
            </motion.p>
            <div className={classes.heropage_line}></div>
          </motion.div>
          <Designs />
        </section>
        <motion.section
          variants={backWords}
          animate="show"
          exit="hide"
          className={classes.background_text}
          transition={{ duration: 2.5 }} // Slow animation for background text
        >
          <h2>ski</h2>
          <h2>lls</h2>
        </motion.section>
      </motion.main>
    </>
  )
}

export default Skills
