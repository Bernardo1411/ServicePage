import React, { useContext, useState } from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap'
import './Form.scss'
import { UsersContext } from '../context/usersContext'

export default props => {
    const { addClient } = useContext(UsersContext)
    const [ email, setEmail]  = useState('')
    const [ password, setPassword ] = useState('')

    const submit = (e) => {
        e.preventDefault()
        addClient(email, password)
        setEmail('')
        setPassword('')
        props.history.push('/success')
    }
    return (
        <div className="mx-5 px-5">
            <h3>{email}</h3>
            <h3>{password}</h3>
            <Jumbotron className="Jumbotron mx-5">
                <Form>
                    <h3 className="mb-5"> Sign up</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={submit}>
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    )
}