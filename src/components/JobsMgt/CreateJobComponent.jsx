import React, { Component } from 'react';
import JobService from '../../services/JobService';
import moment from 'moment';

class CreateJobComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            jobName: '',
            description: '',
            postDate: '',
            status: ''
        }
        this.saveOrUpdateJob = this.saveOrUpdateJob.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            JobService.getJobById(this.state.id).then( (res) =>{
                let job = res.data;
                this.setState({jobName: job.jobName,
                    description: job.description,
                    postDate : moment(job.postDate).format('MM/DD/YYYY'),
                    status: job.status,
                });

            });
        }
    }
    saveOrUpdateJob = (e) => {
        e.preventDefault();
        let job = {jobName: this.state.jobName, description: this.state.description, postDate: this.state.postDate, status: this.state.status};
        console.log('job => ' + JSON.stringify(job));

        // step 5
        if(this.state.id === '_add'){
            JobService.createJob(job).then(res =>{
                this.props.history.push('/jobs');
            });
        }else{
            JobService.updateJob(job, this.state.id).then( res => {
                this.props.history.push('/jobs');
            });
        }
    }

    changeJobNameHandler= (event) => {
        this.setState({jobName: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changePostDateHandler= (event) => {
        this.setState({postDate: event.target.value});
    }

    changeStatusHandler= (event) => {
        this.setState({status: event.target.value});
    }

    cancel(){
        this.props.history.push('/jobs');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Job</h3>
        }else{
            return <h3 className="text-center">Update Job</h3>
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
                                        <label> Job Name: </label>
                                        <input placeholder="Job Name" name="jobName" className="form-control"
                                               value={this.state.jobName} onChange={this.changeJobNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Description: </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Post Date: </label>
                                        <input placeholder="Post Date" type="text" name="postDate" className="form-control"
                                               value={this.state.postDate} onChange={this.changePostDateHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Status: </label>
                                        <input placeholder="Status" name="status" className="form-control"
                                               value={this.state.status} onChange={this.changeStatusHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateJob}>Save</button>
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

export default CreateJobComponent;
