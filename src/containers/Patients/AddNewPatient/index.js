import React, { Component, Fragment } from 'react';
import { Input, Space, Modal, Button, Layout, Dropdown, Menu, Image, Divider  } from 'antd';
import { SearchOutlined, BellOutlined, UserOutlined, MailOutlined, InboxOutlined } from '@ant-design/icons';

export default class AddNewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: (
        <Menu onClick={() => { }}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
          </Menu.Item>
        </Menu>
      ),
      isModalVisible: false
    }
  }


  onSearch = (e) => {
    console.log(e)
  }

  render() {
    return (
        <Fragment>
      <Modal title="Basic Modal" visible={this.state.isModalVisible} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Fragment>
    )
  }
}
