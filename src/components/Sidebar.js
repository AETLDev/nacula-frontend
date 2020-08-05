import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import DashboardIcon from '../media/icon_dashboard.svg';
import ActivityIcon from '../media/icon_activity.svg';
import prodIcon from '../media/icon_prod.svg';
import userIcon from '../media/icon_customers.svg';
import settingsIcon from '../media/icon_setting.svg';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="nav-sidebar">
                <ul>
                    <li><NavLink to="/dashboard"><img src={DashboardIcon} alt=""/> <span>Dashboard</span></NavLink></li>
                    <li><NavLink to="/daily-activity"><img src={ActivityIcon} alt=""/> <span>Daily Activity</span></NavLink></li>
                    <li><NavLink to="/productivity"><img src={prodIcon} alt=""/> <span>Productivity</span></NavLink></li>
                    <li><NavLink to="/location-report"><img src={userIcon} alt=""/> <span>Location Report</span></NavLink></li>
                    <li><NavLink to="/settings"><img src={settingsIcon} alt=""/> <span>Settings</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
