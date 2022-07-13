import {Component} from 'react'
import './App.css';
import {logDOM} from "@testing-library/react";

class App extends Component {

  constructor(props) {
    console.log('Constructor')
    super(props)
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {monsters: users}
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  render() {
    console.log('render')

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <input
          className={'search-box'}
          type={'search'}
          placeholder={'search monsters'}
          onChange={(event) => {
            console.log(event.target.value)

            const searchField = event.target.value.toLowerCase()
            this.setState(() => {
              return {searchField}
            })
          }}
        />
        {filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
