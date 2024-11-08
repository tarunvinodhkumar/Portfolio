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
            >
            </motion.div>
          </div>

          <motion.div
            variants={paragraphs}
            animate="show"
            exit="hide"
            className={classes.heropage_work}
          >
            <div className={classes.heropage_line}></div>
            <motion.p variants={work} animate="show" exit="hide">
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
          >
            <div className={classes.heropage_line}></div>
            <motion.p variants={work} animate="show" exit="hide">
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
        >
          <h2>ski</h2>
          <h2>lls</h2>
        </motion.section>
      </motion.main>
    </>
  )
}

export default Skills
