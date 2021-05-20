import React, { Component, Fragment, PropTypes } from 'react';
import {
  Input, Space, Modal, Button, Layout, Dropdown, Menu, Image, Divider,
  Form, Checkbox, Row, Col, Radio
} from 'antd';
import { LockOutlined, SearchOutlined, BellOutlined, UserOutlined, MailOutlined, InboxOutlined } from '@ant-design/icons';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import validation from '../../../helpers/validations';
class AddUpdateNewPatientForm extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
      patient: {
        name: '',
        dob: '',
        gender: props.gender,
      },
      isChecked: false,
      gender: null
    }
  }
  onChangegenderField = e => {
    e.preventDefault();
    console.log('radio checked', e.target);
    let value = e.target.value;
    const {gender} = this.state.patient
    this.setState({
      gender: value,
      isChecked: e.target.checked
    });
  };
  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    const {gender} = this.state
    return (
      <Fragment>
        {/* {
          type === 'radio' ?
          (
            <div>
              <Radio.Group onChange={(event) => this.setState({ gender: event.target.value })} value={gender} >
                <Radio value={0}>Male</Radio>
                <Radio value={1}>Female</Radio>
              </Radio.Group>
            <div>{touched && ((error && <span className="text-danger error-message">{error}</span>) || (warning && <span>{warning}</span>))}</div>
            </div>
          ) :
          <div>
            <input {...input} placeholder={label} type={type} className="inputgroup__input" />
            {touched && ((error && <span className="text-danger error-message">{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
        } */}
        <div>
            <input {...input} placeholder={label} type={type} className="inputgroup__input" />
            {touched && ((error && <span className="text-danger error-message">{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
      </Fragment>
    )
  }

  render() {
    const { pristine, reset, submitting, onSubmit } = this.props
    console.log(this.props)
    return (
      <Fragment>
        <form
          className="formlayout"
          onSubmit={onSubmit}
        >
          <h1 className="text-center formlayout__title">New Patient</h1>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Pet name</label>
            <div>
              <Field
                name="name"
                label="Pet name"
                component={this.renderField}
                type="text"
                placeholder="Pet name"
                className="inputgroup__input"
                validate={validation.required}
              />
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Species</label>
            <div>
              <Field
                name="species"
                label="Species"
                component={this.renderField}
                type="text"
                placeholder="Pet name"
                className="inputgroup__input"
                validate={validation.required}
              />
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Birth Date</label>
            <div>
              <Field
                name="dob"
                label="Birth Date"
                component={this.renderField}
                type="date"
                placeholder="Birth Date"
                className="inputgroup__input"
                validate={validation.required}
              />
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Breed</label>
            <div>
              <Field
                name="breed"
                label="Breed"
                component={this.renderField}
                type="text"
                placeholder="Breed"
                className="inputgroup__input"
                validate={validation.required}
              />
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Sex</label>
            <div>
              <Field
                name="sex"
                label="Gender"
                component={this.renderField}
                type="text"
                placeholder="Gender"
                className="inputgroup__input"
                validate={validation.required}
              />
              {/* <Radio.Group onChange={(event) => this.onChangegenderField(event)} value={this.state.patient.gender} >
                <Radio value={0}>Male</Radio>
                <Radio value={1}>Female</Radio>
              </Radio.Group> */}
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Coat Color</label>
            <div>
              <Field
                name="coatColor"
                label="Coat Color"
                component={this.renderField}
                type="text"
                placeholder="Coat Color"
                className="inputgroup__input"
                validate={validation.required}
              />
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Weight</label>
            <div>
              <Field
                name="weight"
                label="Weight"
                component={this.renderField}
                type="text"
                placeholder="Weight"
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
              Add new patient
            </button>
          </div>
        </form>
      </Fragment>
    )
  }
}


export default AddUpdateNewPatientForm;