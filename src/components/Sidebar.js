import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import DashboardIcon from '../media/icon_dashboard.svg';
import ActivityIcon from '../media/icon_activity.svg';
import userIcon from '../media/icon_customers.svg';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="nav-sidebar">
                <ul>
                    <li><NavLink to="/dashboard"><img src={DashboardIcon} alt=""/> <span>Dashboard</span></NavLink></li>
                    <li><NavLink to="/daily-activity"><img src={ActivityIcon} alt=""/> <span>Daily Activity</span></NavLink></li>
                    <li><NavLink to="/employees"><img src={userIcon} alt=""/> <span>Employees</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
