import React from 'react'
import redStar from '../img/redStar.svg'
import whiteStar from'../img/whiteStar.svg'
import arrow from '../img/arrow.svg'
import { Link } from 'react-router-dom'
const star = [... new Array(5)]

function Fullpanel({difficulty, img, title, id}) {
  return (
   
      <div className='dungens'>
        <div className='blackout'></div>
        <Link to={`/${id}`} className='linkPonel'><h3>Посмотреть подробнее </h3> <img src={arrow} alt="" /></Link>
        <h1>{title}</h1>
        <img src={img} alt="" />
        <span className='stars'>
        
        {
        star.map((_, index) => {
          return index < difficulty ? <img src={redStar} alt="" />: <img src={whiteStar} alt="" />
        })

        }
        
        </span>
       
      </div>
   
  )
}

export default Fullpanel