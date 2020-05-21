import React from 'react'
import './success.scss'
import { Jumbotron } from 'react-bootstrap'

export default props => {

    return (
        <div>
            <div className="success">
                <Jumbotron className="m-5 col-4">
                    <h1>Sign up Complete!</h1>
                    <p>Wellcome to our team!</p>
                    <button className="btn btn-primary" onClick={() => props.history.push('/')}>Home</button>
                </Jumbotron>
            </div>
        </div>
    )
}