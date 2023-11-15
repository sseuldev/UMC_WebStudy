import React, { Component } from "react";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="button">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>환영합니다!</h1>;
}

function GuestGreeting(props) {
  return <h1>로그인 해주세요!</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>로그인</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>로그아웃</button>;
}

export default LoginControl;
