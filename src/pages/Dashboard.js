import React, { Component } from 'react';
import {Container, Row, Col, Tab, Nav, ProgressBar} from 'react-bootstrap';
import {Doughnut} from 'react-chartjs-2';
import Select from 'react-select';
import empChart from '../media/emp_chart.svg';
import proChart from '../media/pro_chart.svg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class Dashboard extends Component {
    render() {
        const appData = {
            labels: [
                'MS Excel',
                'XD',
                'Photoshop'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };
        const appOptions = [
            { value: 'chocolate', label: '10 Jun 2020' },
            { value: 'strawberry', label: '10 Aug 2019' },
            { value: 'vanilla', label: '10 Sep 2018' }
        ]
        return (
            <div className="container-fluid dashboard-wrapper">
                <Row>
                    <Col>
                        <h3 className="dash-title">Dashboard Overview</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className="overview-block">
                            <div className="block-text">
                                <p>Total Employees</p>
                                <h4>100</h4>
                                <span>5+ (need)</span>
                            </div>
                            <img src={empChart} alt=""/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="overview-block">
                            <div className="block-text">
                                <p>Total Project</p>
                                <h4>42</h4>
                                <span>10+ (Upcoming)</span>
                            </div>
                            <img src={proChart} alt=""/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="overview-block">
                            <div className="online-block">
                                <CircularProgressbar 
                                value={30} 
                                text={`${30}%`}
                                styles={buildStyles({
                                    strokeLinecap: 'butt',
                                    textSize: '20px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `#A3A1FB`,
                                    textColor: '#4D4F5C',
                                    trailColor: '#EDECFE',
                                    backgroundColor: '#3e98c7',
                                  })}
                                />
                            </div>
                            <div className="online-status">
                                <div className="single-stat">
                                    <p>Time Offline <br/> <span>2 hours</span></p>
                                </div>
                                <div className="single-stat">                                    
                                    <p>Time logged in <br/> <span>30%</span></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="application-block">
                            <div className="block-head">
                                <h3>Top Five Team</h3>
                                <Select className="app-option" options={appOptions} defaultValue={appOptions[0]} />
                            </div>
                            <div className="block-content">
                                <div className="team-progress">
                                    <p>
                                        <span>UI/UX Team</span>
                                        <span>85%</span>
                                    </p>
                                    <ProgressBar now={85} />
                                </div>
                                <div className="team-progress">
                                    <p>
                                        <span>Dev Team</span>
                                        <span>80%</span>
                                    </p>
                                    <ProgressBar now={80} />
                                </div>
                                <div className="team-progress">
                                    <p>
                                        <span>Marketing Team</span>
                                        <span>75%</span>
                                    </p>
                                    <ProgressBar now={75} />
                                </div>
                                <div className="team-progress">
                                    <p>
                                        <span>Animation Team</span>
                                        <span>60%</span>
                                    </p>
                                    <ProgressBar now={60} />
                                </div>
                                <div className="team-progress">
                                    <p>
                                        <span>Management Team</span>
                                        <span>45%</span>
                                    </p>
                                    <ProgressBar now={45} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="application-block">
                            <Tab.Container id="application-tab" defaultActiveKey="all">
                                <div className="block-head">
                                    <h3>Application</h3>
                                    <Nav variant="pills" className="flex-row">
                                        <Nav.Item>
                                        <Nav.Link eventKey="all">All Apps</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="top5">Top 5</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Select className="app-option" options={appOptions} defaultValue={appOptions[0]} />
                                </div>
                                <div className="block-content">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="all">
                                            <Doughnut data={appData} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="top5">
                                            <Doughnut data={appData} />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="application-block">
                            <div className="block-head">
                                <h3>Top Five Employees</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
