import React, { Component } from 'react';
import {Row, Col, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { IconContext } from "react-icons";
import { FiPlus, FiEdit, FiTrash } from "react-icons/fi";

export default class Employees extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <Row>
                        <Col>
                            <div className="employee-title">
                                <h3 className="dash-title">Employee List</h3>
                                <Link className="employee-add-btn" to="/employee/add">
                                <IconContext.Provider value={{size: '18px', color: "#fff"}}>
                                    <FiPlus />
                                </IconContext.Provider>
                                    Add New
                                </Link>
                            </div>
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
                                <th className="activity-button-col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="wh-profile">
                                            <img src="https://i.pravatar.cc/50" alt="WH Avatar"/>
                                            <div className="wh-caption">
                                                <p>David James</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Web App Developer</td>
                                    <td>Development</td>
                                    <td>
                                        <Link className="action-btn" to="/employee/edit/1">
                                        <IconContext.Provider value={{size: '26px', color: "#3477E4"}}>
                                            <FiEdit />
                                        </IconContext.Provider>
                                        </Link><Link className="action-btn" to="/">
                                        <IconContext.Provider value={{size: '26px', color: "#e74c3c"}}>
                                            <FiTrash />
                                        </IconContext.Provider>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <div className="wh-profile">
                                            <img src="https://i.pravatar.cc/50" alt="WH Avatar"/>
                                            <div className="wh-caption">
                                                <p>David James</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Android Developer</td>
                                    <td>Development</td>
                                    <td>
                                        <Link className="action-btn" to="/employee/edit/1">
                                        <IconContext.Provider value={{size: '26px', color: "#3477E4"}}>
                                            <FiEdit />
                                        </IconContext.Provider>
                                        </Link><Link className="action-btn" to="/">
                                        <IconContext.Provider value={{size: '26px', color: "#e74c3c"}}>
                                            <FiTrash />
                                        </IconContext.Provider>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <div className="wh-profile">
                                            <img src="https://i.pravatar.cc/50" alt="WH Avatar"/>
                                            <div className="wh-caption">
                                                <p>David James</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>iOS Developer</td>
                                    <td>Development</td>
                                    <td>
                                        <Link className="action-btn" to="/employee/edit/1">
                                        <IconContext.Provider value={{size: '26px', color: "#3477E4"}}>
                                            <FiEdit />
                                        </IconContext.Provider>
                                        </Link><Link className="action-btn" to="/">
                                        <IconContext.Provider value={{size: '26px', color: "#e74c3c"}}>
                                            <FiTrash />
                                        </IconContext.Provider>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                    <div className="wh-profile">
                                        <img src="https://i.pravatar.cc/50" alt="WH Avatar"/>
                                        <div className="wh-caption">
                                            <p>David James</p>
                                        </div>
                                    </div>
                                    </td>
                                    <td>UX Designer</td>
                                    <td>Design</td>
                                    <td>
                                        <Link className="action-btn" to="/employee/edit/1">
                                        <IconContext.Provider value={{size: '26px', color: "#3477E4"}}>
                                            <FiEdit />
                                        </IconContext.Provider>
                                        </Link><Link className="action-btn" to="/">
                                        <IconContext.Provider value={{size: '26px', color: "#e74c3c"}}>
                                            <FiTrash />
                                        </IconContext.Provider>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        <div className="wh-profile">
                                            <img src="https://i.pravatar.cc/50" alt="WH Avatar"/>
                                            <div className="wh-caption">
                                                <p>David James</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Illustrator</td>
                                    <td>Design</td>
                                    <td>
                                        <Link className="action-btn" to="/employee/edit/1">
                                        <IconContext.Provider value={{size: '26px', color: "#3477E4"}}>
                                            <FiEdit />
                                        </IconContext.Provider>
                                        </Link><Link className="action-btn" to="/">
                                        <IconContext.Provider value={{size: '26px', color: "#e74c3c"}}>
                                            <FiTrash />
                                        </IconContext.Provider>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>
                                        <div className="wh-profile">
                                            <img src="https://i.pravatar.cc/50" alt="WH Avatar"/>
                                            <div className="wh-caption">
                                                <p>David James</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Full-Stack Developer</td>
                                    <td>Development</td>
                                    <td>
                                        <Link className="action-btn" to="/employee/edit/1">
                                        <IconContext.Provider value={{size: '26px', color: "#3477E4"}}>
                                            <FiEdit />
                                        </IconContext.Provider>
                                        </Link><Link className="action-btn" to="/">
                                        <IconContext.Provider value={{size: '26px', color: "#e74c3c"}}>
                                            <FiTrash />
                                        </IconContext.Provider>
                                        </Link>
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
