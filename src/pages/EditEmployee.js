import React, { Component } from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class EditEmployee extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <Row>
                        <Col>
                            <div className="single-activity-header">
                                <h3 className="dash-title">Edit Employee</h3>
                                <div className="add-emp-btn-group">
                                    <Link className="employee-add-btn" to="/employees">
                                        Save
                                    </Link>
                                    <Link className="employee-add-btn cancel" to="/employees">
                                        Cancel
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="container-fluid dashboard-wrapper white-wrapper daily-activity-table">
                    <Row>
                        <Form style={{width: '100%'}}>
                            <Form.Group as={Row} className="emp-form-row">
                                <Form.Label column sm="2">Profile Picture</Form.Label>
                                <Col sm="10">
                                <Form.File />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="emp-form-row">
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last name" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="emp-form-row">
                                <Col>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Email address" />
                                </Col>
                                <Col>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Phone number" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="emp-form-row">
                                <Col>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="email" placeholder="Street Address (Flat Number, House)" />
                                </Col>
                                <Col>
                                    <Form.Label>Post Code</Form.Label>
                                    <Form.Control type="text" placeholder="Post Code" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="emp-form-row">
                                <Col>
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control type="email" placeholder="Manager, IT Expert etc." />
                                </Col>
                                <Col>
                                    <Form.Label>Department</Form.Label>
                                    <Form.Control as="select">
                                        <option>Management</option>
                                        <option>Marketing</option>
                                        <option>Technology</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}
