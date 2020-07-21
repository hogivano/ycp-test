import React from 'react'
import { Container } from './components/container/container.component'
import {CardList} from './components/card-list/card-list.component'
import { Header } from './components/header/header.component'
import { Footer } from './components/footer/footer.component'
import { SearchBox } from './components/searchbox/search-box.component'
import { Card } from './components/card/card.component'
import Users from './contains/users/users.contain'

import logo from './logo.svg'
import './App.css'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      greeting: 'Hello, World its using react Component',
      postTemp: 1,
      inputMonster: 'monstering',
      data: []
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

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .catch(err => console.log("Error componentDidMount" + err))
    .then(posts => {
      this.setState({
        data: posts
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <main>
        <Header/>
        <Container>
          <SearchBox />
          <div className="row pv-15px">
            <CardList className="col-7 col-sm-12">
              {this.state.data.map(
                  d =>  <Card key={d.id} title={d.title} body={d.body} />
              )}
            </CardList>
            <Users className="col-3 col-sm-12"></Users>
          </div>
        </Container>
        <Footer/>
      </main>
    )
  }
}

export default App;
