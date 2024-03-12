import './App.scss'
import NavigationBar from './NavigationBar'
import Introduction from './Introduction'
import SpecialThanks from './SpecialThanks'

function App() {


  return (
    <>
    <div className="bg-photo vh-100">
      <NavigationBar></NavigationBar>
      <Introduction></Introduction>
      <SpecialThanks></SpecialThanks>
    </div>
    </>
  )
}

export default App
