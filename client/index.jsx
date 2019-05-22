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
    fetch('http://localhost:3001/related')
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
      <div>
        <h2>More homes you may like</h2>
        <RelatedCarousel homes={this.state.related}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('related'))