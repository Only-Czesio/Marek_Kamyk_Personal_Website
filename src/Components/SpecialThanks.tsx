import Card from './Card'
import { myTeacher, freeCodeCamp, JerzyGrebosz, KevinPowell, JadJoubran, StevenSkiena } from '../cardsData'
import './SpecialThanks.scss'

export default function SpecialThanks() {

    return(
        <>
          <h2 className="gold head" >Special Thanks to my heroes: </h2>
          <div className="card-container snaps-inline">
            <Card cardData={myTeacher}/>
            <Card cardData={KevinPowell} />
            <Card cardData={JadJoubran} />
            <Card cardData={JerzyGrebosz} />
            <Card cardData ={StevenSkiena} />
            <Card cardData={freeCodeCamp} />
          </div>
        </>
    )
}