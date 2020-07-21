import React from 'react'
import { Container } from './components/container/container.component'
import {CardList} from './components/card-list/card-list.component'
import { Header } from './components/header/header.component'
import logo from './logo.svg'
import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello, World
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      greeting: 'Hello, World its using react Component',
      postTemp: 1,
      inputMonster: 'monstering',
      monsters: []
    }
  }

  changeText = () => {
    if(this.state.postTemp == 1){
      const greeting1 = 'Hello, Hendriyan Ogivano'
      
      this.setState({
        greeting: greeting1,
        postTemp: 2
      })
    } else {
      const greeting2 = 'Hello, World its using react Component'

      this.setState({
        greeting: greeting2,
        postTemp: 1
      })
    }
  }

  changeInput = (evt) => {
    this.setState({
      inputMonster: evt.target.value
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .catch(err => console.log("Error componentDidMount" + err))
    .then(users => {
      this.setState({
        monsters: users
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <Header />
      <Container>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {this.state.greeting}
            </p>
            <CardList />
            <button  onClick={this.changeText}>Change Text</button>
            <section className="monsters">
              {this.state.monsters.map(
                monster => <h1 key={monster.id}>{monster.name}</h1>
              )}
              <input value={this.state.inputMonster} onChange={this.changeInput}/>
              <button onClick={() => {
                const newMonsters = this.state.monsters
                newMonsters.push({
                  name: this.state.inputMonster,
                  id: this.state.monsters[this.state.monsters.length - 1].id + 1
                })
                this.setState({
                  monsters: newMonsters
                })
              }}>Add monster</button>
            </section>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Container>
    )
  }
}

export default App;
