import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DailyActivity from './pages/DailyActivity';
import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import Activity from './pages/Activity';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard">
            <Layout>
              <Dashboard />
            </Layout>
          </Route>
          <Route exact path="/daily-activity">
            <Layout>
              <DailyActivity />
            </Layout>
          </Route>
          <Route exact path="/activity/:id">
            <Layout>
              <Activity />
            </Layout>
          </Route>
          <Route exact path="/employees">
            <Layout>
              <Employees />
            </Layout>
          </Route>
          <Route exact path="/employee/add">
            <Layout>
              <AddEmployee />
            </Layout>
          </Route>
          <Route exact path="/employee/edit/:id">
            <Layout>
              <EditEmployee />
            </Layout>
          </Route>
      </Router>
    </div>
  );
}

export default App;
