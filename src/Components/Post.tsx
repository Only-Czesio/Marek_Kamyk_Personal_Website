import "./Post.scss"

interface Content {
    content : {
        title: string,
        description: string,
        photo: string,
        link: string
    }
}



export default function Post({ content } : Content  ) {



    return (

        <>
          <div className="wrapper">
            <a href={content.link}><img src={content.photo} height="200" width="200"></img></a>
            <h1 className="gold">{content.title}</h1>
            <p className="gold">{content.description}</p>
          </div>
        </>
    )
}