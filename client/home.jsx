import React from 'react'
import ReactDOM from 'react-dom'

//renders each property of the passed in home object and holds the majority of the app's JSX
var Home = (props) => (
  <div className='home' style={{
    cursor: 'pointer'
  }}>
    <button className='favorite'>Favorite(get me inside image)</button>
    {/* onClick={launch modal for sign in} */}
    <div className='homeImg' style={{
      height: '33%',
      width: '33%'
    }}> 
    <img src={props.image} style={{
      width: '100%',
      height:'100%'
    }}></img>
    </div>
    <span className='text'>
      <span className='nameAndLoc'>
        <span className='mediumText' style={{
          fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
          color: 'rgb(118, 118, 118)',
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '1.33333em',
          textTransform: 'uppercase'
        }}>
          <span>{props.type}</span>
          <span className='textDot'>*</span>
          <span>{props.location}</span>
        </span>
      </span>
      <div className='miniDescribe'>
        <div className='boldMediumText' style={{
          fontSize: '16px',
          fontWeight: '800',
          lineHeight: '1.375em',
          color: '#484848'
        }}>
          <div>{props.description}</div>
        </div>
      </div>
      <div className='price'>
        <div className='smallertext'>
          <div>${props.price} per night.</div>
        </div>
      </div>
      <div className='ratings'>
        <span className='stars'>
          <span>{props.rating}</span>
        </span>
        {/*image based off this.props.rating */}
        <span className='smallestText' style={{
          color: 'rgb(72, 72, 72)',
          marginTop: '2px',
          fontWeight: '600'
        }}>
          <span> {props.numRatings}</span>
        </span>
      </div>
    </span>
  </div>
)

export default Home