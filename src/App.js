import React, { Component } from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom: 'Aurel',
    age: 33
  },
  membre2: {
    nom: 'Raph',
    age: 32
  },
  membre3: {
    nom: 'Adrien',
    age: 1
  },
  membre4: {
    nom: 'Aby',
    age: 9
  },
}


class App extends Component {
  state = {
    famille
  }

  handleClick = (num) => {
    const famille = {...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = event => {
    const famille = {...this.state.famille }
    const nom = event.target.value
    famille.membre1.nom = nom
    this.setState({famille})
  }

  render() {
    const { titre } = this.props
    const { famille } = this.state
    return (
      <div className="App">
        <h1>{titre}</h1>
        <input value={famille.membre1.nom} 
        onChange={this.handleChange} 
        type="text" />
        <Membre
          age={famille.membre1.age}
          nom={famille.membre1.nom} />
        <Membre
          age={famille.membre2.age}
          nom={famille.membre2.nom} />
        <Membre
          age={famille.membre3.age}
          nom={famille.membre3.nom} />
        <Membre
          age={famille.membre4.age}
          nom={famille.membre4.nom} >
          <strong>I am a dog !</strong>
        </Membre>
        <Button
          vieillir={() => this.handleClick(2)}
        />
      </div>
    )
  }

}

export default App;


