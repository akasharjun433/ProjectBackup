import React from 'react'
import "./HeroStyles.css"
import { Link } from 'react-router-dom'
export default function Hero(props) {
  return (
    <div className={props.cName}>
      <img alt="HerpImg" src={props.heroImg} />
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Link to={props.url}>
        <button>{props.btnText}</button></Link>
      </div>
    </div>

  )
}
