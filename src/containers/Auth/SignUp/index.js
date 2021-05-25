import React, { Component, Fragment } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validation from '../../../helpers/validations';
import { omit } from 'lodash';
import * as authenActions from '../../../redux/actions/authen.actions';
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
class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      passwordShown: true,
      confirmPasswordShown: true
    }
  }
  togglePasswordVisiblity = (label) => {
    if(label === 'Password'){
      this.setState({ passwordShown: !this.state.passwordShown})
      this.passwordRef.focus();
    }  else{
      this.setState({ confirmPasswordShown: !this.state.confirmPasswordShown})
      this.confirmPasswordRef.focus();
    }
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    let passwordField = type == 'password' ? { ...omit(input, ['value']) } : { ...input };
    return (
      <Fragment>
        <div>
          {type==='password' ? (
            <div className="password__field">
              <input autoComplete="off" {...passwordField} 
              ref={(input) => label === 'Password' ? this.passwordRef = input : this.confirmPasswordRef = input} 
              placeholder={label} 
              type={label === 'Password' ? (this.state.passwordShown ? 'password' : 'text') : (this.state.confirmPasswordShown ? 'password' : 'text')} 
              className="inputgroup__input" 
              />
              <Icon className="password__icon" 
              component={(this.state.passwordShown || this.state.confirmPasswordShown) ? EyeOutlined : EyeInvisibleOutlined} onClick={() => this.togglePasswordVisiblity(label)}/>
            </div>
          ): (
            <input {...input} placeholder={label} type={type} className="inputgroup__input" />
          )}
          {touched && ((error && <span className="text-danger error-message">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </Fragment>
    )
  }
  handleSignUpUser = (values) => {
    this.props.onSignUpUser(values)
  }

  render() {
    const { pristine, reset, submitting, handleSubmit } = this.props
    return (
      <Row>
        <Col span={12} offset={6}>
          <form
            className="authenpage__form formlayout"
            onSubmit={handleSubmit(this.handleSignUpUser)}
          >
            <h1 className="text-center formlayout__title">SIGN UP</h1>
            <p className="text-center formlayout__subtitle">Easy to sign up with simple steps</p>
            <div className="formlayout__inputgroup">
              <label className="inputgroup__label">Full Name</label>
              <div>
                <Field
                  name="fullname"
                  label="Fullname"
                  component={this.renderField}
                  type="text"
                  className="inputgroup__input"
                  validate={validation.required}
                />
              </div>
            </div>
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
                  validate={[validation.required, validation.minLength6]}
                />
              </div>
            </div>
            <div className="formlayout__inputgroup">
              <label className="inputgroup__label">Confirm Password</label>
              <div>
                <Field
                  name="confirmpassword"
                  label="Confirm Password"
                  component={this.renderField}
                  type="password"
                  className="inputgroup__input"
                  validate={[validation.required, validation.matchPassword, validation.minLength6]}
                />
              </div>
            </div>
            <div className="formlayout__inputgroup buttons-group" >
              <button type="submit"
                className="btn-green"
                disabled={submitting}
              >
                Sign up
        </button>
            </div>
            <div className="text-center formlayout__linktext">
              <span>Already have account?</span> <Link to="/signin" className="formlayout__link"> Sign in</Link>
            </div>
          </form>
        </Col>
      </Row>


    );
  }
}


const mapDispatchToProps = dispatch => ({
  onSignUpUser: (data) => dispatch(authenActions.signUpUser(data))
})
const connected = connect(null, mapDispatchToProps)(SignUp)

const signUpForm = reduxForm({
  form: 'signup',
})(connected)


export default signUpForm;
