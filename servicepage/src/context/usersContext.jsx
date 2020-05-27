import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

export const UsersContext = createContext()

const UsersContextProvider = props => {
    const [clients, setClient] = useState({
        client: 
            {
                email: '',
                password: '',
                id: 0
            },
        clients:[] 
    })

    const writing = (e, id) => {
        setClient({
            ...clients.client,
            [`${id}`]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        axios.post('http://localhost:3001/clients', clients.client)
        props.history.push('/success')
    }

    const del = (id) => {
        axios.delete('http://localhost:3001/clients/' + id)
    }

    useEffect(()=>{
        axios.get('http://localhost:3001/clients').then(res => setClient({ clients: res.data }))
    })

    return (
        <UsersContext.Provider value={{ clients, writing, submit, del }}>
            {props.children}
        </UsersContext.Provider>
    );
}

export default withRouter(UsersContextProvider);