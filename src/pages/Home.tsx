import '../App.scss'
import NavigationBar from '../Components/NavigationBar'
import Introduction from '../Components/Introduction'
import SpecialThanks from '../Components/SpecialThanks'
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'

function Home() {

  return (
    <>
    <div id='start' className="bg-photo">
      <NavigationBar></NavigationBar>
      <Introduction></Introduction>
      <Skills></Skills>
      <SpecialThanks></SpecialThanks>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Home
