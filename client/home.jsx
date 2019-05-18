import React from 'react'
import ReactDOM from 'react-dom'

//renders each property of the passed in home object and holds the majority of the app's JSX
var Home = (props) => (
  <div className='home'>
    <button className='favorite'>Favorite(get me inside image)</button>
    {/* onClick={launch modal for sign in} */}
    <div className='homeImg'> 
    <img src={props.image}></img>
    </div>
    <span className='text'>
      <span className='nameAndLoc'>
        <span className='mediumText'>
          <span>{props.type}</span>
          <span className='textDot'>*</span>
          <span>{props.location}</span>
        </span>
      </span>
      <div className='miniDescribe'>
        <div className='boldMediumText'>
          <div>{props.description}</div>
        </div>
      </div>
      <div className='price'>
        <div className='smallertext'>
          <div>{props.price}</div>
        </div>
      </div>
      <div className='ratings'>
        <span className='stars'>
          <span>{props.rating}</span>
        </span>
        {/*image based off this.props.rating */}
        <span className='smallestText'>
          <span>{props.numratings}</span>
        </span>
      </div>
    </span>
  </div>
)

export default Home