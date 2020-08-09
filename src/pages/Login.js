import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import loginBG from '../media/5545.png';
import aetlLogo from '../media/aetl.png';

export default class Login extends Component {
    render() {
        return (
            <div className="login-wrapper container-fluid">
                <Row className="align-content-md-center" style={{minHeight: '100vh'}}>
                    <Col md={7} style={{alignSelf: 'center', textAlign: 'center'}}>
                        <img src={loginBG} alt=""/>
                    </Col>
                    <Col md={5} style={{alignSelf: 'center'}}>
                        <div className="login-form">
                            <div className="login-logo">
                                <img src={aetlLogo} alt=""/>
                                <p>Welcome back! Please login to your account.</p>
                            </div>
                            <form action="">
                                <input className="login-control" type="text" placeholder="Username" />
                                <input className="login-control" type="password" placeholder="Password" />
                                <Row className="auth-actions">
                                    <Col className="align-self-center">
                                        <label className="checkbox-inp">
                                            <input type="checkbox" name="remember"/> Remember me
                                        </label>
                                    </Col>
                                    <Col className="text-right align-self-center">
                                        <Link className="forgot-pass" to="/forgot">Forgot password?</Link>
                                    </Col>
                                </Row>
                                <Link to="/daily-activity"><button type="submit">Login</button></Link>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
