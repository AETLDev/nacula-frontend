import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = ({children}) => (
    <React.Fragment>
    <Header />
    <div className="layout">
    <Container fluid>
        <Row>
            <Col md={2} className="no-pad">
            <Sidebar />
            </Col>
            <Col md={10} className="no-pad">
                <div className="layout-wrapper">
                {children}
                </div>
            </Col>
        </Row>
    </Container>
    </div>
    </React.Fragment>
);

export default Layout;