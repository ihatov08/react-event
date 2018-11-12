import React, { Component } from 'react';

export default class SessionDestroy extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  async onClick(e) {
    e.preventDefault();
    const { signOutUser } = this.props;
    await signOutUser();
    // this.props.history.push('/sign_in');
  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <div>
        <a href="#" onClick={ e => this.onClick(e)}>Sign Out</a>
      </div>
    );
  }
}
