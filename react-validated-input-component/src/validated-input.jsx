import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      errorMessage: '',
      icon: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.password.length < 8 && this.state.password.length > 0) {
      this.setState({ errorMessage: 'Your password is too short.', icon: 'fas fa-x' });
    } else if (this.state.password === '') {
      this.setState({ errorMessage: 'A password is required.', icon: 'fas fa-x' });
    } else {
      this.setState({ errorMessage: '', icon: 'fas fa-check' });
    }
    event.preventDefault();
  }

  render() {
    return (
    <div className='container'>
      <label className='label'>Password</label>
      <form onSubmit={this.handleSubmit}>
          <input type='password' className='password-field' value={this.state.password} onChange={this.handlePasswordChange}></input>
          <i className={this.state.icon}></i>
          <div>
            <p className='error-message'>{this.state.errorMessage}</p>
          </div>
      </form>
    </div>
    );
  }
}

export default ValidatedInput;
