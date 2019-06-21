import React from 'react'
import ReactDOM from 'react-dom'
import RelatedCarousel from './carousel.jsx'
//import X from 'Y'

//holds the currents related homes in state and renders a Carousel with those databse objects passed in. makes get request with fetch to API to populate the related array
// needs to be declared with a home object denoting the current item page for the sake of deciding relation
class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      related: []
    }
  }

  //make request to api for related homes and populate state
  getRelated() {
    fetch(`http://ec2-52-1-99-151.compute-1.amazonaws.com/related`)
    .then((result) => {
      return result.json()
    })
    .then((parsed) => {
      this.setState({
        related: parsed
      })
    })
  }

  componentDidMount() {
    this.getRelated()
  }

  render() {
    return (
      <div style={{
        fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
        fontSize: '14px',
        lineHeight: '1.43',
        color: '#484848',
        backgroundColor: '#fff',
        marginTop: '16px',
        marginBottom: '24px',
        height:'30%',
        width:'90%',
        }}>

        <RelatedCarousel homes={this.state.related}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('related'))
