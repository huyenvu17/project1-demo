import React, { Component, Fragment, PropTypes } from 'react';
import {
  Input, Space, Modal, Button, Layout, Dropdown, Menu, Image, Divider,
  Form, Checkbox, Row, Col
} from 'antd';
import { LockOutlined, SearchOutlined, BellOutlined, UserOutlined, MailOutlined, InboxOutlined } from '@ant-design/icons';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';

class AddNewPatient extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Fragment>
        <form
          className="formlayout"
        >
          <h1 className="text-center formlayout__title">New Patient</h1>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Pet name</label>
            <div>
              <Field
                name="petname"
                component="input"
                type="text"
                placeholder="Pet name"
                className="inputgroup__input"
              />
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Species</label>
            <div>
              <Field
                name="species"
                component="input"
                type="text"
                placeholder="Species"
                className="inputgroup__input"
              />
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Birth Date</label>
            <div>
              <Field
                name="dob"
                component="input"
                type="text"
                placeholder="Birth date"
                className="inputgroup__input"
              />
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Sex</label>
            <div>
              <Field
                name="sex"
                component="input"
                type="text"
                placeholder="Sex"
                className="inputgroup__input"
              />
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Coat Color</label>
            <div>
              <Field
                name="coatcolor"
                component="input"
                type="text"
                placeholder="Coat Color"
                className="inputgroup__input"
              />
            </div>
          </div>
          <div className="formlayout__inputgroup">
            <label className="inputgroup__label">Weight</label>
            <div>
              <Field
                name="weight"
                component="input"
                type="text"
                placeholder="Weight"
                className="inputgroup__input"
              />
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({

})

const addNewPatientForm = reduxForm({
  form: 'signup',
})(AddNewPatient)

export default connect(mapStateToProps, null)(addNewPatientForm);