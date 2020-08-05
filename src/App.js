import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DailyActivity from './pages/DailyActivity';

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
      </Router>
    </div>
  );
}

export default App;
