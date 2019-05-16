
var Home = (props) => (
  <div className='home'>
    <button className='favorite'>Favorite(get me inside image)</button>
    <div className='homeImg'>IMAGE</div>
    <span className='text'>
      <span className='nameAndLoc'>
        <span className='mediumText'>
          <span>Name</span>
          <span className='textDot'></span>
          <span>Location</span>
        </span>
      </span>
      <div className='miniDescribe'>
        <div className='boldMediumText'>
          <div>Mini description</div>
        </div>
      </div>
      <div className='price'>
        <div classname='smallertext'>
          <div>Price</div>
        </div>
      </div>
      <div className='ratings'>
        <span clasName='stars'></span>
      </div>
    </span>
  </div>
)