

interface Content {
    content : {
        title : string,
        photo : string
    }
}



export default function Post({ content } : Content  ) {



    return (

        <>
            <h1>{content.title}</h1>
            <img src={content.photo} height="100" width="100"></img>
        </>
    )
}