import "./Post.scss"

interface Content {
    content : {
        title : string,
        description: string,
        photo : string
    }
}



export default function Post({ content } : Content  ) {



    return (

        <>
          <div className="wrapper">
            <h1>{content.title}</h1>
            <p>{content.description}</p>
            <img src={content.photo} height="100" width="100"></img>
          </div>
        </>
    )
}