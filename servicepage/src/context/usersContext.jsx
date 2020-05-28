import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {v4} from 'uuid'

export const UsersContext = createContext()

const UsersContextProvider = props => {
    const [clients, setClients] = useState({
        clients:[],
    })
    
    useEffect(() => {
        axios.get('http://localhost:3001/clients').then(res => setClients({ clients: res.data }))
    }, [clients.clients.password])

    const addClient = (email, password) => {
        axios.post('http://localhost:3001/clients', {email, password, id: v4()})
    }

    const del = (id) => {
        axios.delete('http://localhost:3001/clients/' + id)
    }


    return (
        <UsersContext.Provider value={{ clients, addClient, del }}>
            {props.children}
        </UsersContext.Provider>
    );
}

export default withRouter(UsersContextProvider);