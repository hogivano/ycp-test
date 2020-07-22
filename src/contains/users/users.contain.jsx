import React from 'react'
import './users.styles.css'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            idActive: 0
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .catch(err => console.log('Error in user side : ' + err))
        .then(users => {
            this.setState({
                data: users
            })
        })
    }

    changeIdActive = (val) => {
        this.setState( (prevState) => {
            if (prevState.idActive === val){
                val = 0
            }
            return {
                idActive: val
            }
        }, () => {
            console.log(this.state.idActive)
            this.props.handleClick(val)
        })
    }

    generateList = () =>
        this.state.data.map( value => {
            if (this.state.idActive === value.id){
                return (
                    <div key={value.id} data-id={value.id} onClick={() => {
                        this.changeIdActive(value.id)
                    }} className="name-list active">
                        <p>{value.name}</p>
                    </div>
                )
            } else {
                return (
                    <div key={value.id} data-id={value.id} onClick={() =>{
                        this.changeIdActive(value.id)
                    }} className="name-list">
                        <p>{value.name}</p>
                    </div>
                )
            }
        })

    render() {
        return (
            <section className="col-3 users">
                <h4 className="pv-10px">Users Post</h4>
                {this.generateList()}
            </section>
        )
    }
}

export default Users