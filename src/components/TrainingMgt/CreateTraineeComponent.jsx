import React, { Component } from 'react';
import TraineeService from '../../services/TraineeService';

class CreateTraineeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            department: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.saveOrUpdateTrainee = this.saveOrUpdateTrainee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TraineeService.getTraineeById(this.state.id).then( (res) =>{
                let trainee = res.data;
                this.setState({firstName: trainee.firstName,
                    lastName: trainee.lastName,
                    emailId : trainee.emailId,
                    department: trainee.department,
                });
            });
        }
    }
    saveOrUpdateTrainee = (e) => {
        e.preventDefault();
        let trainee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, department: this.state.department};
        console.log('trainee => ' + JSON.stringify(trainee));

        // step 5
        if(this.state.id === '_add'){
            TraineeService.createTrainee(trainee).then(res =>{
                this.props.history.push('/trainees');
            });
        }else{
            TraineeService.updateTrainee(trainee, this.state.id).then( res => {
                this.props.history.push('/trainees');
            });
        }
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeDepartmentHandler= (event) => {
        this.setState({department: event.target.value});
    }

    cancel(){
        this.props.history.push('/trainees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Trainee</h3>
        }else{
            return <h3 className="text-center">Update Trainee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                               value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Department: </label>
                                        <input placeholder="Department" name="department" className="form-control"
                                               value={this.state.department} onChange={this.changeDepartmentHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateTrainee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateTraineeComponent;
