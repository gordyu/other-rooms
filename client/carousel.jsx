import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home.jsx'

//holds individual homes, might be refactored to stateless if no state is required
class Carousel extends React.Component{
  constructor(props){
    super(props)

      this.state = {
        //possibly need to maintain the motion of the carousel, otherwise may not need to be stateful
      }
  }

  render() {
    return (
      <div>
        {/*
        {this.props.homes.map((home) => {
          return <Home 
          type={home.type}
          description={home.description}
          location={home.location}
          rating={home.rating}
          numRatings={home.numRatings}
          price={home.price}
          image={home.image}
          />
        })}
         */}
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
      </div>
    )
  }

}

export default Carousel