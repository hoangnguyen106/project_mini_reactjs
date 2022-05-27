import { toHaveAccessibleName } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

class AddComponent extends React.Component {

    state = {
        title: "",
        salary: "",
    }
    handleChangeTittleJob = (event) => {
        this.setState({
          title: event.target.value,
        });
      };
      handleChangeSalary = (event) => {
        this.setState({
          salary: event.target.value,
        });
      };

      handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.title || !this.state.salary){
            alert("Missing parameters");
            return;
        }
        console.log("Check data input: ", this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        });

        this.setState({
            title: '',
            salary: '',
        })
      };
    render() {
        return (
            <div>   
            
            <form action="/action_page.php">
            <label htmlFor="fname">Job Tittle:</label>
            <br />
            <input
              type="text"
              defaultValue={this.state.title}
              onChange={(event) => this.handleChangeTittleJob(event)}
            />
            <br />
            <label htmlFor="lname">Salary:</label>
            <br />
            <input
              type="text"
              defaultValue={this.state.salary}
              onChange={(event) => this.handleChangeSalary(event)}
            />
            <br />
            <br />
            <input type="submit" onClick={(event) => this.handleSubmit(event)} />
          </form>
          </div>
        )
    }
}

export default AddComponent;