import './Card.scss'


interface CardData {
        cardID : string,
        photo : string,
        photoAlt : string,
        title : string,
        description: string
}
export default function Card({ cardData } : { cardData : CardData}) {

    const { cardID, photo, photoAlt, title, description } = cardData;


    

    return(
        <>
          <div className="scroller-inner card d-flex flex-column justify-content-around" id={cardID} >
            <img className="photo" src={photo} alt={photoAlt}></img>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
        </>
    )
}