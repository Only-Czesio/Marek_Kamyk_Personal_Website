import Card from './Card'
import { myTeacher, freeCodeCamp, JerzyGreborz, KevinPowell, JadJoubran, StevenSkiena } from './cardsData'
import './SpecialThanks.scss'

export default function SpecialThanks() {

    return(
        <>
          <h2 className="gold head" >Special Thanks to my heroes: </h2>
          <div className="card-container snaps-inline">
            <Card cardData={myTeacher}/>
            <Card cardData={freeCodeCamp} />
            <Card cardData={JerzyGreborz} />
            <Card cardData={KevinPowell} />
            <Card cardData={JadJoubran} />
            <Card cardData ={StevenSkiena} />
          </div>
        </>
    )
}