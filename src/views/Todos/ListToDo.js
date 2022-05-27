import React, { Component } from "react";
import "./ListTodos.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";

class ListToDo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making videos" },
      { id: "todo3", title: "Fix bugs" },
    ],
    editTodo: [],
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Add success !!!");
  };

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({ listTodos: currentTodos });
    toast.success("Deleted successfully!!!");
  };

  handleUpdateTodo = (todo) => {
    let { editTodo, listTodos } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;

    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCoppy = [...listTodos];

      let objIndex = listTodosCoppy.findIndex((item) => item.id === todo.id);
      //Update object's name property.
      listTodosCoppy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCoppy,
        editTodo: "edit",
      });
      toast.success("Updated successfully!!!");
      return;
    }

    this.setState({ editTodo: todo });
  };

  handleOnChangeTodo = (event) => {
    let editTodoCoppy = { ...this.state.editTodo };
    editTodoCoppy.title = event.target.value;
    this.setState({
      editTodo: editTodoCoppy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("Check emty obj", isEmptyObj);
    return (
      <>
        <p>Simple Todo Apps with ReactJS (Hoang Nguyen IT)</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                {
                  /* <input value={item.title} /> */
                }
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleUpdateTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Color(ListToDo);
