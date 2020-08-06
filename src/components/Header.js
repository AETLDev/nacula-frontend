import React, { Component } from 'react';
import {Container, Row, Col, DropdownButton, Dropdown} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Container className="header" fluid>
                <Row>
                    <Col md={2} className="no-pad">
                        <div className="branding">
                            <h3>NACULA</h3>
                        </div>
                    </Col>
                    <Col md={10} className="no-pad">
                        <div className="header-content">
                            {/* <div className="search-bar">
                                <input type="text" placeholder="Search transactions, invoices or help"/>
                            </div> */}
                            <div className="header-profile">
                                {/* <ul>
                                    <li><a href="#"><img src={SupportIcon} alt=""/></a></li>
                                    <li><a href="#"><img src={ChatIcon} alt=""/></a></li>
                                    <li><a href="#"><img src={NotificationIcon} alt=""/></a></li>
                                </ul> */}
                                <DropdownButton id="dropdown-basic-button" title="John Doe">
                                    <Dropdown.Item href="">Settings</Dropdown.Item>
                                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                                </DropdownButton>
                                <img src="https://i.pravatar.cc/300" alt="" className="avatar"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
