import React, { Component, Fragment } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';
import * as userActions from '../../../redux/actions/users.actions';
import validation from '../../../helpers/validations';
import { connect } from 'react-redux';
import { omit } from 'lodash';
import Icon from '@ant-design/icons';
import {
  EyeOutlined,
  EyeInvisibleOutlined
} from '@ant-design/icons';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const style = { background: '#0092ff', padding: '8px 0' };
class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      passwordShown: true
    }
  }
  togglePasswordVisiblity = (label) => {
    this.setState({ passwordShown: !this.state.passwordShown})
    this.passwordRef.focus();
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    let passwordField = type == 'password' ? { ...omit(input, ['value']) } : { ...input };
    return (
      <Fragment>
        <div>
          {type==='password' ? (
            <div className="password__field">
              <input autoComplete="off" {...passwordField} 
              ref={(input) => this.passwordRef = input} 
              placeholder={label} 
              type={this.state.confirmPasswordShown ? 'password' : 'text'} 
              className="inputgroup__input" 
              />
              <Icon className="password__icon" 
              component={this.state.passwordShown ? EyeOutlined : EyeInvisibleOutlined} onClick={() => this.togglePasswordVisiblity(label)}/>
            </div>
          ): (
            <input {...input} placeholder={label} type={type} className="inputgroup__input" />
          )}
          {touched && ((error && <span className="text-danger error-message">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </Fragment>
    )
  }
  handleSignInUser = (values) => {
    console.log(values)
    this.props.onSignInUser(values)
  }
  render() {
    const { pristine, reset, submitting, handleSubmit } = this.props
    return (
      <Row>
        <Col span={12} offset={6}>
        <form
            className="authenpage__form formlayout"
            onSubmit={handleSubmit(this.handleSignInUser)}
          >
          <h1 className="text-center formlayout__title">SIGN IN</h1>
            <p className="text-center formlayout__subtitle">Sign in to continue to Vetspire</p>
            <div className="formlayout__inputgroup">
              <label className="inputgroup__label">Username</label>
              <div>
                <Field
                  name="username"
                  label="Username"
                  component={this.renderField}
                  type="text"
                  className="inputgroup__input"
                  validate={validation.required}
                />
              </div>
            </div>
            <div className="formlayout__inputgroup">
              <label className="inputgroup__label">Password</label>
              <div>
                <Field
                  name="password"
                  label="Password"
                  component={this.renderField}
                  type="password"
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
                Sign in
        </button>
            </div>
            <div className="text-center formlayout__linktext">
            <span>Don't have account?</span> <Link to="/signup" className="formlayout__link"> Sign up here!</Link>
            </div>
          </form>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignInUser: (data) => dispatch(userActions.signInUser(data))
})
const connected = connect(null, mapDispatchToProps)(SignIn)

const signinForm = reduxForm({
  form: 'signin',
})(connected)


export default signinForm;
