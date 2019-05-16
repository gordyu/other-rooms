import Home from './home.jsx'

var Home = (props) => (
  <div className='home'>
    <button className='favorite'>Favorite(get me inside image)</button>
    <div className='homeImg'>IMAGE</div>
    <span className='text'>
      <span className='mediumText'>
        <span>Name</span>
        <span className='textDot'></span>
        <span>Location</span>
      </span>
      <div className='tinyDescribe'>Mini description</div>
      <div classname='smallertext'>Price</div>
      <div className></div>
      <div className='ratings'></div>
    </span>
  </div>
)