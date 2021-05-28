import React, { Component, Fragment, PropTypes } from 'react';
import {
  Input, Space, Modal, Button, Layout, Dropdown, Menu, Image, Divider,
  Form, Checkbox, Row, Col, Radio
} from 'antd';
import { LockOutlined, SearchOutlined, BellOutlined, UserOutlined, MailOutlined, InboxOutlined } from '@ant-design/icons';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import validation from '../../../helpers/validations';
class AddUpdateScheduleForm extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
      schedule: {
        title: '',
        date: '',
        patient: '',
        client: '',
        note: ''
      },
      isChecked: false,
    }
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    const {gender} = this.state
    return (
      <Fragment>
        <div>
            <input {...input} placeholder={label} type={type} className="inputgroup__input" />
            {touched && ((error && <span className="text-danger error-message">{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
      </Fragment>
    )
  }

  render() {
    const { pristine, reset, submitting, onSubmit, isUpdate } = this.props
    return (
      <Fragment>
        <form
          className="formlayout"
          onSubmit={onSubmit}
        >
          <h1 className="text-center formlayout__title">{!isUpdate ? 'New Schedule' : 'Update Schedule'}</h1>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Title</label>
            <div>
              <Field
                name="title"
                label="Schedule title"
                component={this.renderField}
                type="text"
                className="inputgroup__input"
                validate={validation.required}
              />
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Date</label>
            <div>
              <Field
                name="date"
                label="Date"
                component={this.renderField}
                type="text"
                className="inputgroup__input"
                validate={validation.required}
              />
            </div>
          </div>
          <div className="formlayout__inputgroup buttons-group" >
            <button type="submit"
              className="btn-green"
              disabled={submitting}
            >
              {!isUpdate ? 'Add schedule' : 'Update schedule'}
            </button>
          </div>
        </form>
      </Fragment>
    )
  }
}


export default AddUpdateScheduleForm;


