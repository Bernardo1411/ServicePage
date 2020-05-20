import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './Form.scss'
import axios from 'axios'

const initialState = {
    email: '',
    password: ''
}

export default class Formulario extends Component {
    state = { ...initialState }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>{
            console.log(res.data.slice(1,10))
        })
    }

    writing = (e, id) => {
        this.setState({
            [`${id}`]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
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