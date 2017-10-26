import React, { Component } from 'react';
import {reduxForm, Field, reset} from 'redux-form';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import renderField from './renderField';
import {saveForm} from '../actions';
class ContactForm extends Component {

  handleFormSubmit(values) {
    this.props.saveForm(values)
    this.props.dispatch(reset('ContactForm'))
  }

  head() {
    return (
      <Helmet>
        <title>Contact</title>
        <meta property="og:title" content="Contact App" />
      </Helmet>
    )
  }
  render() { 
    const {handleSubmit} = this.props
    return (
      <div className="contact-form-container">
        {this.head()}
      <form className="contact-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field label="Full Name:" name="fname" component={renderField} type="text" />
        <Field label="Email:" name="email" component={renderField} type="email" />
        <Field label="Confirm Email:" name="emailagain" component={renderField} type="email" />
        <Field label="Message:" name="message" component={renderField} textarea={true} />
        <button className="buttons" type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {}

  if(!values.fname) {
    errors.fname = 'Please enter your full name';
  }
  if(!values.email) {
    errors.email = 'Please Enter Your Email';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if(!values.emailagain) {
    errors.emailagain = 'Please Enter Your Email Again';
  }
  if(values.email !== values.emailagain) {
    errors.email = 'Email does not match'
  }
  if(!values.message) {
    errors.message = 'Please enter a message';
  }
  return errors;
}
 
export default connect(null, {saveForm})(reduxForm({
  form: 'ContactForm',
  validate
})(ContactForm));