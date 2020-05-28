import React, { useContext } from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import {UsersContext} from '../context/usersContext'

export default props => {
    const {clients, del} = useContext(UsersContext)
    
        const List = clients.clients.map(client => {
            return    <ListGroupItem className="d-flex mx-5 px-3">
                        <div className="mr-auto">{client.email}</div>
                        <Button className="btn btn-danger d-flex justify-content-right" onClick={() => del(client.id)}>Delete</Button>
                    </ListGroupItem>
        })
        return (
            <div>
                <ListGroup>
                    {List}
                </ListGroup>
            </div>
        )
}