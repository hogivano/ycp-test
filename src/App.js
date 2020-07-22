import React from 'react'
import { Container } from './components/container/container.component'
import {CardList} from './components/card-list/card-list.component'
import { Header } from './components/header/header.component'
import { Footer } from './components/footer/footer.component'
import { SearchBox } from './components/searchbox/search-box.component'
import { Card } from './components/card/card.component'
import { Nodata } from './components/error/nodata/nodata.component'
import Users from './contains/users/users.contain'

import logo from './logo.svg'
import './App.css'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      greeting: 'Hello, World its using react Component',
      postTemp: 1,
      inputData: '',
      clickUserId: 0,
      data: []
    }

    // untuk passing data this pada class ke methodHandleChange harus menggunakan .bind()
    this.methodHandleChange = this.methodHandleChange.bind(this)
  }

  changeText = () => {
    if(this.state.postTemp === 1){
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

  methodHandleChange(e){
    this.setState({
      inputData: e.target.value
    })
  }

  methodHandleClickUser = (val) => {
    this.setState({
      clickUserId: val
    }, () => console.log(this.state.clickUserId))
  }

  // menggunakan format arrow function sama seperti methodHandleChange namun beda cara dan lebih simple
  arrowHandleChange = e => {
    this.setState({
      inputData: e.target.value
    })
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
    const { data, inputData, clickUserId } = this.state
    const filteredData = data.filter(d => {
      if (clickUserId === 0 && inputData === ''){
        return true
      }

      if (d.title.toLowerCase().includes(inputData.toLowerCase())){
        if(clickUserId > 0 && d.userId === clickUserId){
          return true
        } else if (clickUserId === 0){
          return true
        }
      }
      
      return false
      // ( || d.userId === clickUserId)
    })
    return (
      <main>
        <Header/>
        <Container>
          {/* <input
            placeholder="search something"
            type="search"
            onChange={this.arrowHandleChange}
          >
          </input> */}
          <SearchBox 
            placeholder='Search posts'
            handleChange={this.methodHandleChange}
          />
          <div className="row pv-15px">
            <CardList className="col-7 col-sm-12">
                {filteredData.map(
                      d =>  <Card key={d.id} title={d.title} body={d.body} />
                )}
            </CardList>
            <Users className="col-3 col-sm-12" handleClick={this.methodHandleClickUser}></Users>
          </div>
        </Container>
        <Footer/>
      </main>
    )
  }
}

export default App;
