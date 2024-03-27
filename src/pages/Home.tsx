import '../App.scss'
import NavigationBar from '../Components/NavigationBar'
import Introduction from '../Components/Introduction'
import SpecialThanks from '../Components/SpecialThanks'
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'
import { motion } from 'framer-motion'

function Home() {

  return (
    <>
    <div id='start' className="bg-photo">
      <NavigationBar></NavigationBar>
      <motion.div
              variants={routeVariants}
              initial="initial"
              animate="final"
              >
      <Introduction></Introduction>
      <Skills></Skills>
      <SpecialThanks></SpecialThanks>
      </motion.div>
      <Footer></Footer>
    </div>
    </>
  )
}

const routeVariants = {
  initial: {
      y: '100vh'
  },
  final: {
      y: '0vh'
  }
}

export default Home
