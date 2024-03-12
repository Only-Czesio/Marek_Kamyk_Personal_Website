import './App.scss'
import NavigationBar from './Components/NavigationBar'
import Introduction from './Components/Introduction'
import SpecialThanks from './Components/SpecialThanks'
import Footer from './Components/Footer'
function App() {


  return (
    <>
    <div id='start' className="bg-photo vh-100">
      <NavigationBar></NavigationBar>
      <Introduction></Introduction>
      <SpecialThanks></SpecialThanks>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
