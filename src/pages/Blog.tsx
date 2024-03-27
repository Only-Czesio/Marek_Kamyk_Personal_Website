import '../App.scss'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'

function Blog() {

  return (
    <>
    <div id='start' className="bg-photo">
      <NavigationBar></NavigationBar>
        <h1>This is my blog</h1>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Blog
