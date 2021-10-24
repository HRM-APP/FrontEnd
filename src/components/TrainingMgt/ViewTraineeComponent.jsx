import React, { Component } from 'react';
import TraineeService from '../../services/TraineeService';

class ViewTraineeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            trainee: {}
        }
    }

    componentDidMount(){
        TraineeService.getTraineeById(this.state.id).then( res => {
            this.setState({trainee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Trainee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Trainee First Name: </label>
                            <div> { this.state.trainee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Trainee Last Name: </label>
                            <div> { this.state.trainee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Trainee Email ID: </label>
                            <div> { this.state.trainee.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> Department: </label>
                            <div> { this.state.trainee.department }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTraineeComponent;
