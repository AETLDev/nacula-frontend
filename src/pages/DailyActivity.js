import React, { Component } from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import Select from 'react-select';
import {Link} from 'react-router-dom';
import {Bar} from 'react-chartjs-2';

export default class DailyActivity extends Component {
    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Progress Over Month',
                backgroundColor: '#A3A1FB',
                borderColor: '#A3A1FB',
                borderWidth: 0,
                hoverBackgroundColor: '#6765DB',
                hoverBorderColor: '#A3A1FB',
                data: [65, 59, 80, 81, 56, 55, 45]
              }
            ]
        };
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <Row>
                        <Col>
                            <h3 className="dash-title">Daily Activity List</h3>
                        </Col>
                    </Row>
                </div>
                <div className="container-fluid dashboard-wrapper white-wrapper daily-activity-table">
                    <Row>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Dept</th>
                                <th className="activity-button-col">Latest Acitivity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Web App Developer</td>
                                    <td>Development</td>
                                    <td>
                                        <Link className="activity-button" to="/">Latest Activity</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>John</td>
                                    <td>Android Developer</td>
                                    <td>Development</td>
                                    <td>
                                        <Link className="activity-button" to="/">Latest Activity</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Michelle</td>
                                    <td>iOS Developer</td>
                                    <td>Development</td>
                                    <td>
                                        <Link className="activity-button" to="/">Latest Activity</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Smith</td>
                                    <td>UX Designer</td>
                                    <td>Design</td>
                                    <td>
                                        <Link className="activity-button" to="/">Latest Activity</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Rafael</td>
                                    <td>Illustrator</td>
                                    <td>Design</td>
                                    <td>
                                        <Link className="activity-button" to="/">Latest Activity</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Andy</td>
                                    <td>Full-Stack Developer</td>
                                    <td>Development</td>
                                    <td>
                                        <Link className="activity-button" to="/">Latest Activity</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </div>
                <div className="container-fluid dashboard-wrapper mt-40 da-wrapper">
                    <Row>
                        <Col>
                            <div className="application-block">
                                <div className="block-head">
                                    <h3>Daily Activity</h3>
                                    <div className="daily-activity-search">
                                        <input type="text" placeholder="Search Employees Name..."/>
                                    </div>
                                    <div className="daily-activity-select">                                        
                                        <Select 
                                        className="app-option daily-activity-option" 
                                        options={[
                                            { value: 'chocolate', label: '10 Jun 2020' },
                                            { value: 'strawberry', label: '10 Aug 2019' },
                                            { value: 'vanilla', label: '10 Sep 2018' }
                                        ]} 
                                        defaultValue={[
                                            { value: '', label: 'Team' }
                                        ]} />
                                        <Select 
                                        className="app-option daily-activity-option" 
                                        options={[
                                            { value: 'chocolate', label: '2 months' },
                                            { value: 'strawberry', label: '3 months' },
                                            { value: 'vanilla', label: '5 months' },
                                            { value: 'icecream', label: '7 months' }
                                        ]} 
                                        defaultValue={[ 
                                            { value: 'icecream', label: '7 months' }
                                        ]} />
                                    </div>
                                </div>
                                <div className="block-content">
                                    <Bar
                                    data={data}
                                    width={100}
                                    height={500}
                                    options={{
                                        maintainAspectRatio: false
                                    }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="application-block working-hour-block mt-40">
                                <div className="block-head">
                                    <h3>Working Hour</h3>
                                </div>
                                <div className="block-content">
                                    <Table hover className="working-hour-table" responsive>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="table-search">
                                                        <input type="text" placeholder="Search Employees Name..."/>
                                                    </div>
                                                </th>
                                                <th>Location</th>
                                                <th>Sun <br/><small>5-07-2020</small></th>
                                                <th>Mon <br/><small>6-07-2020</small></th>
                                                <th>Tue <br/><small>7-07-2020</small></th>
                                                <th>Wed <br/><small>8-07-2020</small></th>
                                                <th>Total Hour</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="wh-profile">
                                                        <img src="https://i.pravatar.cc/50" alt="WH Avatar"/>
                                                        <div className="wh-caption">
                                                            <p>David James</p>
                                                            <span>UI/UX Designer</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Dhaka</td>
                                                <td>6 hour</td>
                                                <td>4 hour</td>
                                                <td>8 hour</td>
                                                <td>5 hour</td>
                                                <td>35 hours</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="wh-profile">
                                                        <img src="https://i.pravatar.cc/50" alt="WH Avatar"/>
                                                        <div className="wh-caption">
                                                            <p>David James</p>
                                                            <span>UI/UX Designer</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Dhaka</td>
                                                <td>6 hour</td>
                                                <td>4 hour</td>
                                                <td>8 hour</td>
                                                <td>5 hour</td>
                                                <td>35 hours</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="wh-profile">
                                                        <img src="https://i.pravatar.cc/50" alt="WH Avatar"/>
                                                        <div className="wh-caption">
                                                            <p>David James</p>
                                                            <span>UI/UX Designer</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Dhaka</td>
                                                <td>6 hour</td>
                                                <td>4 hour</td>
                                                <td>8 hour</td>
                                                <td>5 hour</td>
                                                <td>35 hours</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="wh-profile">
                                                        <img src="https://i.pravatar.cc/50" alt="WH Avatar"/>
                                                        <div className="wh-caption">
                                                            <p>David James</p>
                                                            <span>UI/UX Designer</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Dhaka</td>
                                                <td>6 hour</td>
                                                <td>4 hour</td>
                                                <td>8 hour</td>
                                                <td>5 hour</td>
                                                <td>35 hours</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}
