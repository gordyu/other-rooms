import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './carousel.jsx'
//import X from 'Y'

//holds the currents related homes in state and renders a Carousel with those databse objects passed in. makes get request with fetch to API to populate the related array
class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      related: []
    }
  }

  // componentDidMount() {
    //fetch related homes, setState
    //fetch(localhost:3001/related)
  // }

  render() {
    return (
      <div>
        <h2>More homes you may like</h2>
        <Carousel homes={this.state.related}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('related'))