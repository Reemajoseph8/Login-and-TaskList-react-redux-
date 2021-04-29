import React, { Component } from "react";
import Signin from "./components/Signin";
import TaskList from "./components/TaskList";
import ComponentContainer from "./containers/ComponentContainer";
import { connect } from "react-redux";
import { signin } from "./redux/action/auth";
import { tasks, handleChange } from "./redux/action/operations";
import AddTask from "./components/AddTask";
export class App extends Component {
  state = {
    user: false,
  };

  handleLogin = async (body) => {
    const res = await this.props.signin(body);
    if (res.status === 200) {
      this.setState({
        user: true,
      });
    } else {
      window.alert(`Error code: ${res.status}`);
    }
  };

  componentDidMount = () => {
    const { token, user } = this.props;
    if (token === null) {
      this.setState({
        user: false,
      });
    } else {
      this.setState({
        user: true,
      });
    }
  };

  render() {
    const { user } = this.state;
    const { addEnable, operations } = this.props;
    return (
      <div>
        {!user ? (
          <ComponentContainer title="Login">
            <Signin handleLogin={this.handleLogin} />
          </ComponentContainer>
        ) : (
          <ComponentContainer
            title="Tasks"
            showAction
            handleChange={this.props.handleChange}
            operations={operations}
          >
            {addEnable && (
              <AddTask
                handleChange={this.props.handleChange}
                operations={operations}
              />
            )}
            <TaskList getTasks={this.props.tasks} />
          </ComponentContainer>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, operations }) => {
  console.log(operations);
  const { user, token, authenticated } = auth;
  const {
    addEnable,
    editEnable,
    editId,
    addFormData,
    editFormData,
    deleteId,
    tasksList,
  } = operations;
  return {
    user,
    token,
    authenticated,
    // ===============>
    addEnable,
    editEnable,
    editId,
    addFormData,
    editFormData,
    deleteId,
    tasksList,
    // ===============>
    operations,
  };
};

export default connect(mapStateToProps, { signin, tasks, handleChange })(App);
