import React, { Component } from 'react';
import TraineeService from '../../services/TraineeService';

class ListTraineeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trainees: []
        }
        this.addTrainee = this.addTrainee.bind(this);
        this.editTrainee = this.editTrainee.bind(this);
        this.deleteTrainee = this.deleteTrainee.bind(this);
    }

    deleteTrainee(id){
        TraineeService.deleteTrainee(id).then( res => {
            this.setState({trainees: this.state.trainees.filter(trainee => trainee.id !== id)});
        });
    }
    viewTrainee(id){
        this.props.history.push(`/view-trainee/${id}`);
    }
    editTrainee(id){
        this.props.history.push(`/add-trainee/${id}`);
    }

    componentDidMount(){
        TraineeService.getTrainees().then((res) => {
            this.setState({ trainees: res.data});
        });
    }

    addTrainee(){
        this.props.history.push('/add-trainee/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Trainees List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTrainee}> Add Trainee</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> Trainee First Name</th>
                            <th> Trainee Last Name</th>
                            <th> Trainee Email Id</th>
                            <th> Department</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.trainees.map(
                                trainee =>
                                    <tr key = {trainee.id}>
                                        <td> {trainee.firstName} </td>
                                        <td> {trainee.lastName}</td>
                                        <td> {trainee.emailId}</td>
                                        <td> {trainee.department}</td>
                                        <td>
                                            <button onClick={ () => this.editTrainee(trainee.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTrainee(trainee.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewTrainee(trainee.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListTraineeComponent;
