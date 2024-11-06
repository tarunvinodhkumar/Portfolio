// export default About
import classes from './About.module.scss'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'
import {
  h3Animation,
  messageAnimation,
  paragraphs,
  work,
  backWords,
  opacityPage,
  scaleAnim,
  xAnimPos50,
} from '../../Animations/Animations'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Buttons/Button'
import { Titlepage } from '../../components/Titlepage/Titlepage'
import { Links } from '../../components/Links/Links'
import BackToTop from '../../components/BackToTop/BackToTop'

const About = () => {
  const navigate = useNavigate()

  // Slow scroll transition with full hidden until scrolled into view
  const slowScrollTransition = { duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 };

  return (
    <>
      <motion.main
        variants={opacityPage}
        initial="hidden"
        animate='show'
        exit='hide'
        className={classes.hero_page_wrapper}
      >
        <section className={classes.heropage}>
          <div className={classes.heropage_content}>
            <div className={classes.heropage_content_wrapper}>
              <Titlepage text={'About'} />
              <motion.div
                className={classes.heropage_message}
                variants={{
                  hidden: { opacity: 0, y: 50 },    // Initial hidden state
                  show: { opacity: 1, y: 0 }         // Show with slide-in effect
                }}
                initial="hidden"
                whileInView="show"
                exit="hide"
                viewport={{ once: true, amount: 1 }}  // Trigger when fully visible
                transition={slowScrollTransition}
              >
                <motion.p>
                  Full-stack Developer based in Canada.
                </motion.p>
              </motion.div>
            </div>

            {/* Links Section */}
            <motion.div
              variants={h3Animation}
              initial="hidden"
              whileInView="show"
              exit="hide"
              viewport={{ once: true, amount: 1 }}
              transition={slowScrollTransition}
              className={classes.heropage_links}
            >
            </motion.div>
          </div>

          {/* About Text Content */}
          <motion.div
            className={classes.heropage_txt_container}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="show"
            exit="hide"
            viewport={{ once: true, amount: 1 }}
            transition={slowScrollTransition}
          >
            <div className={classes.heropage_txt_container_text}>
              <p>
                Hi, I'm Tarun Vinodh Kumar, a Full-Stack Developer with a Computer Science background and hands-on expertise in creating user-centric applications. With a strong foundation in React, Node.js, and data visualization, I've built impactful projects like a Depression Detection System and a Movie Recommendation Engine. Experienced in both front-end and back-end development, I thrive on using technologies like Python, SQL, and cloud platforms to deliver scalable solutions. Outside of tech, I'm passionate about gaming and exploring the latest advancements in AI.
              </p>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                show: { opacity: 1, x: 0 }
              }}
              initial="hidden"
              whileInView="show"
              exit="hide"
              viewport={{ once: true, amount: 1 }}
              transition={slowScrollTransition}
              className={classes.heropage_txt_container_photo}
            >
              <img
                src={process.env.PUBLIC_URL + `/images/about/processed_image.png`}
                alt='me'
              />
            </motion.div>
          </motion.div>

          {/* Work Section with Improved Animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 }, // Start with reduced scale and invisible
              show: { opacity: 1, scale: 1 }       // Fade in with a subtle scale-up
            }}
            initial="hidden"
            whileInView="show"
            exit="hide"
            viewport={{ once: true, amount: 1 }}    // Trigger when fully in view
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }} // Smooth and slow
            className={classes.heropage_work}
          >
            <div className={classes.heropage_line}></div>
            <motion.p>
              Excited to bring fresh ideas and energy to your team. Let's build something great together!
            </motion.p>
            <div className={classes.heropage_line}></div>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            variants={h3Animation}
            initial="hidden"
            whileInView="show"
            exit="hide"
            viewport={{ once: true, amount: 1 }}
            transition={slowScrollTransition}
            className={classes.heropage_links_bottom}
          >
            <Links
              onClick={() =>
                (window.location = 'mailto:meneghettimarcos@outlook.com')
              }
            >
              <img
                src={process.env.PUBLIC_URL + `/images/links/email.png`}
                alt='email'
              />
            </Links>
          </motion.div>
        </section>

        {/* Background Text */}
        <motion.section
          variants={backWords}
          initial="hidden"
          whileInView="show"
          exit="hide"
          viewport={{ once: true, amount: 1 }}
          transition={slowScrollTransition}
          className={classes.background_text}
        >
          <h2>ABO</h2>
          <h2>UT</h2>
        </motion.section>
      </motion.main>
      <BackToTop />
    </>
  )
}

export default About
