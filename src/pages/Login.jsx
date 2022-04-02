import React, { Component } from "react";

export default class Login extends Component {
  state = {
    user: "",
    pass: "",
  };

  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    this.setState({ ...fields });
  };

  render() {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute top-[30%] shadow-lg border-2 rounded-lg p-5 w-[60%] mobile:w-[90%]">
          <p className="text-2xl">Login</p>
          <div className="flex mt-3">
            <input
              className="border-2 rounded-lg w-full p-2 outline-indigo-500 focus:border-indigo-500 ease-linear duration-200"
              placeholder="username"
              name="user"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex mt-3">
            <input
              className="border-2 rounded-lg w-full p-2 outline-indigo-500 focus:border-indigo-500 ease-linear duration-200"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <input
            type="button"
            value="Login"
            className="btn mt-7 hover:scale-[1.02]"
          />
        </div>
      </div>
    );
  }
}
