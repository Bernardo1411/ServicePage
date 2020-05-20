import React, { Component } from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import axios from 'axios'

export default class Users extends Component{
    state = {
        clients:[]
    }
    
    componentDidMount(){
        axios.get('http://localhost:3001/clients').then(res => this.setState({clients: res.data}))
    }

    delete(id){
        axios.delete('http://localhost:3001/clients/' + id)
    }

    render(){
        const List = this.state.clients.map(client =>{
            return(
            <ListGroupItem>{client.email}
            <Button className="btn btn-danger" onClick={() => this.delete(client.id)}>Delete</Button>
            </ListGroupItem>
            )
        })
        return(
            <div>
                <ListGroup>
                    {List}
                </ListGroup>
            </div>
        )
    }
}