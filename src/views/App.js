import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListToDo from "./Todos/ListToDo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListUser from "./Users/ListUser"

import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import React from "react";
import DetailUser from "./Users/DetailUser"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
          <Route exact={true} path="/" >
            <Home />
          </Route>
          <Route path="/todos">
            <ListToDo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
          <Route  exact={true} path="/user">
            <ListUser />
          </Route>
          <Route path="/user/:id">
            <DetailUser />
          </Route>
        </Switch>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
