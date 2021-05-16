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
            className="authenpage__form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <h1 className="text-center">SIGN IN</h1>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <label>Username</label>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <label>Password</label>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item style={{textAlign: 'right'}}>
              <a className="login-form-forgot" href="" >
                Forgot password?
              </a>
            </Form.Item>
            <Form.Item>
              <Link type="primary" htmlType="submit" to="/patients" className="login-form-button">
                SIGN IN
        </Link>
        Or <Link href="">register now!</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}
