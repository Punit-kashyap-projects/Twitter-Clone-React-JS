import React from 'react'
import './DisplayCont.css'

export default function DisplayCont(props) {
  return (
    <div className='displayCont'>
        <div className='displayInfoCont'>
            <p className='grey'>{props.category}</p>
            <p className='bold white'>{props.text}</p>
        </div>
        <img src={props.img} alt='Reload page'/>
    </div>
  )
}
