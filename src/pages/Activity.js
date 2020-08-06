import React, { Component } from 'react';
import {Row, Col, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Activity extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <Row>
                        <Col>
                            <div className="single-activity-header">                                
                                <h3 className="dash-title">David's Acitivity</h3>
                                <div className="user-id-block">
                                    <img src="https://i.pravatar.cc/300" alt=""/>
                                    <div className="user-block-caption">
                                        <h5>David James</h5>
                                        <p>UI/UX Designer</p>
                                        <p>ID: 565</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="container-fluid dashboard-wrapper white-wrapper daily-activity-table">
                    <Row>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>Time</th>
                                <th>Usage</th>
                                <th>Application</th>
                                <th>Page Title</th>
                                <th className="activity-button-col">Latest Acitivity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8:00</td>
                                    <td>2 hours</td>
                                    <td>Microsoft Word</td>
                                    <td>SAPL Invoice</td>
                                    <td>
                                        <Link className="activity-button" to="/">More Information</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>9:00</td>
                                    <td>2 hours</td>
                                    <td>Microsoft Excel</td>
                                    <td>Salary Data</td>
                                    <td>
                                        <Link className="activity-button" to="/">More Information</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>10:00</td>
                                    <td>2 hours</td>
                                    <td>Microsoft Edge</td>
                                    <td>Youtube</td>
                                    <td>
                                        <Link className="activity-button" to="/">More Information</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>11:00</td>
                                    <td>2 hours</td>
                                    <td>Microsoft Powerpoint</td>
                                    <td>Analysis Presentation</td>
                                    <td>
                                        <Link className="activity-button" to="/">More Information</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>12:00</td>
                                    <td>2 hours</td>
                                    <td>Adobe Photoshop</td>
                                    <td>Design Banner</td>
                                    <td>
                                        <Link className="activity-button" to="/">More Information</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>13:00</td>
                                    <td>2 hours</td>
                                    <td>Outlook</td>
                                    <td>Mail Checking</td>
                                    <td>
                                        <Link className="activity-button" to="/">More Information</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}
