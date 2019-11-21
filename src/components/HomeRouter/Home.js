    import React, { Component } from 'react'
    
    export class Home extends Component {
        componentDidMount () {
            this.setState({
                user: localStorage.getItem('user')
            })
        }
        
        userLogedIn = `Bem vindo, ${this.state.user}`
        noUser = `Você precisa logar para ter acesso`

        render() {
            return (
                <div>
                    {this.userLogedIn === undefined ? this.noUser : this.userLogedIn }
                </div>
            )
        }
    }
    
    export default Home
    