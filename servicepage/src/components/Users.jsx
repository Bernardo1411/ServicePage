import React, { Component } from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import axios from 'axios'

export default class Users extends Component {
    state = {
        clients: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/clients').then(res => this.setState({ clients: res.data }))
    }

    delete(id) {
        axios.delete('http://localhost:3001/clients/' + id)
    }

    render() {
        const List = this.state.clients.map(client => {
            return (
                    <ListGroupItem className="d-flex mx-5 px-3">
                        <div className="mr-auto">{client.email}</div>
                        <Button className="btn btn-danger d-flex justify-content-right" onClick={() => this.delete(client.id)}>Delete</Button>
                    </ListGroupItem>
            )
        })
        return (
            <div>
                <ListGroup>
                    {List}
                </ListGroup>
            </div>
        )
    }
}