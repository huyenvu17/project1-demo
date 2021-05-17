import React, { Component } from 'react';
import { Input, Space, Button, Layout, Dropdown, Menu } from 'antd';
import { SearchOutlined, BellOutlined, UserOutlined, MailOutlined, InboxOutlined } from '@ant-design/icons';


export default class TopHeader extends Component {
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
      )
    }
  }
  onSearch = (e) => {
    console.log(e)
  }

  render() {
    return (
      <Layout.Header className="topheader">
        <div className="topheader__searchbar">
          <Input.Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            prefix={<SearchOutlined />}
            onSearch={() => this.onSearch()}
            suffix={<div></div>}
          />
        </div>
        <div>
          <Dropdown overlay={this.state.menu}>
            <Button>
              <MailOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={this.state.menu}>
            <Button>
              <InboxOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={this.state.menu}>
            <Button>
              <BellOutlined />
            </Button>
          </Dropdown>

        </div>
      </Layout.Header>
    )
  }
}
