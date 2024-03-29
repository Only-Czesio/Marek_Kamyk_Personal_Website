import '../App.scss'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import Post from '../Components/Post'

function Blog() {

  interface Content {
    title : string,
    photo : string
}

  const firstPost : Content = {
    title : "My first Blog post",
    photo : "src/assets/firstblog.jpg"
  }

  return (
    <>
    <div id='start' className="bg-photo">
      <NavigationBar></NavigationBar>
        <Post content={firstPost}/>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Blog
