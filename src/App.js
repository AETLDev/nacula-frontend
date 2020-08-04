import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="layout">
        <Container fluid>
          <Router>
            <Row>
              <Col md={2} className="no-pad">
                <Sidebar />
              </Col>
              <Col md={10} className="no-pad">
                  <div className="layout-wrapper">
                	<Route exact path="/dashboard" component={Dashboard} />
                  </div>
              </Col>
            </Row>
          </Router>
        </Container>
      </div>
    </div>
  );
}

export default App;
