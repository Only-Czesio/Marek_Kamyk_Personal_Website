import '../App.scss'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import Post from '../Components/Post'

function Blog() {

  interface Content {
    title: string,
    description: string,
    photo: string,
    link: string
}

  const firstPost : Content = {
    title: "My first Blog post",
    description: "This is the description part loremThis is the description part loremThis is the description part loremThis is the description part loremThis is the description part lorem",
    photo: "src/assets/firstblog.jpg",
    link: "/Marek_Kamyk_Personal_Website/Posts/myFirstPost" 
  }

  return (
    <>
    <div id='start' className="bg-photo">
      <NavigationBar></NavigationBar>
        <div className='blogWrapper d-flex flex-row justify-content-center align-items-center'>
          <Post content={firstPost}/>
          <Post content={firstPost}/>
          <Post content={firstPost}/>
        </div>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Blog
