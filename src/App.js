import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import CreateTraineeComponent from './components/TrainingMgt/CreateTraineeComponent';
import ListTraineeComponent from './components/TrainingMgt/ListTraineeComponent';
import ViewTraineeComponent from "./components/TrainingMgt/ViewTraineeComponent";
import CreateJobComponent from './components/JobsMgt/CreateJobComponent';
import ListJobComponent from './components/JobsMgt/ListJobComponent';
import ViewJobComponent from "./components/JobsMgt/ViewJobComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListEmployeeComponent}></Route>
                        <Route path="/employees" component={ListEmployeeComponent}></Route>
                        <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
                        <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
                        {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                        <Route path="/trainees" component={ListTraineeComponent}></Route>
                        <Route path="/add-trainee/:id" component={CreateTraineeComponent}></Route>
                        <Route path="/view-trainee/:id" component={ViewTraineeComponent}></Route>
                        <Route path="/jobs" component={ListJobComponent}></Route>
                        <Route path="/add-job/:id" component={CreateJobComponent}></Route>
                        <Route path="/view-job/:id" component={ViewJobComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent/>
            </Router>
        </div>

    );
}

export default App;
