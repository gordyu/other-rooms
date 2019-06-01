import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home.jsx'


//holds individual homes, might be refactored to stateless if no state is required
class RelatedCarousel extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      position:0,
      translate:0,
    }
  }

  nextCard() {
    if(this.state.position < (this.props.homes.length - 2)){
      console.log('next')
      this.setState({
        position: this.state.position + 1,
        translate: this.state.translate - (this.slideWidth())
      })
    }
  }

  prevCard() {
    if(this.state.position > 0){
      console.log('prev')
      this.setState({
        position: this.state.position - 1,
        translate: this.state.translate + (this.slideWidth())
      })
    }
  }

  slideWidth() {
    return (document.querySelector('.home').clientWidth)
  }
 
  render() {
    return (
      <div>
        <div 
        style={{
          float:'left',
          cursor:'pointer',
          marginTop:'15%',
          visibility: `${this.state.position === 0 ?'hidden' : 'visible'}`
          }}
        onClick={this.prevCard.bind(this)}
          >
          <i 
          className="fas fa-chevron-left"
          onClick={this.prevCard.bind(this)}
          ></i>
        </div>
        <div style={{
          marginTop:'15%',
          marginRight:'25%',
          float:'right',
          overflow:'visible',
          visibility:`${this.state.position === 10 ?'hidden' : 'visible'}`
        }}>
          <i 
          className="fas fa-chevron-right"
          onClick={this.nextCard.bind(this)}
          ></i>
        </div>
        <div style={{
          overflow:'hidden',
          marginLeft:'8px'
        }}>
          <div 
            style={{
              transform: `translateX(${this.state.translate}px)`,
              transition:'transform ease-out 0.45s',
              display:'grid',
              boxSizing:'border-box',
              gridTemplateColumns:'repeat(12, 50%)',
              position:'relative'
            }}>
            {this.props.homes.map((home, index) => {
              return(
                <Home
                className='home'
                key={index}
                index={index}
                type={home.type}
                description={home.description}
                location={home.location}
                rating={home.rating}
                numRatings={home.numRatings}
                price={home.price}
                image={home.image}
                />
              )
            })}
          </div>
        </div>
      </div>
    );  
  }
}

export default RelatedCarousel