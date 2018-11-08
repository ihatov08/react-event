import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

export default class EventNew extends Component {
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
    await this.props.createEvent(values);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
        </div>
        <div>
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>

        <input type="submit" value="Submit" disabled={pristine || submitting} />
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}
