import React, { Component } from 'react'
import axios from 'axios'

 class Blog extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              users:[]
         }
     }
     
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(respons => {
            console.log(respons.data)
            this.setState({ 
                users:respons.data
            })
        })
    }
    render() {
        const {users}  =this.state
        const userList=users.map(user =>{
            return(
                <div key={user.id}>
                    <div className='content'>
                    <p>the name is : {user.name}</p>
                    <p>the email is : { user.email}</p>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <h1>Blog section</h1>
                {
                    userList
                }
            </div>
        )
    }
}

export default Blog
