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
    if(this.state.position < (this.props.homes.length - 3)){
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
          marginTop:'10%',
          visibility: `${this.state.position === 0 ?'hidden' : 'visible'}`,
          overflow:'visible',
          marginLeft:'10%'
          }}
          >
          <i
          className="fas fa-chevron-left"
          onClick={this.prevCard.bind(this)}
          ></i>
        </div>
        <div style={{
          marginTop:'10%',
          marginRight:'35%',
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
          marginLeft:'10%',
          marginRight:'10%'
        }}>
        <h2 style={{
          fontSize:'24px'
        }}>More homes you may like</h2>
          <div
            style={{
              transform: `translateX(${this.state.translate}px)`,
              transition:'transform ease-out 0.45s',
              display:'grid',
              boxSizing:'border-box',
              gridTemplateColumns:'repeat(12, 35%)',
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