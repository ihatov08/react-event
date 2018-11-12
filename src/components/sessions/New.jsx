import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

export default class SessionNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field;

    return(
      <div>
        <input {...input} placeholder={label} type={type} />
        { touched && error && <span>{error}</span> }
      </div>
    );
  }

  async onSubmit(values) {
    const { signInUser } = this.props;
    const response = await signInUser(values);
    console.log(response);
    this.props.history.push('/events');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Email" name="email" type="email" component={this.renderField} />
        </div>
        <div>
          <Field label="Password" name="password" type="password" component={this.renderField} />
        </div>
        <input type="submit" value="Submit" />
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}
