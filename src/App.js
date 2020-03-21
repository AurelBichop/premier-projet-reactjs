import React, { Component } from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom: 'Aurelien',
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
  membre5: {
    nom: 'Aby2',
    age: 15
  },
}




class App extends Component {
  state = {
    famille,
    isShow:false
  }

  handleClick = (num) => {
    const famille = {...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const famille = {...this.state.famille }
    const nom = event.target.value
    famille[id].nom = nom
    this.setState({famille})
  }

  cacherNom = id => {
    const famille = { ...this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({isShow})
  }

  render() {
    const { titre } = this.props
    const { famille, isShow } = this.state
    
    let description = null;
    
    if(isShow){
      description = (
        <strong>I am a dog !</strong>
      )
    }

    const liste = Object.keys(famille)
      .map(membre => (
        <Membre
          key={membre}
          handleChange = {event => this.handleChange(event,membre)}
          cacherNom = {() => this.cacherNom(membre)}
          age={famille[membre].age}
          nom={famille[membre].nom} />
      ))

    console.log(liste)

    return (
      <div className="App">
        <h1>{titre}</h1>
        {/*
        <input value={famille.membre1.nom} 
        onChange={this.handleChange} 
        type="text" />*/}
        {liste}
        {/*<Membre
          age={famille.membre4.age}
          nom={famille.membre4.nom} >
          
          {description}   
          
          <button onClick={this.handleShowDescription}>
            {
              isShow ? 'Cacher' : 'Montrer'
            }
            </button>
        </Membre>
        <Button
          vieillir={() => this.handleClick(2)}
        />*/}
      </div>
    )
  }

}

export default App;


