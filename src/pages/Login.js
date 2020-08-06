import React, { Component } from 'react'
import {Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-logo">
                    <h3>NACULA</h3>
                </div>
                <div className="login-form">
                    <form action="">
                        <Form.Control type="email" placeholder="Email" />
                        <Form.Control type="password" placeholder="Password" />
                        <Link to="/dashboard"><button type="submit">Login</button></Link>
                        <a className="forgot-pass" href="/">Forgot password?</a>
                    </form>
                </div>
            </div>
        )
    }
}
