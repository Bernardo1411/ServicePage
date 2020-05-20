import React, { Component } from 'react'
import { Form, Button, ListGroup } from 'react-bootstrap'
import './Form.scss'
import axios from 'axios'

const initialState = {
    email: '',
    password: '',
    id: 0
}

export default class Formulario extends Component {
    state = { ...initialState }

    writing = (e, id) => {
        this.setState({
            [`${id}`]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        axios.post('http://localhost:3001/clients', this.state)
        this.props.history.push('/success')
    }

    render() {
        return (
            <div>
                <h3>{this.state.email}</h3>
                <h3>{this.state.password}</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => this.writing(e, 'email')} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => this.writing(e, 'password')} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.submit}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}