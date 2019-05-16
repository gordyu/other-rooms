import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './carousel.jsx'
//import X from 'Y'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      related = []
    }
  }

  componentDidMount() {
    //fetch related homes, setState
  }

  render() {
    return (
      <div>
        <span>More homes you may like</span>
        <Carousel homes={this.state.related}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('related'))