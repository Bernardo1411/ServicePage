import React, { createContext, useState } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

export const UsersContext = createContext()

const UsersContextProvider = props => {
    const [client, setClient] = useState({
        email: '',
        password: '',
        id: 0
    })

    const writing = (e, id) => {
        setClient({
            ...client,
            [`${id}`]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        axios.post('http://localhost:3001/clients', client)
        props.history.push('/success')
    }

    const show = () => {
        axios.get('http://localhost:3001/clients').then(res => this.setClient({ client: res.data }))
    }

    const del = (id) => {
        axios.delete('http://localhost:3001/clients/' + id)
    }

    return (
        <UsersContext.Provider value={{ client, writing, submit }}>
            {props.children}
        </UsersContext.Provider>
    );
}

export default withRouter(UsersContextProvider);