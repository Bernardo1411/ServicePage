import React from 'react'
import './success.scss'

export default props => {
    return (
        <div>
            <div className="Advice">
                <h1>Sign up Complete!</h1>
                {setTimeout(() => {
                props.history.push('/')
            }, 3000)}
            </div>
        </div>
    )
}