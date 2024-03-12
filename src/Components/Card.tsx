import './Card.scss'

interface CardData {
        cardID : string,
        logo : string,
        logoAlt : string,
        title : string,
        description: string
}
export default function Card({ cardData } : { cardData : CardData}) {

    const { cardID, logo, logoAlt, title, description } = cardData;
    

    return(
        <>
          <div className="card" id={cardID}>
            <img className="logo" src={logo} alt={logoAlt}></img>
            <div className="title gold">{title}</div>
            <div className="description">{description}</div>
          </div>
        </>
    )
}