import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from 'react-bootstrap/Carousel'
import Home from './home.jsx'

//holds individual homes, might be refactored to stateless if no state is required
class RelatedCarousel extends React.Component{
  constructor(props){
    super(props)

    this.state = {
        //possibly need to maintain the motion of the carousel, otherwise may not need to be stateful
      }
  }

  render() {
    return (
      <Carousel>
        
        {this.props.homes.map((home, index) => {
          return(
          <Carousel.Item key={index}>
            <Home 
            type={home.type}
            description={home.description}
            location={home.location}
            rating={home.rating}
            numRatings={home.numRatings}
            price={home.price}
            image={home.image}
            />
          </Carousel.Item>
          )
        })}
      </Carousel>
    )
  }

}

export default RelatedCarousel