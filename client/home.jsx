import React from 'react'
import ReactDOM from 'react-dom'
import StarRatings from 'react-star-ratings'

//renders each property of the passed in home object and holds the majority of the app's JSX
var Home = (props) => (
  <div className='home' style={{
    cursor: 'pointer',
    width:'100%',
    paddingRight:'8px',
    paddingLeft:'8px',
    gridColumn:`${props.index} / ${props.index + 1}`,
    gridRow:'1'
  }}>

    {/* onClick={launch modal for sign in} */}
    <div className='homeImg' style={{
      width:'300px',
      height:'210px',
      backgroundImage:`url("${props.image}")`, backgroundSize:'cover',
      backgroundPosition: 'center',
      borderRadius:'3px'
    }}> 
    <i className="far fa-heart fa-2x"
    style = {{
      top:'8%',
      left:'87%',
      position:'relative',
      color:'white'
    }}
    ></i>
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
          <StarRatings
          rating={props.rating}
          starRatedColor= 'rgb(13, 114, 118)'
          numberOfStars={5}
          starDimension='10px'
          starSpacing='0px'
          />
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