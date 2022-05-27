import React, { Component } from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

export default class MyComponent extends Component {
  state = {
   
    arrJobs: [
        {id : 'abcJob1', title : 'developer', salary: '500'},
        {id : 'abcJob2', title : 'tester', salary: '400'},
        {id : 'abcJob3', title : 'Project Manager', salary: '1000'},
    ],
  };
 
  addNewJob = (job) => {
    console.log('Check job from parent:', job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job]
    })
  }

  deleteJob = (job) => {
    let currentJob = this.state.arrJobs
    currentJob = currentJob.filter(item=> item.id !== job.id)
    this.setState({
      arrJobs: currentJob,
    })
  }
 
  render() {
    return (
      <>
      <AddComponent 
        addNewJob={this.addNewJob}
      />
     
        <ChildComponent 
            arrJobs={this.state.arrJobs}
            deleteJob={this.deleteJob}
        />
      </>
    );
  }
}
