import React, { Component } from 'react';
import JobService from '../../services/JobService';
import moment from 'moment';

class ViewJobComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            job: {}
        }
    }

    componentDidMount(){
        JobService.getJobById(this.state.id).then( res => {
            this.setState({job: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Job Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Job Name: </label>
                            <div> { this.state.job.jobName }</div>
                        </div>
                        <div className = "row">
                            <label> Job Description: </label>
                            <div> { this.state.job.description }</div>
                        </div>
                        <div className = "row">
                            <label> Post Date: </label>
                            <div>{moment(this.state.job.postDate).format('MM/DD/YYYY')}</div>
                        </div>
                        <div className = "row">
                            <label> Status: </label>
                            <div> { this.state.job.status }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewJobComponent;
