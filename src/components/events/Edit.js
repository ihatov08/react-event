import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

export default class EventEdit extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.readEvent(id);
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

  async onDeleteClick() {
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push('/');
  }

  async onSubmit(values) {
    await this.props.updateEvent(values);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
        </div>
        <div>
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>

        <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
        <Link to="/">Cancel</Link>
        <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
      </form>
    );
  }
}
