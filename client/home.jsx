import React from 'react'
import ReactDOM from 'react-dom'

//renders each property of the passed in home object and holds the majority of the app's JSX
var Home = (props) => (
  <div className='home'>
    <button className='favorite'>Favorite(get me inside image)</button>
    {/* onClick={launch modal for sign in} */}
    <div className='homeImg'>IMAGE</div>
    {/* this.props.image*/}
    <span className='text'>
      <span className='nameAndLoc'>
        <span className='mediumText'>
          <span>Type</span>
          {/* this.props.type*/}
          <span className='textDot'>*</span>
          <span>Location</span>
          {/* this.props.location*/}
        </span>
      </span>
      <div className='miniDescribe'>
        <div className='boldMediumText'>
          <div>Mini description</div>
          {/* this.props.description */}
        </div>
      </div>
      <div className='price'>
        <div className='smallertext'>
          <div>Price</div>
          {/* this.props.price*/}
        </div>
      </div>
      <div className='ratings'>
        <span className='stars'>
          <span>*****</span>
        </span>
        {/*image based off this.props.rating */}
        <span className='smallestText'>
          <span>#ratings</span>
          {/* this.props.numRatings */}
        </span>
      </div>
    </span>
  </div>
)

export default Home