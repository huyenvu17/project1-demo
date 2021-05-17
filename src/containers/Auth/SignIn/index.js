import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const style = { background: '#0092ff', padding: '8px 0' };
export default class SignIn extends Component {
  render() {
    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <Row>
        <Col span={12} offset={6}>
          <Form
            name="normal_login"
            className="authenpage__form formlayout"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <h1 className="text-center formlayout__title">SIGN IN</h1>
            <p className="text-center formlayout__subtitle">Sign in to continue to Vetspire</p>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
              className="formlayout__inputgroup"
            >
              <label className="inputgroup__label">Username</label>
              <Input 
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Username"
                className="inputgroup__input"
                 />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
              className="formlayout__inputgroup"
            >
              <label className="inputgroup__label">Password</label>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className="inputgroup__input"
              />
            </Form.Item>
            <Form.Item style={{textAlign: 'right'}}>
              <a className="login-form-forgot formlayout__link" href="" >
                Forgot password?
              </a>
            </Form.Item>
            <Form.Item>
              
              {/* <Link type="primary" htmlType="submit" to="/patients" className="login-form-button">
                SIGN IN
              </Link> */}
              <Button type="primary" htmlType="submit" to="/patients" className="login-form-button formlayout__button">SIGN IN</Button>
            </Form.Item>
            <Form.Item className="text-center formlayout__linktext">
              <span>Don't have account?</span> <Link to="/signup" className="formlayout__link"> Sign up here!</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}
