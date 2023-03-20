import React from 'react'
import { Link } from 'react-router-dom'
import './GigCard.scss'

const GigCard = ({item}) => {
    return (
      <Link to='/gig/123' className='link'>
      <div className='gigcard'>
        <img src={ item.img } alt='' />
        <div className='info'>
            <div className='user'>
                <img src={ item.pp } alt='' />
                <span>{ item.username }</span>
            </div>
            <p>{ item.desc }</p>
            <div className='star'>
                <img src='../../../public/img/star.png' alt='' />
                <span>{ item.star }</span>
                </div>
            </div>
            <hr/>
            <div className='detail'>
                <img src='../../../public/img/heart.png' alt='' />
                <div className='price'>
                    <span>STARTING AT</span>
                    <h2>
                        $ { item.price }
                        <sup>99</sup>
                    </h2>  
                </div>
            </div> 
        </div>
      </Link>
  )
}

export default GigCard